package com.fenfei.springmvc.java_ST.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fenfei.springmvc.java_ST.contral.ChartData;
import com.fenfei.springmvc.java_ST.pojos.Apply;
import com.fenfei.springmvc.java_ST.service.IApplyService;

@RestController
@RequestMapping("/sqtj")

public class SQTJController {
	@Autowired
	IApplyService applyService;
	@RequestMapping(method = RequestMethod.GET,produces = "application/json; charset=utf-8")
	public String sqtj(HttpServletRequest request,HttpServletResponse response)
	{
		List<Apply> applylist=applyService.GetAllGroup();
		return ChartData.Apply2String(applylist);
	}
}
