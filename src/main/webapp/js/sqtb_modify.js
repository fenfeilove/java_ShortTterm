function SQTB_MOD_INIT() {
	SQTB_MOD_doLoadTree();
	//SQTB_MOD_doLoadChildGird();
	//SQTB_MOD_doLoadGird();
}
var sqtbmod_tree;
function SQTB_MOD_doLoadTree() {
	var url = "sqtb/trees";
	var loader = dhtmlxAjax.getSync(url);
	var str = loader.xmlDoc.responseText;
	var jsondata = strToJson(str);
	
	sqtbmod_tree = new dhtmlXTreeObject("mytree", "100%", "100%", 0);
	sqtbmod_tree.setSkin('dhx_skyblue');
	sqtbmod_tree.setImagePath("dhtmlx/dhtmlxTree/codebase/imgs/csh_dhx_skyblue/");
	sqtbmod_tree.enableCheckBoxes(false);
	sqtbmod_tree.enableThreeStateCheckboxes(false);
	
	sqtbmod_tree.loadJSONObject(jsondata, function() {
		// alert("Your data has been loaded.");
	});
	//sqtbmod_tree.setOnClickHandler(SQTB_MOD_treeonclick);
	sqtbmod_tree.openAllItems("#");
};


function SQTB_MOD_BACK(){
	//alert("sqtb_back");
	QYZQ_SQTB();
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
function SQTB_MOD_CHECK(){
	
	if($("#pk_group").val()==""){
		alert("发行单位不能为空，请从组织树里选择！");
		return false;
	}
	if($("#pk_org").val()==""){
		alert("所属集团不能为空，请从组织树里选择！");
		return false;
	}
	SQTB_MOD_Submit();
}
function SQTB_MOD_Submit() {
	//alert("submit");
    var AjaxURL= "sqtb/sqtb_mod_save";
    //alert($('#sqtb_modify_form').serialize());
    $.ajax({
        type: "POST",
        dataType: "json",
        url: AjaxURL,
        data: $('#sqtb_modify_form').serialize(),
        success: function (data) {
            if(data.ok==true){
            	alert("保存成功");
            }
            else{
            	alert("保存失败");
            }
        },
        error: function(data) {
            alert("error:"+data.responseText);
        }
    });
};
function SQTB_MOD_ADDChildApply(text,id){
	dhxWins = new dhtmlXWindows();
	dhxWins.enableAutoViewport(true);
	dhxWins.attachViewportTo(document.body);
	dhxWins.setImagePath("dhtmlx/dhtmlxWindows/codebase/imgs/");
	w1 = dhxWins.createWindow("w1", 180, 0, 1066, 575);
	w1.setText(text);
	var url="sqtb/sqtb_child_add?id="+id;
	w1.attachURL(url);
}
function SQTB_MOD_MODBUT(id,applyid){
	dhxWins = new dhtmlXWindows();
	dhxWins.enableAutoViewport(true);
	dhxWins.attachViewportTo(document.body);
	dhxWins.setImagePath("dhtmlx/dhtmlxWindows/codebase/imgs/");
	w1 = dhxWins.createWindow("w1", 180, 0, 1066, 575);
	w1.setText("修改");
	var url="sqtb/sqtb_child_mod?id="+id;
	w1.attachURL(url);
}
function SQTB_MOD_DELBUT(id,applyid){
	//alert("delete");
	if (confirm("你确定删除该行数据吗？")){
		url="sqtb/sqtb_child_del?id="+id;
		var loader = dhtmlxAjax.getSync(url);
		var str = loader.xmlDoc.responseText;
		var ok = strToJson(str);
		if(ok.ok==false){
			alert("删除失败，请重试！");
		}
		else{
			alert("删除成功！")
		}
		QYZQ_SQTB_modify(applyid);
	}  
	else {  
		return;
	}
}
function SQTV_MOD_RELOAD(id)
{
	QYZQ_SQTB_modify(id);
}
