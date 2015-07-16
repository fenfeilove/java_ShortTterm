package com.fenfei.springmvc.java_ST.controller;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
/**
 * @author zhuohaidi
 */
@Controller
@RequestMapping("/tree")
public class TreeController {
	
	@RequestMapping(method=RequestMethod.GET)
	public String tree (HttpServletRequest request,Model model){
		return "tree";
	}
	
	@RequestMapping(value="/loader",method=RequestMethod.GET)
	@ResponseBody
	public Object tree_loader (HttpServletRequest request,Model model){
//		return "{id:0, item:[ {id:1,text:\"first\"}, {id:2, text:\"middle\", item:["
//				+ "{id:\"21\", text:\"child\"} ]}, {id:3,text:\"last\"} ]}";
		return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
				+ "<userTree><deptInfo name=\"规划局\" parentid=\"0\" deptid=\"1003\">"
				+ "<userInfo name=\"李四\" parentid=\"1003\" userid=\"248\">"
				+ "</userInfo></deptInfo></userTree>";
	}
}
