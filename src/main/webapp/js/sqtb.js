function SQTB_INIT() {
	SQTB_doLoadTree();
	SQTB_doLoadSearch();
	
	SQTB_doLoadChildGird();
	SQTB_doLoadGird();
}
var tree;
var sqtb_grid;
var sqtb_childgrid;
function SQTB_doLoadTree() {
	var url = "sqtb/trees";
	var loader = dhtmlxAjax.getSync(url);
	// var obj = JSON.parse(loader);
	// alert(obj);
	// alert(loader.xmlDoc.responseText);
	var str = loader.xmlDoc.responseText;
	// alert(str);
	// var jsondata = {id:0 , item:[{id:"海堤",text:"海堤" ,item:[{id:"ab",
	// text:"child" ,item:[{id:3,text:"last"
	// ,item:[{id:4,text:"haha"},{id:5,text:"xixi"
	// ,item:[{id:6,text:"lala"},{id:6,text:"lala"},{id:6,text:"lala"}]}]}]}]},{id:2,
	// text:"middle", item:[{id:"21", text:"child"}]},{id:3,text:"last"}]};
	// var jsondata={id:0 ,
	// item:[{id:1,text:"集团1",item:[]},{id:2,text:"集团2",item:[]},{id:3,text:"集团3",item:[]}]};
	var jsondata = strToJson(str);
	// alert(jsondata);
	tree = new dhtmlXTreeObject("mytree", "100%", "100%", 0);
	tree.setSkin('dhx_skyblue');
	tree.setImagePath("dhtmlx/dhtmlxTree/codebase/imgs/csh_dhx_skyblue/");
	tree.enableCheckBoxes(false);
	tree.enableThreeStateCheckboxes(false);

	// var jsonList = jQuery.parseJSON(str);
	// jsonList.item=jsondata;

	tree.loadJSONObject(jsondata, function() {
		// alert("Your data has been loaded.");
	});
	tree.setOnClickHandler(SQTB_treeonclick);
	tree.openItem("#");
};
function strToJson(str) {
	var json = (new Function("return " + str))();
	return json;
}
function SQTB_treeonclick(id) {
	var itemId = id;
	var url;
	if(itemId=="#"){
		url="sqtb/search";
		tree.openItem(itemId);
	}
	else if (tree.hasChildren(itemId)) {
//		if (tree.getOpenState(itemId) == "1") {
//			tree.closeItem(itemId);
//		} else 
			tree.openItem(itemId);
		url="sqtb/keysearch?pk_group=&pk_org="+id+"&status=";
	} else {
		url="sqtb/keysearch?pk_group="+id+"&pk_org=&status=";
	}
	sqtb_grid.clearAll();
	sqtb_grid.load(url,"json");
};
function SQTB_doLoadSearch() {
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
//			var url = "sqtb/search";
//			searchForm.send(url, function(loader, response) {
//				alert(response);
//			});

			var pk_group=searchForm.getItemValue("pk_group");

			var pk_org=searchForm.getItemValue("pk_org");

			var status=searchForm.getItemValue("status");

			var url="sqtb/keysearch?pk_group="+pk_group+"&pk_org="+pk_org+"&status="+status;
			sqtb_grid.clearAll();
			sqtb_grid.load(url,"json");
		} else if (button_id == "Reset") {
			LoginForm.clear();
		}
	});
}
function SQTB_doLoadGird() {
	
	sqtb_grid = new dhtmlXGridObject('mygrid');
	sqtb_grid.setImagePath("dhtmlx/dhtmlxGrid/codebase/imgs/"); // 指定图片路径
	sqtb_grid.setHeader("序号,申请单号,发行单位,所属集团,债券余额,单据状态,企业级别,批复文号"); // 设置表头显示
	sqtb_grid.setInitWidths("50,100,100,100,100,100,*");
	sqtb_grid.setColTypes("ro,ro,ro,ro,ro,ro,ro");
	sqtb_grid.setColAlign("left,center,left,center,center,center,center");
	sqtb_grid.enablePaging(true, 20, 5, "pagingArea", true, "recinfoArea");
	sqtb_grid.setPagingSkin("bricks");
	// sqtb_grid.setSkin("dhx_skyblue");
	sqtb_grid.init();
	sqtb_grid.setSkin("dhx_terrace");
	// var combo=sqtb_grid.getCombo(3);//码表
	// combo.put("0","公司");
	// combo.put("1","部门");
	// {row:[{id:"5",data:["null","公司4","集团2","未审核"]}]}
	// var data = {
	// rows : [ {
	// id : 1,
	// data : [ "12","A Time to Kill", "John Grisham", "100" ]
	// }, {
	// id : 2,
	// data : [ "12","Blood and Smoke", "Stephen King", "1000" ]
	// }, {
	// id : 3,
	// data : [ "12","The Rainmaker", "John Grisham", "-200" ]
	// }, {
	// id: "5",
	// data : ["null","公司4","集团2","未审核"]
	// } ]
	// };
	var url = "sqtb/search"
	var loader = dhtmlxAjax.getSync(url);
	var str = loader.xmlDoc.responseText;
	var jsondata = strToJson(str);
	sqtb_grid.parse(jsondata, function() {
		// alert(1);
	}, "json");

	sqtb_grid.attachEvent("onRowDblClicked", function(id, ind) {
		//open_windows_EditDept(id);
		var url="sqtb/searchchild?applyid="+id;
		sqtb_childgrid.clearAll();
		sqtb_childgrid.load(url,"json");
		
	});
//	sqtb_grid.attachEvent("onBeforeSelect", function(new_row,old_row,new_col_index){
//		var url="sqtb/searchchild?applyid="+new_row;
//		sqtb_childgrid.clearAll();
//		sqtb_childgrid.load(url,"json");
//	});
	sqtb_grid.selectRow(0);
}
function SQTB_doLoadGridData(){
	var url = "sqtb/search";
	sqtb_grid.clearAll();
	sqtb_grid.load(url, function() {
		// alert(1);
	}, "json");
	//sqtb_grid.selectRow(0);
}
function SQTB_doLoadChildGird() {
	
	sqtb_childgrid = new dhtmlXGridObject('mychildgrid');
	sqtb_childgrid.setImagePath("dhtmlx/dhtmlxGrid/codebase/imgs/"); // 指定图片路径
	sqtb_childgrid.setHeader("序号,债券品种,计划发行日期,计划发行额度,预计发行利率,用途"); // 设置表头显示
	sqtb_childgrid.setInitWidths("50,100,150,100,100,250"); 
	sqtb_childgrid.setColTypes("ro,ro,ro,ro,ro,ro");
	sqtb_childgrid.setColAlign("left,center,left,center,center,left"); 
	sqtb_childgrid.enablePaging(true, 5, 5, "childpagingArea", true,
			"childrecinfoArea");
	sqtb_childgrid.setPagingSkin("bricks");
	sqtb_childgrid.init();
	//不知为何码表无效
	var combo=sqtb_childgrid.getCombo(1);//码表
	combo.put("10","aa");
	sqtb_childgrid.setSkin("dhx_terrace");
	// sqtb_childgrid.loadXML(url);
	var url = "sqtb/searchchild?applyid=0";
//	var loader = dhtmlxAjax.getSync(url);
//	var str = loader.xmlDoc.responseText;
//	var jsondata = strToJson(str);
//	sqtb_childgrid.parse(jsondata, function() {
//		// alert(1);
//	}, "json");
	sqtb_childgrid.load(url,"json");
	sqtb_childgrid.attachEvent("onRowDblClicked", function(id, ind) {
		//open_windows_EditDept(id);
	});
	sqtb_childgrid.selectRow(0);
}
function SQTB_add(){
	//alert("sqt_add");
	QYZQ_SQTB_add();
}
function SQTB_modify(){
	var id=sqtb_grid.getSelected();
	if(id==null){
		alert("请先选择一行");
		return;
	}
	QYZQ_SQTB_modify(id);
}
function SQTB_see(){
	//alert("sqtb_see");
	var id=sqtb_grid.getSelected();
	if(id==null){
		alert("请先选择一行");
		return;
	}
	//alert(id);
	SQSH_Windows(0,id,"申请查看");
}
function SQTB_delete(){
	var id=sqtb_grid.getSelected();
	if(id==null){
		alert("请先选择你要删除数据");
		return;
	}
	//利用对话框返回的值 （true 或者 false）  
	if (confirm("你确定删除该行数据吗？")){
		url="sqtb/delete?id="+id;
		var loader = dhtmlxAjax.getSync(url);
		var str = loader.xmlDoc.responseText;
		var ok = strToJson(str);
		if(ok.ok==false){
			alert("删除失败，请重试！");
		}
		else{
			alert("删除成功！")
		}
		SQTB_doLoadGridData();
	}  
	else {  
		return;
	}  
}
