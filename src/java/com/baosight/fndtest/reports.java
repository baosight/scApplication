package com.baosight.fndtest;

import java.sql.Connection;

import java.sql.PreparedStatement;

import java.sql.ResultSet;
import java.sql.SQLException;
import net.sf.json.JSONArray;


public class reports {

    public static JSONArray  GetReports(String view_name,Connection conn)
    {
        JSONArray array=new JSONArray();   

        PreparedStatement preStat = null;
        try 
        {
         String sql;

         
	sql="select COLUMN_NAME from DBA_TAB_COLUMNS where DBA_TAB_COLUMNS.TABLE_NAME = ?";
         

            //conn=apps.getJDBCConnection(apps,apps.getSessionId());
            preStat = conn.prepareStatement(sql);
            preStat.setString(1,view_name);
            ResultSet rs = preStat.executeQuery(); 
			array=JsonUtil.rsToJSONArray(rs);
           return array;
        }
        catch (SQLException e) {  
                    // TODO Auto-generated catch block  
                    e.printStackTrace();  
                    //return e.toString();
                    return array;
                }finally{  
                    try {  
                       
                        preStat.close();  
                        return array;
                    } catch (SQLException e) {  
                        // TODO Auto-generated catch block  
                        e.printStackTrace(); 
                         return array;
                    }  

        
        
        }

    }
   
}
