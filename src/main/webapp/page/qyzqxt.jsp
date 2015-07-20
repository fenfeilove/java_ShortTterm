<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>企业债券检查系统</title>
<link href="<%=request.getContextPath()%>/css/qyzqxt.css" rel="stylesheet" type="text/css" /> 
<script src="<%=request.getContextPath()%>/js/lib/jquery-1.9.1.js"></script>
<script src="<%=request.getContextPath()%>/js/qyzqxt.js"></script>

</head>
<body>
	<div id="page">
		<div id="logo" style="background:url('imags/logo.png') no-repeat;"></div>
		<div id="Navigation">
			<ul>
		    	<li id="ShouYe">首页</li>
		    	<li id="TianBao">申请填报</li>
		        <li id="ShenHe">申请审核</li>
		        <li id="TongJi">申请统计</li>
		    </ul>
		</div>

		<div id="path"></div>
		<div id="View"></div>
	</div>
</body>
<script src="<%=request.getContextPath()%>/js/login.js"></script>
<script src="<%=request.getContextPath()%>/js/sqtb.js"></script>
<script src="<%=request.getContextPath()%>/dhtmlx/dhtmlxTree/codebase/dhtmlxcommon.js"></script>
<script src="<%=request.getContextPath()%>/dhtmlx/dhtmlxTree/codebase/dhtmlxtree.js"></script>
<script src="<%=request.getContextPath()%>/dhtmlx/dhtmlxTree/codebase/ext/dhtmlxtree_json.js"></script>
<link href="<%=request.getContextPath()%>/dhtmlx/dhtmlxForm/codebase/skins/dhtmlxform_dhx_skyblue.css" rel="stylesheet" type="text/css" >
<script src="<%=request.getContextPath()%>/dhtmlx/dhtmlxForm/codebase/dhtmlxcommon.js"></script>
<script src="<%=request.getContextPath()%>/dhtmlx/dhtmlxForm/codebase/dhtmlxform.js"></script>
<link href="<%=request.getContextPath()%>/dhtmlx/dhtmlxGrid/codebase/dhtmlxgrid.css" rel="stylesheet" type="text/css" />
<script src="<%=request.getContextPath()%>/dhtmlx/dhtmlxGrid/codebase/dhtmlxcommon.js"></script>
<script src="<%=request.getContextPath()%>/dhtmlx/dhtmlxGrid/codebase/dhtmlxgrid.js"></script>
<link href="<%=request.getContextPath()%>/dhtmlx/terrace/dhtmlx.css" rel="stylesheet" type="text/css" >
<script src="<%=request.getContextPath()%>/dhtmlx/terrace/dhtmlx.js"></script>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/dhtmlx/dhtmlxGrid/codebase/ext/dhtmlxgrid_pgn_bricks.css">
<script  src="<%=request.getContextPath()%>/dhtmlx/dhtmlxGrid/codebase/ext/dhtmlxgrid_pgn.js"></script>
</html>