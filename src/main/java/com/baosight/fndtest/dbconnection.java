package com.baosight.fndtest;
import java.sql.Connection;

import oracle.apps.fnd.common.AppsContext;
import oracle.apps.fnd.common.WebAppsContext;
public class dbconnection {
    public dbconnection() {
    }
public Connection getDBconnection()
{
    String connMethod="web";
    Connection conn=null;
    //Get Connection_method
    PropertyUtils pty=new PropertyUtils();
    String osname=System.getProperty("os.name");
            if (osname.startsWith("win") || osname.startsWith("Win")){
             pty.setFilePath("D:\\jdeveloper\\jdevbin\\jdev\\mywork\\EBSINTE\\fndtest\\public_html\\setting.properties");
            }
            else
            {
   
            }
    connMethod=pty.get("connect_method");

    AppsContext apps;
    WebAppsContext wtcx;

    if (connMethod.equals("local")){


        apps = new AppsContext("D:\\jdeveloper\\lib\\erp_produs.dbc");
        boolean result=apps.getSessionManager().validateLogin("lee","password");  
    conn=apps.getJDBCConnection();
    }
    
    
   return conn;
    
}
}
