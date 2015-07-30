function SQSH_INIT() {
	SQSH_doLoadTree();
	SQSH_doLoadSearch();
	SQSH_doLoadChildGird();
	SQSH_doLoadGird();
}
var sqsh_tree;
var SQSH_grid;
var SQSH_childgrid;
function SQSH_doLoadTree() {
	var url = "sqtb/trees";
	var loader = dhtmlxAjax.getSync(url);
	var str = loader.xmlDoc.responseText;

	var jsondata = strToJson(str);
	
	sqsh_tree = new dhtmlXTreeObject("mytree", "100%", "100%", 0);
	sqsh_tree.setSkin('dhx_skyblue');
	sqsh_tree.setImagePath("dhtmlx/dhtmlxTree/codebase/imgs/csh_dhx_skyblue/");
	sqsh_tree.enableCheckBoxes(false);
	sqsh_tree.enableThreeStateCheckboxes(false);

	sqsh_tree.loadJSONObject(jsondata, function() {
		// alert("Your data has been loaded.");
	});
	sqsh_tree.setOnClickHandler(SQSH_treeonclick);
	sqsh_tree.openItem("#");
};
function strToJson(str) {
	var json = (new Function("return " + str))();
	return json;
}
function SQSH_treeonclick(id) {
	var itemId = id;
	var url;
	if(itemId=="#"){
		url="sqsh/search";
		sqsh_tree.openItem(itemId);
	}
	else if (sqsh_tree.hasChildren(itemId)) {
			sqsh_tree.openItem(itemId);
		url="sqsh/keysearch?pk_group=&pk_org="+id+"&status=";
	} else {
		url="sqsh/keysearch?pk_group="+id+"&pk_org=&status=";
	}
	SQSH_grid.clearAll();
	SQSH_grid.load(url,"json");
	SQSH_grid.selectRow(0);
};
function SQSH_doLoadSearch() {
	var searchForm, searchData;
	searchData = [ {
		type : "settings",
		position : "label-top",
		labelWidth : 80,
		inputWidth : 120
	}, {
		type : "fieldset",
		label : "快速查询",
		labelWidth : 80,
		inputWidth : "auto",
		list : [ {
			type : "input",
			name : "pk_group",
			label : "发行单位"
		}, {
			type : "input",
			name : "pk_org",
			label : "集团"
		}, {
			type : "input",
			name : "status",
			label : "审核状态",
		}, {
			type : "button",
			name : "Submit",
			value : "确定"
		} ]
	} ];
	searchForm = new dhtmlXForm("mysearch", searchData);
	searchForm.attachEvent("onButtonClick", function(button_id) {
		if (button_id == "Submit") {

			var pk_group=searchForm.getItemValue("pk_group");
			var pk_org=searchForm.getItemValue("pk_org");
			var status=searchForm.getItemValue("status");
			var url="sqsh/keysearch?pk_group="+pk_group+"&pk_org="+pk_org+"&status="+status;
			
			SQSH_grid.clearAll();
			SQSH_grid.load(url,"json");
		} else if (button_id == "Reset") {
			LoginForm.clear();
		}
	});
}
function SQSH_doLoadGird() {
	
	SQSH_grid = new dhtmlXGridObject('mygrid');
	SQSH_grid.setImagePath("dhtmlx/dhtmlxGrid/codebase/imgs/"); // 指定图片路径
	SQSH_grid.setHeader("序号,申请单号,发行单位,所属集团,债券余额,单据状态,企业级别,批复文号"); // 设置表头显示
	SQSH_grid.setInitWidths("50,100,100,100,100,100,*");
	SQSH_grid.setColTypes("ro,ro,ro,ro,ro,ro,ro");
	SQSH_grid.setColAlign("left,center,left,center,center,center,center");
	SQSH_grid.enablePaging(true, 20, 5, "pagingArea", true, "recinfoArea");
	SQSH_grid.setPagingSkin("bricks");
	SQSH_grid.init();
	SQSH_grid.setSkin("dhx_terrace");
	
	var url = "sqsh/search"
	var loader = dhtmlxAjax.getSync(url);
	var str = loader.xmlDoc.responseText;
	var jsondata = strToJson(str);
	SQSH_grid.parse(jsondata, function() {
		// alert(1);
	}, "json");

	SQSH_grid.attachEvent("onRowDblClicked", function(id, ind) {
		//open_windows_EditDept(id);
		var url="sqsh/searchchild?applyid="+id;
		SQSH_childgrid.clearAll();
		SQSH_childgrid.load(url,"json");
		
	});
//	SQSH_grid.attachEvent("onBeforeSelect", function(new_row,old_row,new_col_index){
//		var url="sqsh/searchchild?applyid="+new_row;
//		SQSH_childgrid.clearAll();
//		SQSH_childgrid.load(url,"json");
//	});
	SQSH_grid.selectRow(0);

}
function SQSH_doLoadChildGird() {
	
	SQSH_childgrid = new dhtmlXGridObject('mychildgrid');
	SQSH_childgrid.setImagePath("dhtmlx/dhtmlxGrid/codebase/imgs/"); // 指定图片路径
	SQSH_childgrid.setHeader("序号,债券品种,计划发行日期,计划发行额度,预计发行利率,用途"); // 设置表头显示
	SQSH_childgrid.setInitWidths("50,100,150,100,100,250"); 
	SQSH_childgrid.setColTypes("ro,ro,ro,ro,ro,ro");
	SQSH_childgrid.setColAlign("left,center,left,center,center,left"); 
	SQSH_childgrid.enablePaging(true, 5, 5, "childpagingArea", true,
			"childrecinfoArea");
	SQSH_childgrid.setPagingSkin("bricks");
	SQSH_childgrid.init();

	SQSH_childgrid.setSkin("dhx_terrace");

	var url = "sqsh/searchchild?applyid=0";
	SQSH_childgrid.load(url,"json");
	SQSH_childgrid.attachEvent("onRowDblClicked", function(id, ind) {
		//open_windows_EditDept(id);
	});
	SQSH_childgrid.selectRow(0);
}
function shbut(){
	var id=SQSH_grid.getSelected();
	if(id==null){
		alert("请先选择一行");
		return;
	}	
	SQSH_Windows(1,id,"申请审核");
}
function ckbut(){
	var id=SQSH_grid.getSelected();
	if(id==null){
		alert("请先选择一行");
		return;
	}	
	SQSH_Windows(0,id,"申请查看");
}
function SQSH_Windows(type,id,text){
	dhxWins = new dhtmlXWindows();
	dhxWins.enableAutoViewport(true);
	dhxWins.attachViewportTo(document.body);
	dhxWins.setImagePath("../dhtmlxWindows/codebase/imgs/");
	w1 = dhxWins.createWindow("w1", 180, 0, 1066, 575);
	w1.setText(text);
	var url="sqsh/sqshsee?type="+type+"&id="+id;
	w1.attachURL(url);
}
