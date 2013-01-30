package com.baosight.fndtest;
import java.io.File;  
import java.io.FileWriter;  
import java.io.IOException;  
import java.io.PrintWriter;  
import java.util.HashMap;  
import java.util.Map;   
import freemarker.template.*;  
public class FreemarkerUtil {  
    public Template getTemplate(String name){  
        try {  
            Configuration cfg = new Configuration();  
            cfg.setClassForTemplateLoading(this.getClass(),"");  
            Template temp = cfg.getTemplate(name);  
            System.out.println("获取Template完成");  
            return temp;  
        } catch (IOException e) {  
            e.printStackTrace();  
            System.out.println("获取Template失败");  
        }  
        return null;  
    }  
      
    public void print(String name,Map root){  
        try {  
            Template temp = this.getTemplate(name);  
            temp.process(root, new PrintWriter(System.out));  
            System.out.println("打印控制台");  
        } catch (TemplateException e) {  
            e.printStackTrace();  
        } catch (IOException e) {  
            e.printStackTrace();  
        }  
    }  
  
    public void filePrint(String nameFtl,Map root,String fileName){  
        FileWriter out = null;  
        try {  
            out = new FileWriter(new File("D://jdeveloper//"+fileName));//写入D盘目录下，地址可以自己定  
            Template temp = this.getTemplate(nameFtl);  
            temp.process(root, out);  
            System.out.println("输出流");  
        } catch (IOException e) {  
            e.printStackTrace();  
        } catch (TemplateException e) {  
            e.printStackTrace();  
        }  
    }  
      
}  