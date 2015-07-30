<!DOCTYPE html>
<html>
<head>
	<title>Pie</title>
	<style>
.a{height:100px; width:800px; margin:auto;}
.a1{
	height:80px;
	width:150px;
	text-align: center;
	padding:5px;
}
.a2{height:80px; width:150px; margin-left:160px; text-align: center;
	padding:5px; margin-top:-24px}
.a3{height:80px; width:150px; margin-left:160px; text-align: center;
	padding:5px; margin-top:-24px}
.a4{height:80px; width:150px; margin-left:160px; text-align: center;
	padding:5px; margin-top:-23px}
</style>
	<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<link rel="stylesheet" type="text/css" href="../dhtmlx/dhtmlxChart/codebase/dhtmlxchart.css"/>
    <script src="../dhtmlx/dhtmlxChart/codebase/dhtmlxchart.js"></script>  
    <script src="../dhtmlx/dhtmlxChart/samples/common/testdata.js"></script>
	<script>
		var myPieChart;
		function doOnLoad() {
			myPieChart = new dhtmlXChart({
				view:"pie",
				container:"chart1",
				value:"#num#",
				color:"#color#",
				label:function(obj){
					var sum = myPieChart.sum("#num#");
					var text = Math.round(parseFloat(obj.num)/sum*100)+"%";
					return "<div>"+obj.danwei  +obj.num+"家<br>"+text+"</div>";
				},
				pieInnerText:"#num#",
				shadow:0,
				legend:{
					width: 75,
					align:"right",
					valign:"middle",
					template:"#level#"
				}
			});
			myPieChart.parse(company,"json");
			
		}
	</script>
</head>
<body onload="doOnLoad();">
<div class="a"> 
   <div class="a1"> <a href="chart2.jsp">发行单位树形图</a>
   <div class="a2"> <a href="chart1.jsp">发行单位饼图</a>
   <div class="a3"> <a href="chart21.jsp">债券种类树形图</a>
   <div class="a4"> <a href="chart11.jsp">债券种类饼图</a>
   </div>
   </div>
   </div>
   </div>
</div>
	<table>
		<tr>
			<td><div id="1" style="width:400px;height:100px; margin-left:600px; ">按发行单位统计</div></td>
			<td></td>
		</tr>
		<tr>
			<td><div id="chart1" style="width:400px;height:250px; margin-left:600px;border:1px solid #A4BED4;"></div></td>
			
		</tr>
	</table>
</body>
</html>