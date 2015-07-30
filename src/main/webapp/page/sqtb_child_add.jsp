<%@ page language="java" contentType="text/html; charset=UTF8"
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
	String applyid=(String)request.getAttribute("applyid");
	if(applyid==null||applyid.equals(""))
	{
		out.println("非法访问，请重试");
		return;
	}
%>
<body>
	<div>
	<form id="sqtb_child_add_form" action="sqtb/sqtb_child_add_save" method="post" >
		<input type="hidden" id="applyid" name="applyid" value="<%=applyid %>"/>
		<table align="center">
		<tr>
			<td>债券品种:</td><td><select name="zq_class" style="width:160px">
			<option value="10">企业债券</option>
			<option value="20">公司债券</option>
			<option value="30">中期票据</option>
			<option value="40">短期融资券</option>
			<option value="50">非定向公开债券融资工具</option>
			<option value="60">超短期融资券</option>
			<option value="70">其他</option>
			</select></td></tr>
		
		<tr><td>计划发行日期:</td><td><input type="date" name="fx_date" style="width:160px"></td></tr>
		<tr><td>计划发行额度:</td><td><input type="text" name="fx_ed" style="width:160px"></td></tr>
		<tr><td>预计发行利率:</td><td><input type="text" name="fx_lilv" style="width:160px"></td></tr>
		<tr><td>用途:</td><td><textarea name="use" style="width:160px; height:160px"></textarea></td></tr>
		<tr><td><input type="button" onclick="SQTB_Child_ADD()" value="提交"/></td><td><input type="reset" value="重置"></td></tr>
		</table>
	</form>
	</div>
</body>
</html>