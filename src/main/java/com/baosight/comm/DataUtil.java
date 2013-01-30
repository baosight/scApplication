package com.baosight.comm;

import java.io.IOException;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import oracle.apps.bis.pmv.common.GenericUtil;
import oracle.apps.fnd.common.AppsContext;
import oracle.apps.fnd.common.WebAppsContext;

import com.baosight.fndtest.JsonUtil;
import com.baosight.fndtest.PropertyUtils;
import com.baosight.comm.DealResult;

public class DataUtil {
	/**
	 * 得到连接
	 * 
	 * @param request
	 * @param response
	 * @param application
	 * @return
	 * @throws IOException
	 */
	private static Connection getConn(HttpServletRequest request,
			HttpServletResponse response, ServletContext application)
			throws IOException {
		String connMethod = "web";
		Connection conn;
		// Get Connection_method
		PropertyUtils pty = new PropertyUtils();
		String osname = System.getProperty("os.name");
		String realpath = application.getRealPath("/");
		if (osname.startsWith("win") || osname.startsWith("Win")) {
			pty.setFilePath(Constants.LOCAL_SETTING_PROPERTIES);
		} else {
			pty.setFilePath(realpath + Constants.SERVER_SETTING_PROPERTIES);
		}
		connMethod = pty.get("connect_method");

		AppsContext apps;
		WebAppsContext wtcx;

		if (connMethod.equals("local")) {

			apps = new AppsContext(Constants.ERP_DVLP_DB);
			boolean result = apps.getSessionManager().validateLogin(
					Constants.USER_NAME, Constants.PASSWORD);
			conn = apps.getJDBCConnection();
		} else {
			GenericUtil genericUtil = new GenericUtil();
			wtcx = genericUtil.validateContext(request, response);
			conn = wtcx.getJDBCConnection();
		}
		return conn;
	}
	
	public static String callSP(String sql,String[] param,HttpServletRequest request,
			HttpServletResponse response, ServletContext application) throws IOException {
		DealResult dr=new DealResult();

		String jsonStr = "{}";
		Connection conn = getConn(request, response, application);
		//update operation
		CallableStatement cstmt = null;
		try {
			conn.setAutoCommit(false);
			cstmt = conn
					.prepareCall(sql);
			
			if (param!=null){
				/*
				Set<String> key = param.keySet();
		        for (Iterator it = key.iterator(); it.hasNext();) {
		            String index = it.next().toString();
		            String value = (String)param.get(index);
		            cstmt.setString(index, value);
		          //参数打印用于调试
		            System.out.println(index+":"+ value);
		        }*/
				for (int i=0;i<param.length;i++){
					cstmt.setString(i+1, param[i]);
				}
			}
	       
	       	cstmt.execute();
			conn.commit();
			dr.setResult("successed");

		} catch (Exception e) {
			e.printStackTrace();
			dr.setResult(e.toString());
			jsonStr = "add failure!!!"+ e.toString();
			try {
				conn.rollback();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				jsonStr = jsonStr + e1.toString();
			}
		} finally {
			free(conn, cstmt, null);
		}
		
		return JsonUtil.getJsonString4JavaPOJO(dr);
	}
	
	/**
	 * 释放连接
	 * 
	 * @param conn
	 * @param stmt
	 * @param rs
	 */
	public static void free(Connection conn, PreparedStatement stmt,
			ResultSet rs) {
		try {
			if (rs != null) {
				rs.close();
			}
			if (stmt != null) {
				stmt.close();
			}
			if (conn != null) {
				conn.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}


	/**
	 * 查询sql
	 * 
	 * @param sql
	 * @param request
	 * @param response
	 * @param application
	 * @return
	 * @throws IOException
	 */
	public static String queryJson(String sql, HttpServletRequest request,
			HttpServletResponse response, ServletContext application)
			throws IOException {
		String jsonStr = "{}";
		
		Connection conn = getConn(request, response, application);
		ResultSet rs = null;
		PreparedStatement preStat = null;

		try {
			// conn=apps.getJDBCConnection(apps,apps.getSessionId());
			preStat = conn.prepareStatement(sql);
			rs = preStat.executeQuery();
			jsonStr = JsonUtil.extractJSONArray(rs);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {

			free(conn, preStat, rs);

		}
		return jsonStr;
	}

	
	
}
