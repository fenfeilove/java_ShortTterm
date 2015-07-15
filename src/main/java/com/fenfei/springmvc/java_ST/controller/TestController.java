package com.fenfei.springmvc.java_ST.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class TestController {
	@RequestMapping(value="/test.html",method=RequestMethod.GET)
	public String test(HttpServletRequest request)
	{
		return "test";
	}
}
