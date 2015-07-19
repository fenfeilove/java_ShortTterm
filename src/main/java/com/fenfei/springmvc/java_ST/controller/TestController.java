package com.fenfei.springmvc.java_ST.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fenfei.springmvc.java_ST.pojos.Apply;
import com.fenfei.springmvc.java_ST.pojos.KeySearch1;
import com.fenfei.springmvc.java_ST.service.IApplyService;

@RestController
@RequestMapping("/test")

public class TestController {
	@Autowired
	IApplyService applyService;
	@RequestMapping(method = RequestMethod.GET)
	public Object test(HttpServletRequest request,HttpServletResponse response)
	{
		KeySearch1 keysearch=new KeySearch1();
		keysearch.setPkOrg("集团2");
 		List<Apply> list=applyService.getByKey1(keysearch);
		return list;
	}
}
