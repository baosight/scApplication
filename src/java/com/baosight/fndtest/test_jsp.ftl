<#list report_view as e>
try {
        ${e.user_name} = request.getParameter("${e.user_name}");
        if (${e.user_name}.equals("null"))
        {
         ${e.user_name}="";
        }
	} catch(Exception e) 
        {}
<#/list>