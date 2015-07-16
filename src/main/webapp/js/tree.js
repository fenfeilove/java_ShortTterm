var tree;
function doOnLoad() {
	var jsondata = {id:0 , item:[{id:"#",text:"first" ,item:[{id:"ab", text:"child"}]},{id:2, text:"middle", item:[{id:"21", text:"child"}]},{id:3,text:"last"}]};
	tree=new dhtmlXTreeObject("mytree","100%","100%",0);
	tree.setSkin('dhx_skyblue');
	tree.setImagePath("dhtmlx/dhtmlxTree/codebase/imgs/csh_dhx_skyblue/");
	tree.enableCheckBoxes(false);
	tree.enableThreeStateCheckboxes(false);
	
	tree.loadJSONObject(jsondata,function(){
		//alert("Your data has been loaded.");
	});
	tree.setOnClickHandler(treeonclick);
};
function treeonclick(id) {
	var itemId=id;
    if(tree.hasChildren(itemId)){
        if(tree.getOpenState(itemId) == "1"){
            tree.closeItem(itemId);
        }else{
            tree.openItem(itemId);
        }
    }else{
    	alert(id);
    }
};