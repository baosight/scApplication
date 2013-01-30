<%@ page contentType="text/html;charset=UTF-8"%>
<%@page import="oracle.apps.fnd.common.AppsContext"%>
<%@page import="java.sql.Connection"%>
<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.CallableStatement"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="com.baosight.fndtest.JsonUtil"%>
<%@page import="com.baosight.fndtest.PropertyUtils"%>
<%@page import="java.io.PrintWriter"%>
<%@page import="oracle.apps.fnd.common.WebAppsContext"%>
<%@page import="oracle.apps.bis.pmv.common.UiUtil"%>
<jsp:useBean id="genericUtil" class="oracle.apps.bis.pmv.common.GenericUtil" scope="request" />
<jsp:useBean id="dataUtil" class="com.baosight.comm.DataUtil" scope="request" />
<%
	response.setContentType("text/plain;charset=UTF-8");
	response.setHeader("Pragma", "No-Cache");
	response.setHeader("Cache-Control", "No-Cache");
	response.setDateHeader("Expires", 0);
	PrintWriter obj_out;
	obj_out = response.getWriter();
	String message = "";
	String connMethod = "web";
	Connection conn;
	String SEARCH_TYPE = "";
	String DEPARTURE_DATE = "";
	String LOADING_PORT = "";
	String DELIVERY_PORT = "";
	String CONTRACT_NUM = "";
	String BILL_NUM = "";
	String FLIGHT_NUM = "";
	String FRE_ITEM_NUM = "";
	String FRE_ITEM_DESC = "";
	String ITEM_DESC = "";
	String BAOSTEEL_NUM = "";
	String SHIPMENT_HEADER_ID = "";
	String SHIPMENT_LINE_ID = "";
	String ORDERED_QTY = "";
	String SHIP_QTY = "";
	String UOM = "";
	try {
		SEARCH_TYPE = request.getParameter("SEARCH_TYPE");
		if (SEARCH_TYPE.equals("null")) {
			SEARCH_TYPE = "";
		}
	} catch (Exception e) {
	}

	try {
		DEPARTURE_DATE = request.getParameter("DEPARTURE_DATE");
		if (DEPARTURE_DATE.equals("null")) {
			DEPARTURE_DATE = "";
		}
	} catch (Exception e) {
	}

	try {
		LOADING_PORT = request.getParameter("LOADING_PORT");
		if (LOADING_PORT.equals("null")) {
			LOADING_PORT = "";
		}
	} catch (Exception e) {
	}

	try {
		DELIVERY_PORT = request.getParameter("DELIVERY_PORT");
		if (DELIVERY_PORT.equals("null")) {
			DELIVERY_PORT = "";
		}
	} catch (Exception e) {
	}

	try {
		CONTRACT_NUM = request.getParameter("CONTRACT_NUM");
		if (CONTRACT_NUM.equals("null")) {
			CONTRACT_NUM = "";
		}
	} catch (Exception e) {
	}

	try {
		BILL_NUM = request.getParameter("BILL_NUM");
		if (BILL_NUM.equals("null")) {
			BILL_NUM = "";
		}
	} catch (Exception e) {
	}

	try {
		FLIGHT_NUM = request.getParameter("FLIGHT_NUM");
		if (FLIGHT_NUM.equals("null")) {
			FLIGHT_NUM = "";
		}
	} catch (Exception e) {
	}

	try {
		FRE_ITEM_NUM = request.getParameter("FRE_ITEM_NUM");
		if (FRE_ITEM_NUM.equals("null")) {
			FRE_ITEM_NUM = "";
		}
	} catch (Exception e) {
	}

	try {
		FRE_ITEM_DESC = request.getParameter("FRE_ITEM_DESC");
		if (FRE_ITEM_DESC.equals("null")) {
			FRE_ITEM_DESC = "";
		}
	} catch (Exception e) {
	}

	try {
		ITEM_DESC = request.getParameter("ITEM_DESC");
		if (ITEM_DESC.equals("null")) {
			ITEM_DESC = "";
		}
	} catch (Exception e) {
	}

	try {
		BAOSTEEL_NUM = request.getParameter("BAOSTEEL_NUM");
		if (BAOSTEEL_NUM.equals("null")) {
			BAOSTEEL_NUM = "";
		}
	} catch (Exception e) {
	}

	try {
		SHIPMENT_HEADER_ID = request.getParameter("SHIPMENT_HEADER_ID");
		if (SHIPMENT_HEADER_ID.equals("null")) {
			SHIPMENT_HEADER_ID = "";
		}
	} catch (Exception e) {
	}

	try {
		SHIPMENT_LINE_ID = request.getParameter("SHIPMENT_LINE_ID");
		if (SHIPMENT_LINE_ID.equals("null")) {
			SHIPMENT_LINE_ID = "";
		}
	} catch (Exception e) {
	}

	try {
		ORDERED_QTY = request.getParameter("ORDERED_QTY");
		if (ORDERED_QTY.equals("null")) {
			ORDERED_QTY = "";
		}
	} catch (Exception e) {
	}

	try {
		SHIP_QTY = request.getParameter("SHIP_QTY");
		if (SHIP_QTY.equals("null")) {
			SHIP_QTY = "";
		}
	} catch (Exception e) {
	}

	try {
		UOM = request.getParameter("UOM");
		if (UOM.equals("null")) {
			UOM = "";
		}
	} catch (Exception e) {
	}

	//Search
	if (SEARCH_TYPE != null && SEARCH_TYPE.equals("VENDOR")) {
		String sql = "select vendor_site_id,vendor_site_code,VENDOR_SITE,VENDOR_NAME  from bs_view_vender_site";
		obj_out.print(dataUtil.queryJson(sql, request, response, application));
		
	}else if(SEARCH_TYPE != null && SEARCH_TYPE.equals("CURRENCY")){
		String sql = "select currency_code from fnd_currencies_vl where enabled_flag = 'Y' and currency_flag <> 'N'";
		obj_out.print(dataUtil.queryJson(sql, request, response, application));
		
	}
	else if(CONTRACT_NUM != null){
		
		String sql ="select substr(msib.segment1, 1, instr(msib.segment1, '-') - 1) contract_num, msib_fre.segment1 FRE_ITEM_NUM,msib_fre.description FRE_ITEM_DESC,msib.attribute14 baosteel_num from mtl_system_items_b msib, mtl_system_items_b msib_fre where msib.segment1 = msib_fre.attribute1(+) and msib.segment1 like '"+CONTRACT_NUM+"%'";
		obj_out.print(dataUtil.queryJson(sql, request, response, application));
		
	}
	
%>