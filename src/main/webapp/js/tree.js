function doOnLoad() {
	var tree;
	tree = new dhtmlXTreeObject("tree", "100%", "100%", 0);
	tree.setSkin("dhx_terrace");
	tree.setImagePath("../dhtmlx/dhtmlxTree/codebase/imgs/csh_dhx_terrace/");
	tree.enableHighlighting(true);
	var url="loadtree";
	var result = dhtmlxAjax.getSync(url);
	//var result = jQuery.parseJSON(loader.xmlDoc.responseText);	
	alert(result);
	var str='{"id":"0","text":"","item":[]}';
	tree.loadJSONObject(result);
	//tree.setOnClickHandler(tonclick);
}