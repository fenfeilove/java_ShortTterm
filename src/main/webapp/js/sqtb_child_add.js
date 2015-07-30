function SQTB_Child_ADD(){
	//alert("submit");
    var AjaxURL= "sqtb_child_add_save";
    //alert($('#sqtb_child_add_form').serialize());
    $.ajax({
        type: "POST",
        dataType: "json",
        url: AjaxURL,
        data: $('#sqtb_child_add_form').serialize(),
        success: function (data) {
            if(data.ok==true){
            	alert("新增成功");
            }
            else{
            	alert("新增失败");
            }
            
        },
        error: function(data) {
            alert("error:"+data.responseText);
        }
    });
}
function SQTB_Child_MOD(){
	//alert("submit");
    var AjaxURL= "sqtb_child_mod_save";
    //alert(AjaxURL);
    //alert($('#sqtb_child_mod_form').serialize());
    $.ajax({
        type: "POST",
        dataType: "json",
        url: AjaxURL,
        data: $('#sqtb_child_mod_form').serialize(),
        success: function (data) {
            if(data.ok==true){
            	alert("修改成功");
            }
            else{
            	alert("修改失败");
            }
            
        },
        error: function(data) {
            alert("error:"+data.responseText);
        }
    });
}