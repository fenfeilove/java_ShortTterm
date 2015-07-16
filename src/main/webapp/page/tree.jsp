<%@ page language="java" contentType="text/html;charset=UTF8"
	pageEncoding="UTF8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>tree</title>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css"
	href="dhtmlx/dhtmlxForm/codebase/skins/dhtmlxform_dhx_skyblue.css">
<script src="dhtmlx/dhtmlxForm/codebase/dhtmlxcommon.js"></script>
<script
	src="dhtmlx/dhtmlxGrid/codebase/excells/dhtmlxgrid_excell_cntr.js"></script>
<!-- <script src="js/tree.js"></script> -->
<script type="text/javascript">
	function doOnLoad() {
		var url = "tree/loader";
		var loader = dhtmlxAjax.getSync(url);
		var result = jQuery.parseJSON(loader.xmlDoc.responseText);
		alert(result);
		var tree;
		tree = new dhtmlXTreeObject("tree", "100%", "100%", 0);
		tree.setSkin("dhx_terrace");
		tree.setImagePath("dhtmlx/dhtmlxTree/codebase/imgs/csh_dhx_terrace/");
		tree.enableHighlighting(true);
		tree.loadXMLString(result);
		//tree.setOnClickHandler(tonclick);
	}
</script>
</head>
<body onload="doOnLoad();">
	<div id="tree" style="height: 500px;"></div>
</body>
</html>
