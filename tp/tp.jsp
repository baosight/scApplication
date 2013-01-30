<%@ page contentType="text/html;charset=UTF-8"%>
<%@page import="oracle.apps.fnd.common.AppsContext"%>
<%@page import="java.sql.Connection"%>
<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.CallableStatement"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.util.*"%>
<%@page import="com.baosight.fndtest.JsonUtil"%>
<%@page import="com.baosight.fndtest.PropertyUtils"%>
<%@page import="java.io.PrintWriter"%>
<%@page import="oracle.apps.fnd.common.WebAppsContext"%>
<%@page import="oracle.apps.bis.pmv.common.UiUtil"%>
<jsp:useBean id="genericUtil"
	class="oracle.apps.bis.pmv.common.GenericUtil" scope="request" />
<jsp:useBean id="dataUtil"
	class="com.baosight.comm.DataUtil" scope="request" />
<%@page import="com.baosight.comm.StringUtils"%>
<%
    final String QUERY = "query";
	final String SAVING = "saving";
	response.setContentType("text/plain;charset=UTF-8");
	response.setHeader("Pragma", "No-Cache");
	response.setHeader("Cache-Control", "No-Cache");
	response.setDateHeader("Expires", 0);
	PrintWriter obj_out;
	obj_out = response.getWriter();
	String message = "";
	String connMethod = "web";
	Connection conn;
	
	String BOAT_NAME = StringUtils.defaultIfEmpty(request.getParameter("BOAT_NAME"));
	String DEPARTURE_DATE = StringUtils.defaultIfEmpty(request.getParameter("DEPARTURE_DATE"));
	String LOADING_PORT = StringUtils.defaultIfEmpty(request.getParameter("LOADING_PORT"));
	String DELIVERY_PORT = StringUtils.defaultIfEmpty(request.getParameter("DELIVERY_PORT"));
	String CONTRACT_NUM = StringUtils.defaultIfEmpty(request.getParameter("CONTRACT_NUM"));
	String BILL_NUM = StringUtils.defaultIfEmpty(request.getParameter("BILL_NUM"));
	String FLIGHT_NUM = StringUtils.defaultIfEmpty(request.getParameter("FLIGHT_NUM"));
	String FRE_ITEM_NUM = StringUtils.defaultIfEmpty(request.getParameter("FRE_ITEM_NUM"));
	String FRE_ITEM_DESC = StringUtils.defaultIfEmpty(request.getParameter("FRE_ITEM_DESC"));
	String ITEM_DESC = StringUtils.defaultIfEmpty(request.getParameter("ITEM_DESC"));
	String BAOSTEEL_NUM = StringUtils.defaultIfEmpty(request.getParameter("BAOSTEEL_NUM"));
	String SHIPMENT_HEADER_ID = StringUtils.defaultIfEmpty(request.getParameter("SHIPMENT_HEADER_ID"));
	String SHIPMENT_LINE_ID = StringUtils.defaultIfEmpty(request.getParameter("SHIPMENT_LINE_ID"));
	String ORDERED_QTY = StringUtils.defaultIfEmpty(request.getParameter("ORDERED_QTY"));
	String SHIP_QTY = StringUtils.defaultIfEmpty(request.getParameter("SHIP_QTY"));
	String UOM = StringUtils.defaultIfEmpty(request.getParameter("UOM"));
	String UNIT_PRICE = StringUtils.defaultIfEmpty(request.getParameter("UNIT_PRICE"));
	String ArrivalDate = StringUtils.defaultIfEmpty(request.getParameter("ArrivalDate"));
	String BILL_OF_LADING = StringUtils.defaultIfEmpty(request.getParameter("BILL_OF_LADING")); 
	String INVOICE_NUM = StringUtils.defaultIfEmpty(request.getParameter("INVOICE_NUM")); 
	String LINE_NO = StringUtils.defaultIfEmpty(request.getParameter("LINE_NO")); 
	//process head param
	String hFreightContractNum = StringUtils.defaultIfEmpty(request.getParameter("hFreightContractNum"));
	String hShippingCoAddr = StringUtils.defaultIfEmpty(request.getParameter("hShippingCoAddr"));
	String hVoyageNum = StringUtils.defaultIfEmpty(request.getParameter("hVoyageNum"));
	String hPortofLoading = StringUtils.defaultIfEmpty(request.getParameter("hPortofLoading"));
	String hDepartureDate = StringUtils.defaultIfEmpty(request.getParameter("hDepartureDate"));
	String hCurrency = StringUtils.defaultIfEmpty(request.getParameter("hCurrency"));
	String hFreightType = StringUtils.defaultIfEmpty(request.getParameter("hFreightType"));
	String hDescription = StringUtils.defaultIfEmpty(request.getParameter("hDescription"));
	//proecess tail param
	String VOYAGE_NUM =  StringUtils.defaultIfEmpty(request.getParameter("VOYAGE_NUM"));
	System.err.println("hFreightContractNum:"+hFreightContractNum);
	System.err.println("hShippingCoAddr:"+hShippingCoAddr);
	System.err.println("hVoyageNum:"+hVoyageNum);
	System.err.println("hPortofLoading:"+hPortofLoading);
	System.err.println("hDepartureDate:"+hDepartureDate);
	System.err.println("hCurrency:"+hCurrency);
	System.err.println("hFreightType:"+hFreightType);
	System.err.println("hDescription:"+hDescription);
	
	System.err.println("SHIPMENT_HEADER_ID:"+SHIPMENT_HEADER_ID);
	//提交操作
	String method = StringUtils.defaultIfEmpty(request.getParameter("method"),QUERY);
	


	//Search
	if (QUERY.equals(method)&&BOAT_NAME.length()>0) {
		String sql = "select boat_name, invoice_num,to_char(departure_date,'YYYY-MM-DD') as departure_date , loading_port, "
					+"delivery_port, contract_num, bill_of_lading, voyage_num, fre_item_num, fre_item_desc, item_desc, baosteel_num, "
					+"shipment_header_id, shipment_line_id, ordered_qty, ship_qty, uom "
					+"from bs_exp_fre_order_for_query T1 where T1.boat_name like '%" + BOAT_NAME + "%'";
		if (DELIVERY_PORT.length()>0)
		{
			sql+="and delivery_port like '%" + DELIVERY_PORT + "%'";
		}
		obj_out.print(dataUtil.queryJson(sql, request, response, application));
		
	} else if(SAVING.equals(method)){
		//update operation
		String param[] = new String[25];
		int i= 0;
		param[i++]=hFreightContractNum;
        param[i++]=hShippingCoAddr;
        param[i++]=hVoyageNum;			        
        param[i++]=hPortofLoading;
        param[i++]=hDepartureDate;
        param[i++]=hCurrency;
        param[i++]=hFreightType;
        param[i++]=hDescription;
        param[i++]=CONTRACT_NUM;
        param[i++]=VOYAGE_NUM;
        param[i++]=SHIPMENT_HEADER_ID;
        param[i++]=SHIPMENT_LINE_ID;
        param[i++]=BILL_OF_LADING;
        param[i++]=FRE_ITEM_NUM;
        param[i++]=FRE_ITEM_DESC;
        param[i++]=ITEM_DESC;
        param[i++]=BAOSTEEL_NUM;
        param[i++]=ORDERED_QTY;
        param[i++]=SHIP_QTY;
        param[i++]=UOM;
        param[i++]=UNIT_PRICE;
        param[i++]=ArrivalDate;
        param[i++]=DELIVERY_PORT;
        param[i++]=INVOICE_NUM;
        param[i++]=LINE_NO;
		/*
		HashMap param =  new HashMap();
		param.put("1", hFreightContractNum);
        param.put("2", hShippingCoAddr);
        param.put("3", hVoyageNum);			        
        param.put("4", hPortofLoading);
        param.put("5", hDepartureDate);
        param.put("6", hCurrency);
        param.put("7", hFreightType);
        param.put("8", hDescription);
        param.put("9", CONTRACT_NUM);
        param.put("10", VOYAGE_NUM);
        param.put("11", SHIPMENT_HEADER_ID);
        param.put("12", SHIPMENT_LINE_ID);
        param.put("13", BILL_OF_LADING);
        param.put("14", FRE_ITEM_NUM);
        param.put("15", FRE_ITEM_DESC);
        param.put("16", ITEM_DESC);
        param.put("17", BAOSTEEL_NUM);
        param.put("18", ORDERED_QTY);
        param.put("19", SHIP_QTY);
        param.put("20", UOM);
        param.put("21", UNIT_PRICE);
        param.put("22", ArrivalDate);
        param.put("23", DELIVERY_PORT);
        */
		String sql = "call web_info.imp_freight_contract ("+
				"?,?,?,?,?,"+"?,?,?,?,?,"+
				"?,?,?,?,?,"+"?,?,?,?,?,"+
				"?,?,?,?,?"+
				")";
		
		obj_out.print(dataUtil.callSP(sql, param, request, response, application));
		

	}
%>