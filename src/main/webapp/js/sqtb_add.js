function SQTB_ADD_INIT() {
	SQTB_ADD_doLoadTree();
	//SQTB_ADD_doLoadChildGird();
	//SQTB_ADD_doLoadGird();
}
var sqtbadd_tree;
function SQTB_ADD_doLoadTree() {
	var url = "sqtb/trees";
	var loader = dhtmlxAjax.getSync(url);
	var str = loader.xmlDoc.responseText;
	var jsondata = strToJson(str);
	
	sqtbadd_tree = new dhtmlXTreeObject("mytree", "100%", "100%", 0);
	sqtbadd_tree.setSkin('dhx_skyblue');
	sqtbadd_tree.setImagePath("dhtmlx/dhtmlxTree/codebase/imgs/csh_dhx_skyblue/");
	sqtbadd_tree.enableCheckBoxes(false);
	sqtbadd_tree.enableThreeStateCheckboxes(false);
	
	sqtbadd_tree.loadJSONObject(jsondata, function() {
		// alert("Your data has been loaded.");
	});
	sqtbadd_tree.setOnClickHandler(SQTB_ADD_treeonclick);
	sqtbadd_tree.openItem("#");
};
function SQTB_ADD_treeonclick(id) {
	var itemId = id;
	var url;
	
	if (sqtbadd_tree.hasChildren(itemId)) {
		if (sqtbadd_tree.getOpenState(itemId) == "1")
			sqtbadd_tree.closeItem(itemId);
		else 
			sqtbadd_tree.openItem(itemId);
	}else {
		parentid=sqtbadd_tree.getParentId(id);
		//$("#pk_group").inner(id);
		//$("#pk_org").inner(parentid);
		$("#pk_group").attr("value",id);
		$("#pk_org").attr("value",parentid);
	}
};

function SQTB_ADD_BACK(){
	//alert("sqtb_back");
	QYZQ_SQTB();
}
function SQTB_ADD_WARM(){
	alert("请先保存申请表后，才能添加子表！")
}
function amount(th){
    var regStrs = [
        ['^0(\\d+)$', '$1'], //禁止录入整数部分两位以上，但首位为0
        ['[^\\d\\.]+$', ''], //禁止录入任何非数字和点
        ['\\.(\\d?)\\.+', '.$1'], //禁止录入两个以上的点
        ['^(\\d+\\.\\d{6}).+', '$1'] //禁止录入小数点后两位以上
    ];
    for(i=0; i<regStrs.length; i++){
        var reg = new RegExp(regStrs[i][0]);
        th.value = th.value.replace(reg, regStrs[i][1]);
    }
}
function SQTB_ADD_CHECK(){
	
	if($("#pk_group").val()==""){
		alert("发行单位不能为空，请从组织树里选择！");
		return false;
	}
	if($("#pk_org").val()==""){
		alert("所属集团不能为空，请从组织树里选择！");
		return false;
	}
	SQTB_ADD_Submit();
}
function SQTB_ADD_Submit() {
	//alert("submit");
    var AjaxURL= "sqtb/sqtb_add_save";       
    //alert($('#sqtb_add_form').serialize());
    $.ajax({
        type: "POST",
        dataType: "json",
        url: AjaxURL,
        data: $('#sqtb_add_form').serialize(),
        success: function (data) {
            if(data!=-1){
            	QYZQ_SQTB_modify(data);
            }
        },
        error: function(data) {
            alert("error:"+data.responseText);
        }
    });
};
