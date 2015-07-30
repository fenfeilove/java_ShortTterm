/*
Copyright DHTMLX LTD. http://www.dhtmlx.com
You allowed to use this component or parts of it under GPL terms
To use it on other terms please contact us at sales@dhtmlx.com
*/

scheduler.form_blocks={
	textarea:{
		render:function(sns){
			var height=(sns.height||"130")+"px";
			return "<div class='dhx_cal_ltext' style='height:"+height+";'><textarea></textarea></div>";
		},
		set_value:function(node,value,ev){
			node.firstChild.value=value||"";
		},
		get_value:function(node,ev){
			return node.firstChild.value;
		},
		focus:function(node){
			var a=node.firstChild; a.select(); a.focus(); 
		}
	},
	select:{
		render:function(sns){
			var height=(sns.height||"23")+"px";
			var html="<div class='dhx_cal_ltext' style='height:"+height+";'><select style='width:552px;'>";
			for (var i=0; i < sns.options.length; i++)
				html+="<option value='"+sns.options[i].key+"'>"+sns.options[i].label+"</option>";
			html+="</select></div>";
			return html;
		},
		set_value:function(node,value,ev){
			node.firstChild.value=value||"";
		},
		get_value:function(node,ev){
			return node.firstChild.value;
		},
		focus:function(node){
			var a=node.firstChild; a.select(); a.focus(); 
		}
	},	
	time:{
		render:function(){
			//hours
			var dt = this.date.date_part(new Date());
			var html="<select>";
			for (var i=0; i<60*24; i+=this.config.time_step){
				var time=this.templates.hour_scale(dt);
				html+="<option value='"+i+"'>"+time+"</option>";
				dt=this.date.add(dt,this.config.time_step,"minute");
			}
			
			//days
			html+="</select> <select>";
			for (var i=1; i < 32; i++) 
				html+="<option value='"+i+"'>"+i+"</option>";
			
			//month
			html+="</select> <select>";
			for (var i=0; i < 12; i++) 
				html+="<option value='"+i+"'>"+this.locale.date.month_full[i]+"</option>";
			
			//year
			html+="</select> <select>";
			dt = dt.getFullYear()-5; //maybe take from config?
			for (var i=0; i < 10; i++) 
				html+="<option value='"+(dt+i)+"'>"+(dt+i)+"</option>";
			html+="</select> ";
			
			return "<div style='height:30px; padding-top:0px; font-size:inherit;' class='dhx_cal_lsection'>"+html+"<span style='font-weight:normal; font-size:10pt;'> &nbsp;&ndash;&nbsp; </span>"+html+"</div>";
		},
		set_value:function(node,value,ev){
			function _fill_lightbox_select(s,i,d){
				s[i+0].value=d.getHours()*60+d.getMinutes();	
				s[i+1].value=d.getDate();
				s[i+2].value=d.getMonth();
				s[i+3].value=d.getFullYear();
			}
			s=node.getElementsByTagName("select");
			_fill_lightbox_select(s,0,ev.start_date);
			_fill_lightbox_select(s,4,ev.end_date);
		},
		get_value:function(node,ev){
			s=node.getElementsByTagName("select");
			ev.start_date=new Date(s[3].value,s[2].value,s[1].value,0,s[0].value);
			ev.end_date=new Date(s[7].value,s[6].value,s[5].value,0,s[4].value);
		},
		focus:function(node){
			node.getElementsByTagName("select")[0].focus(); 
		}
	}
}
scheduler.showLightbox=function(id){
	if (!id) return;
	this.show_cover();
	var box = this._get_lightbox();
	box.style.display="block";
	box.style.top=Math.round((document.body.offsetHeight-box.offsetHeight)/2)+"px";
	box.style.left=Math.round((document.body.offsetWidth-box.offsetWidth)/2)+"px";	
	
	this._fill_lightbox(id,box);
}
scheduler._fill_lightbox=function(id,box){ 
	var ev=this.getEvent(id);
	var s=box.getElementsByTagName("span");
	s[1].innerHTML=this.templates.event_header(ev.start_date,ev.end_date,ev);
	s[2].innerHTML=this.templates.event_text(ev.start_date,ev.end_date,ev);
	
	var sns = this.config.lightbox.sections;	
	for (var i=0; i < sns.length; i++) {
		var node=document.getElementById(sns[i].id).nextSibling;
		var block=this.form_blocks[sns[i].type];
		block.set_value.call(this,node,ev[sns[i].map_to],ev)
		if (sns[i].focus)
			block.focus.call(this,node);
	};
	
	scheduler._lightbox_id=id;
}
scheduler._empty_lightbox=function(){
	var id=scheduler._lightbox_id;
	var ev=this.getEvent(id);
	var box=this._get_lightbox();
	
	var sns = this.config.lightbox.sections;	
	for (var i=0; i < sns.length; i++) {
		var node=document.getElementById(sns[i].id).nextSibling;
		var block=this.form_blocks[sns[i].type];
		var res=block.get_value.call(this,node,ev);
		if (sns[i].map_to!="auto")
			ev[sns[i].map_to]=res;
	};
	
	ev._timed=this.is_one_day_event(ev);
	this.setEvent(ev.id,ev);
	this._edit_stop_event(ev,true)
	this.render_view_data();
}
scheduler.hide_lightbox=function(id){
	this._get_lightbox().style.display="none";
	this.hide_cover();
	this._lightbox_id=null;
}
scheduler.hide_cover=function(){
	if (this._cover) 
		document.body.removeChild(this._cover);
	this._cover=null;
}
scheduler.show_cover=function(){
	this._cover=document.createElement("DIV");
	this._cover.className="dhx_cal_cover";
	document.body.appendChild(this._cover);
}
scheduler._init_lightbox_events=function(){
	this._get_lightbox().onclick=function(e){
		var src=e?e.target:event.srcElement;
		if (!src.className) src=src.previousSibling;
		if (src && src.className)
			switch(src.className){
				case "dhx_save_btn":
					scheduler._empty_lightbox()
					scheduler.hide_lightbox();
					break;
				case "dhx_delete_btn":
					var c=scheduler.locale.labels.confirm_deleting; 
					if (!c||confirm(c)) {
						scheduler.deleteEvent(scheduler._lightbox_id);
						scheduler.hide_lightbox();
					}
					break;
				case "dhx_cancel_btn":
					scheduler._edit_stop_event(scheduler.getEvent(scheduler._lightbox_id),false);
					scheduler.hide_lightbox();
					break;
			}
	};
	this._get_lightbox().onkeypress=function(e){
		switch((e||event).keyCode){
			case 13:
				scheduler._empty_lightbox()
				scheduler.hide_lightbox();
				break;
			case 27:
				scheduler._edit_stop_event(scheduler.getEvent(scheduler._lightbox_id),false)
				scheduler.hide_lightbox();
				break;
		}
	}
}
scheduler._get_lightbox=function(){
	if (!this._lightbox){
		var d=document.createElement("DIV");
		d.className="dhx_cal_light";
		d.style.visibility="hidden";
		d.innerHTML=this._lightbox_template;
		document.body.insertBefore(d,document.body.firstChild);
		this._lightbox=d;
		
		var sns=this.config.lightbox.sections;
		var html="";
		for (var i=0; i < sns.length; i++) {
			var block=this.form_blocks[sns[i].type];
			if (!block) continue; //ignore incorrect blocks
			sns[i].id="area_"+this.uid();
			html+="<div id='"+sns[i].id+"' class='dhx_cal_lsection'>"+this.locale.labels["section_"+sns[i].name]+"</div>"+block.render.call(this,sns[i]);
		};
		
	
		//localization
		var ds=d.getElementsByTagName("div");
		ds[4].innerHTML=scheduler.locale.labels.icon_save;
		ds[7].innerHTML=scheduler.locale.labels.icon_cancel;
		ds[10].innerHTML=scheduler.locale.labels.icon_delete;
		//sections
		ds[1].innerHTML=html;
		//sizes
		ds[1].style.height=ds[1].scrollHeight+"px";		
		d.style.height=ds[1].scrollHeight+50+"px";		
		ds[1].style.height=ds[1].scrollHeight+"px";		 //its pretty incredible , how ugly IE can be 
		
		this._init_lightbox_events(this);
		d.style.display="none";
		d.style.visibility="visible";
	}
	return this._lightbox;
}
scheduler._lightbox_template="<div class='dhx_cal_ltitle'><span class='dhx_mark'>&nbsp;</span><span class='dhx_time'></span><span class='dhx_title'></span></div><div class='dhx_cal_larea'></div><div class='dhx_btn_set'><div class='dhx_save_btn'></div><div>&nbsp;</div></div><div class='dhx_btn_set'><div class='dhx_cancel_btn'></div><div>&nbsp;</div></div><div class='dhx_btn_set' style='float:right;'><div class='dhx_delete_btn'></div><div>&nbsp;</div></div>";