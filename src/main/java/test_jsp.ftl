<#list report_view as e>
try {
        ${e.COLUMN_NAME} = request.getParameter("${e.COLUMN_NAME}");
        if (${e.COLUMN_NAME}.equals("null"))
        {
         ${e.COLUMN_NAME}="";
        }
	} catch(Exception e) 
        {}
<#/list>