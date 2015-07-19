package com.fenfei.springmvc.java_ST.controller;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
/**
 * @author zhuohaidi
 */
@Controller
public class QYZQXTController {
	
	@RequestMapping("/index")
	public String index (HttpServletRequest request,Model model){
		return "redirect:qyzqxt";
	}
	@RequestMapping("/index.jsp")
	public String kong (HttpServletRequest request,Model model){
		return "redirect:qyzqxt";
	}
	@RequestMapping("/qyzqxt")
	public String qyzqxt (HttpServletRequest request,Model model){
		return "qyzqxt";
	}
}
