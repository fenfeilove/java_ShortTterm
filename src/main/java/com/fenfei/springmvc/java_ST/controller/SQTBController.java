package com.fenfei.springmvc.java_ST.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fenfei.springmvc.java_ST.service.IApplyService;

@Controller
@RequestMapping("/sqtb")

public class SQTBController {
	@Autowired
	IApplyService applyService;
	@RequestMapping(value="/trees", method = RequestMethod.GET)
	@ResponseBody
	public String test(HttpServletRequest request,HttpServletResponse response)
	{
		response.setContentType("text/json");
		String tree="";
		tree="[{id:0 , item:[";
		List<String> orglist=applyService.getDisPK_ORG();
		for(int i=0;i<orglist.size();i++)
		{
			System.out.println(orglist.get(i));
			if(i!=0)tree+=",";
			tree+="{id:\""+orglist.get(i)+"\",text:\""+orglist.get(i)+"\"}";
		}
		tree+="]}]";
		return tree;
	}
}
