<%@ page import="com.fenfei.springmvc.java_ST.pojos.*" language="java" contentType="text/html; charset=UTF8"
    pageEncoding="UTF8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF8">
<title>Insert title here</title>
<script src="<%=request.getContextPath()%>/js/lib/jquery-1.9.1.js"></script>
<script src="<%=request.getContextPath()%>/js/sqtb_child_add.js"></script>
</head>
<% 
	ApplyChild applychild=(ApplyChild)request.getAttribute("applychild");
	if(applychild==null)
	{
		out.println("非法访问，请关闭！");
		return ;
	}
%>
<body>
	<div>
	<form id="sqtb_child_mod_form" action="sqtb/sqtb_child_mod_save" method="post" >
		<input type="hidden" id="id" name="id" value="<%=applychild.getId() %>"/>
		<table align="center">
		<tr>
			<td>债券品种:</td><td><select name="zq_class" style="width:160px">
			<option value="10" <% if(applychild.getZq_class()==10) out.println("selected"); %>>企业债券</option>
			<option value="20" <% if(applychild.getZq_class()==20) out.println("selected"); %>>公司债券</option>
			<option value="30" <% if(applychild.getZq_class()==30) out.println("selected"); %>>中期票据</option>
			<option value="40" <% if(applychild.getZq_class()==40) out.println("selected"); %>>短期融资券</option>
			<option value="50" <% if(applychild.getZq_class()==50) out.println("selected"); %>>非定向公开债券融资工具</option>
			<option value="60" <% if(applychild.getZq_class()==60) out.println("selected"); %>>超短期融资券</option>
			<option value="70" <% if(applychild.getZq_class()==70) out.println("selected"); %>>其他</option>
			</select></td></tr>
		
		<tr><td>计划发行日期:</td><td><input type="text" name="fx_date" value="<%=applychild.getFx_date().toLocaleString() %>" style="width:160px"></td></tr>
		<tr><td>计划发行额度:</td><td>  <input type="text" name="fx_ed" value="<%=applychild.getFx_ed() %>" style="width:160px"></td></tr>
		<tr><td>预计发行利率:</td><td><input type="text" name="fx_lilv" value="<%=applychild.getFx_lilv() %>" style="width:160px"></td></tr>
		<tr><td>用途:</td><td><textarea name="use"  style="width:160px; height:160px"><%=applychild.getPurpose() %></textarea></td></tr>
		<tr><td><input type="button" onclick="SQTB_Child_MOD()" value="提交"/></td><td><input type="reset" value="重置"></td></tr>
		</table>
	</form>
	</div>
</body>
</html>