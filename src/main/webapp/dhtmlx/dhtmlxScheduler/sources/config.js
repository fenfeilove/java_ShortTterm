/*
Copyright DHTMLX LTD. http://www.dhtmlx.com
You allowed to use this component or parts of it under GPL terms
To use it on other terms please contact us at sales@dhtmlx.com
*/

/*
%e	Day of the month without leading zeros (01..31)
%d	Day of the month, 2 digits with leading zeros (01..31)
%j	Day of the year, 3 digits with leading zeros (001..366)
%a	A textual representation of a day, two letters
%W	A full textual representation of the day of the week

%c	Numeric representation of a month, without leading zeros (0..12)
%m	Numeric representation of a month, with leading zeros (00..12)
%b	A short textual representation of a month, three letters (Jan..Dec)
%M	A full textual representation of a month, such as January or March (January..December)

%y	A two digit representation of a year (93..03)
%Y	A full numeric representation of a year, 4 digits (1993..03)
*/

scheduler.config={
	default_date: "%d %M %Y",
	month_date: "%F %Y",
	week_date: "%l",
	day_date: "%D, %F %d",
	hour_date: "%H:%i",
	month_day : "%d",
	xml_date:"%m/%d/%Y %H:%i",
	api_date:"%d-%m-%Y %H:%i",

	hour_size_px:42,
	time_step:5,

	start_on_monday:1,
	first_hour:0,
	last_hour:24,
	drag_resize:1,
	drag_move:1,
	drag_create:1,
	edit_on_create:1,
	details_on_create:0,
	click_form_details:0,
	
	server_utc:false,

	positive_closing:false,

	icons_edit:["icon_save","icon_cancel"],
	icons_select:["icon_details","icon_edit","icon_delete"],
	
	lightbox:{
		sections:[	{name:"description", height:200, map_to:"text", type:"textarea" , focus:true},
					{name:"time", height:72, type:"time", map_to:"auto"}	]
	}
};
scheduler.init_templates=function(){
	var d=scheduler.date.date_to_str;
	var c=scheduler.config;
	scheduler.templates={
		day_date:d(c.default_date),
		month_date:d(c.month_date),
		week_date:function(d1,d2){
			return scheduler.templates.day_date(d1)+" &ndash; "+scheduler.templates.day_date(d2);
		},
		day_scale_date:d(c.default_date),
		month_scale_date:d(c.week_date),
		week_scale_date:d(c.day_date),
		hour_scale:d(c.hour_date),
		month_day:d(c.month_day),
		xml_date:scheduler.date.str_to_date(c.xml_date,c.server_utc),
		xml_format:d(c.xml_date,c.server_utc),
		api_date:scheduler.date.str_to_date(c.api_date),
		
		event_header:function(start,end,ev){
			return scheduler.templates.hour_scale(start)+" - "+scheduler.templates.hour_scale(end);
		},
		event_text:function(start,end,ev){
			return ev.text;
		},
		event_class:function(start,end,ev){
			return "";
		},
		event_bar_date:function(start,end,ev){
			return scheduler.templates.hour_scale(start)+" ";
		},
		event_bar_text:function(start,end,ev){
			return ev.text;
		}
	}
}


