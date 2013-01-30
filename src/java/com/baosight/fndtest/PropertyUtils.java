package com.baosight.fndtest;

/*
02	 * To change this template, choose Tools | Templates
03	 * and open the template in the editor.
04	 */
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
	 
	/**
	 *
	 * @author min
	 */
	public class PropertyUtils {
	 
	    Properties p = null;
	 
	    public void setFilePath(String path) {
	        if (path.equals("") || path == null) {
	            System.err.println("未设置路径");
	        }
	        //InputStream inStream = ClassLoader.getSystemResourceAsStream(path);
	        p = new Properties();
	        try {
	            //p.load(inStream);
	            p.load(new FileInputStream(path));
	        }
	        catch (IOException e) {//
	            // TODO Auto-generated catch block
	            e.printStackTrace();
	        }
	    }
	 
	    public void set(String key, String value) {
	        p.setProperty(key, value);
	    }
	 
	    public String get(String key) {
	        return p.getProperty(key);
	    }
	}