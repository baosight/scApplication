package com.baosight.fndtest;

import java.sql.ResultSet;

import java.sql.ResultSetMetaData;
import java.sql.SQLException;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;
import net.sf.json.util.CycleDetectionStrategy;
        
/**      
 * ����json�Ĺ����࣬����json���ת����java�����java����ת����json      
 *       
 * @author yongtree      
 * @date 2008-11-22 ����10:47:13      
 * @version 1.0      
 */        
public class JsonUtil {         
        
    /**      
     * ��һ��JSON �����ַ��ʽ�еõ�һ��java����      
     *       
     * @param jsonString      
     * @param pojoCalss      
     * @return      
     */        
    public static Object  getObject4JsonString(String jsonString, Class pojoCalss) {         
        Object pojo;         
        JSONObject jsonObject = JSONObject.fromObject(jsonString);         
        pojo = JSONObject.toBean(jsonObject, pojoCalss);         
        return pojo;         
    }         
        
        
    /**      
     * ��json HASH���ʽ�л�ȡһ��map����map֧��Ƕ�׹���      
     *       
     * @param jsonString      
     * @return      
     */        
    public static Map getMap4Json(String jsonString) {         
        JSONObject jsonObject = JSONObject.fromObject(jsonString);         
        Iterator keyIter = jsonObject.keys();         
        String key;         
        Object value;         
        Map valueMap = new HashMap();         
        
        while (keyIter.hasNext()) {         
            key = (String) keyIter.next();         
            value = jsonObject.get(key);         
            valueMap.put(key, value);         
        }         
        
        return valueMap;         
    }         
        
        
    /**      
     * ��json�����еõ���Ӧjava����      
     *       
     * @param jsonString      
     * @return      
     */        
    public static Object[] getObjectArray4Json(String jsonString) {         
        JSONArray jsonArray = JSONArray.fromObject(jsonString);         
        return jsonArray.toArray();         
        
    }         
        
        
    /**      
     * ��json���󼯺ϱ��ʽ�еõ�һ��java�����б�      
     *       
     * @param jsonString      
     * @param pojoClass      
     * @return      
     */        
    public static List getList4Json(String jsonString, Class pojoClass) {         
        
        JSONArray jsonArray = JSONArray.fromObject(jsonString);         
        JSONObject jsonObject;         
        Object pojoValue;         
        
        List list = new ArrayList();         
        for (int i = 0; i < jsonArray.size(); i++) {         
        
            jsonObject = jsonArray.getJSONObject(i);         
            pojoValue = JSONObject.toBean(jsonObject, pojoClass);         
            list.add(pojoValue);         
        
        }         
        return list;         
        
    }         
        
        
    /**      
     * ��json�����н����java�ַ�����      
     *       
     * @param jsonString      
     * @return      
     */        
    public static String[] getStringArray4Json(String jsonString) {         
        
        JSONArray jsonArray = JSONArray.fromObject(jsonString);         
        String[] stringArray = new String[jsonArray.size()];         
        for (int i = 0; i < jsonArray.size(); i++) {         
            stringArray[i] = jsonArray.getString(i);         
        
        }         
        
        return stringArray;         
    }         
        
        

        
        
    /**      
     * ��java����ת����json�ַ�      
     *       
     * @param javaObj      
     * @return      
     */        
    public static String getJsonString4JavaPOJO(Object javaObj) {         
        
        JSONObject json;         
        json = JSONObject.fromObject(javaObj);         
        return json.toString();         
        
    }         
        
    /**      
     * ��java����ת����json�ַ�,���趨���ڸ�ʽ      
     *       
     * @param javaObj      
     * @param dataFormat      
     * @return      
     */        
    public static String getJsonString4JavaPOJO(Object javaObj,         
            String dataFormat) {         
        
        JSONObject json;         
        JsonConfig jsonConfig = configJson(dataFormat);         
        json = JSONObject.fromObject(javaObj, jsonConfig);         
        return json.toString();         
        
    }         
        
    /**      
     * JSON ʱ��������      
     *       
     * @param datePattern      
     * @return      
     */        
    public static JsonConfig configJson(String datePattern) {         
        JsonConfig jsonConfig = new JsonConfig();         
        jsonConfig.setExcludes(new String[] { "" });         
        jsonConfig.setIgnoreDefaultExcludes(false);         
        jsonConfig.setCycleDetectionStrategy(CycleDetectionStrategy.LENIENT);         
        jsonConfig.registerJsonValueProcessor(Date.class,         
                new JsonDateValueProcessor(datePattern));         
        
        return jsonConfig;         
    }         
        
        
    /**      
     * ��ȥ������ɵ��ֶΣ��ر��ʺ�ȥ��j�Ķ���+ʱ��ת��      
     * @param excludes ��ȥ������ɵ��ֶ�      
     * @param datePattern      
     * @return      
     */        
    public static JsonConfig configJson(String[] excludes, String datePattern) {         
        JsonConfig jsonConfig = new JsonConfig();         
        jsonConfig.setExcludes(excludes);         
        jsonConfig.setIgnoreDefaultExcludes(true);         
        jsonConfig.setCycleDetectionStrategy(CycleDetectionStrategy.LENIENT);         
        jsonConfig.registerJsonValueProcessor(Date.class,         
                new JsonDateValueProcessor(datePattern));         
        
        return jsonConfig;         
    } 
    
    /**      
     * ��ResultSetת��ΪJsonString      
     * @param ResultSet          
     * @return      
     */ 
     public static String extractJSONArray(ResultSet rs) throws SQLException {  
     ResultSetMetaData md = rs.getMetaData();  
     int num = md.getColumnCount();  
     JSONArray array = new JSONArray();  
     while (rs.next()) {  
     JSONObject mapOfColValues = new JSONObject();  
     for (int i = 1; i <= num; i++) {  
     mapOfColValues.put(md.getColumnName(i), rs.getObject(i));  
     }  
     array.add(mapOfColValues);  
     }  
     return array.toString();  
     }
     
    /**      
     * ��ResultSetת��ΪJsonString      
     * @param ResultSet          
     * @return      
     */ 
     public static JSONArray rsToJSONArray(ResultSet rs) throws SQLException {  
     ResultSetMetaData md = rs.getMetaData();  
     int num = md.getColumnCount();  
     JSONArray array = new JSONArray();  
     while (rs.next()) {  
     JSONObject mapOfColValues = new JSONObject();  
     for (int i = 1; i <= num; i++) {  
     mapOfColValues.put(md.getColumnName(i), rs.getObject(i));  
     }  
     array.add(mapOfColValues);  
     }  
     return array;  
     }
}    

  

