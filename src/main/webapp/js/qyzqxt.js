$(function(){
	//$("#Navigation > ul > li").addClass("liblue");
	
	$("#Navigation > ul > li").click(function(){
		//var id=$("#Navigation > ul > li").index(this);
		//alert(id);
		$("#Navigation > ul > li").removeClass("lired");
		$(this).removeClass();
		$(this).addClass("lired");
	});
	$("#ShouYe").click(function(){
		QYZQ_ShouYe();
	});
	$("#TianBao").click(function(){
		QYZQ_SQTB();
	});
	$("#ShenHe").click(function(){
		QYZQ_SQSH();
	});
	$("#TongJi").click(function(){
		QYZQ_SQTJ();
	});
	
	$.ajaxSetup ({     
	    cache: false //开/关AJAX相应的缓存 
	});
	
	QYZQ_LOGIN();
	
	$("#addsqtb").click(function(){
		alert("asdf");
	});
	
});
function QYZQ_LOGIN(){
	$("#View").load("login #MyView",function(){
		LOGIN_INIT();
	});
};
function QYZQ_SQTB(){
	$("#View").load("static/sqtb.html #MyView",function(){
		SQTB_INIT();
	});
};
function QYZQ_SQSH(){
	$("#View").load("static/sqsh.html #MyView",function(){
		SQSH_INIT();
	});
};
function QYZQ_ShouYe(){
	$("#View").load("static/home.html #MyView",function(){
		$("#Navigation > ul > li").removeClass("lired");
		$("#Navigation > ul > li:eq(0)").addClass("lired");
	});
};
function QYZQ_SQTJ(){
	$("#View").load("static/sqtj.html #MyView",function(){
		SQTJ_INIT();
	});
}
function QYZQ_SQTB_add(){
	$("#View").load("sqtb/sqtb_add #MyView",function(){
		//alert("sqtb_add_init");
		SQTB_ADD_INIT();
	});
}
function QYZQ_SQTB_modify(id){
	$("#View").load("sqtb/sqtb_modify?id="+id+" #MyView",function(){
		//alert("sqtb_add_init");
		SQTB_MOD_INIT();
	});
}