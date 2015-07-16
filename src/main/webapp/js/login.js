
function doOnLoad() {
	var LoginForm, LoginData;
	LoginData = [{type: "settings", position: "label-left", labelWidth: 130, inputWidth: 120},
	            {type: "fieldset", label: "Welcome",labelWidth:50, inputWidth: "auto",list:[
				{type: "input", name:"username", label: "用户名" ,value:"输入用户名"},
			 	{type: "password",name:"password", label: "密  码"},
			  	{type: "checkbox",name:"remenber", label: "记住", checked: false},
			  	{type : "label",list : [
					{type: "button",name: "Submit",value: "提交"},
					{type: "newcolumn"},
					{type: "button",name: "Reset",value: "取消"}
					]}
				]}
			];
	LoginForm = new dhtmlXForm("login", LoginData);
	LoginForm.attachEvent("onButtonClick", function(button_id) {
        if (button_id == "Submit"){
			//LoginForm.disableItem("Submit");
			//alert("submit");
			var url="login/check";
			LoginForm.send(url, function(loader, response) {
				alert(response);
			});
		}else if(button_id == "Reset"){
			LoginForm.clear();
		}
   });
}