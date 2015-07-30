function SQTJ_INIT() {
	SQTJ_doLoadTree();
	SQTJ_ZQ_doLoadTree();
	//SQTJ_pieChart
	SQTJ_INITChart();
}
var sqtj_tree;
function SQTJ_doLoadTree() {
	var url = "sqtb/trees";
	var loader = dhtmlxAjax.getSync(url);
	var str = loader.xmlDoc.responseText;
	var jsondata = strToJson(str);
	
	sqtj_tree = new dhtmlXTreeObject("mytree", "100%", "100%", 0);
	sqtj_tree.setSkin('dhx_skyblue');
	sqtj_tree.setImagePath("dhtmlx/dhtmlxTree/codebase/imgs/csh_dhx_skyblue/");
	sqtj_tree.enableCheckBoxes(false);
	sqtj_tree.enableThreeStateCheckboxes(false);
	
	sqtj_tree.loadJSONObject(jsondata, function() {
		// alert("Your data has been loaded.");
	});
	sqtj_tree.setOnClickHandler(SQTJ_treeonclick);
	sqtj_tree.openAllItems("#");
};
function SQTJ_treeonclick(id){
	var itemId = id;
	var url;
	if (sqtj_tree.hasChildren(itemId)) {
		if (sqtj_tree.getOpenState(itemId) == "1")
			sqtj_tree.closeItem(itemId);
		else 
			sqtj_tree.openItem(itemId);
	}else {
	}
};
var sqtj_zqtree;
function SQTJ_ZQ_doLoadTree(){
	var jsondata={id:0 ,item:[{id:1,text:"债券品种",item:[{id:10,text:"企业债券"},{id:20,text:"公司债券"},{id:30,text:"中期票据"},{id:40,text:"短期融资券"},{id:50,text:"非定向公开债券融资工具"},{id:60,text:"超短期融资券"},{id:70,text:"其他"}]}]};
	sqtj_zqtree = new dhtmlXTreeObject("zq_tree", "100%", "100%", 0);
	sqtj_zqtree.setSkin('dhx_skyblue');
	sqtj_zqtree.setImagePath("dhtmlx/dhtmlxTree/codebase/imgs/csh_dhx_skyblue/");
	sqtj_zqtree.enableCheckBoxes(false);
	sqtj_zqtree.enableThreeStateCheckboxes(false);
	
	sqtj_zqtree.loadJSONObject(jsondata, function() {
		// alert("Your data has been loaded.");
	});
	sqtj_zqtree.setOnClickHandler(SQTJ_zqtreeonclick);
}
function SQTJ_zqtreeonclick(id){
	var itemId = id;
	var url;
	if (sqtj_tree.hasChildren(itemId)) {
		if (sqtj_tree.getOpenState(itemId) == "1")
			sqtj_tree.closeItem(itemId);
		else 
			sqtj_tree.openItem(itemId);
	}else {
	}
};

var JsonDate;
var status=0;
function SQTJ_ChangeStatus(id)
{
	//alert(id);
	status=id;
	SQTJ_ChangeChart();
}
function SQTJ_ChangeChart(){
	//alert(status);
	$("#chart").empty();
	if(status==0)
		SQTJ_pieChart();
	else
		SQTJ_treeChart();
}
function SQTJ_INITChart(){
	var url = "sqtj";
	var loader = dhtmlxAjax.getSync(url);
	var str = loader.xmlDoc.responseText;
	JsonDate=strToJson(str);
	SQTJ_pieChart();
}
function SQTJ_pieChart() {
	var PieChart;
	PieChart = new dhtmlXChart({
		view:"pie",
		container:"chart",
		value:"#num#",
		label:function(obj){
			var sum = PieChart.sum("#num#");
			var text = Math.round(parseFloat(obj.num)/sum*100)+"%";
			return "<div>"+obj.name+" "+obj.num+"家<br>"+text+"</div>";
		},
		pieInnerText:"#num#",
		shadow:0,
		legend:{
			width: 75,
			align:"right",
			valign:"middle",
			template:"#name#"
		}
	});
	PieChart.parse(JsonDate,"json");
}

function SQTJ_treeChart(){
	var treeChart;
	treeChart =  new dhtmlXChart({
		view:"bar",
		container:"chart",
		value:"#num#",
		width:30,
		radius:0,
		gradient:"rising",
		
		xAxis:{
			template:"#name#",
			title:"发行单位"
		},
		yAxis:{
			title:"数量"
		}
	});
	treeChart.parse(JsonDate,"json");
}









