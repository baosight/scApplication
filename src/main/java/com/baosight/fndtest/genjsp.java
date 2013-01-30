package com.baosight.fndtest;
import java.sql.Connection;
import java.sql.SQLException;

import java.util.HashMap;
import java.util.Map;
import net.sf.json.JSONArray;


public class genjsp {
    public static void main(String[] args) throws SQLException {
        JSONArray array=new JSONArray();
        genjsp genjsp = new genjsp();
        FreemarkerUtil fu = null;  
        Map root = null;  
        dbconnection dbc=new dbconnection();
        reports report=new reports();
        Connection conn=null;
        fu = new FreemarkerUtil();  
               root = new HashMap(); 
        try{
        
        conn=dbc.getDBconnection();        array=report.GetReports("CUS_REPORT_S0004_V",conn);
        root.put("report_view",array);
        fu.print("test_jsp.ftl", root);
            fu.filePrint("test_jsp.ftl", root,"S0004.txt");
        }
        catch(Exception ex){
        ex.printStackTrace();
        }
        finally{
        conn.close();
        }
        
        
    }
}
