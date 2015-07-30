function LOGIN_INIT() {
	LOGIN_check();
	
}
function LOGIN_check(){
	var url="login/logined";
	var loader = dhtmlxAjax.getSync(url);
	var str = loader.xmlDoc.responseText;
	var ok = strToJson(str);
	if(ok.ok==false){
		LOGIN_doLoadForm();
	}
	else{
		QYZQ_ShouYe();
	}
}
function LOGIN_doLoadForm() {
	var LoginForm, LoginData;
	LoginData = [{type: "settings", position: "label-left", labelWidth: 130, inputWidth: 120},
	            {type: "fieldset", label: "Welcome",labelWidth:50, inputWidth: "auto",list:[
				{type: "input", name:"username", label: "用户名" },
			 	{type: "password",name:"password", label: "密  码"},
			  	{type: "checkbox",name:"remenber", label: "记住", checked: true},
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
			LoginForm.send(url, function(loader, data) {
				var ok = strToJson(data);
				
				if(ok.ok==false){
					alert("账号或密码错误");
				}
				else{
					QYZQ_ShouYe();
				};
			});
		}else if(button_id == "Reset"){
			LoginForm.clear();
		}
   });
}