package com.fenfei.springmvc.java_ST.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fenfei.springmvc.java_ST.contral.GirdData;
import com.fenfei.springmvc.java_ST.contral.MD5Util;
import com.fenfei.springmvc.java_ST.contral.WebFormData;
import com.fenfei.springmvc.java_ST.pojos.Apply;
import com.fenfei.springmvc.java_ST.pojos.ApplyChild;
import com.fenfei.springmvc.java_ST.pojos.KeySearch1;
import com.fenfei.springmvc.java_ST.pojos.User;
import com.fenfei.springmvc.java_ST.service.IApplyChildService;
import com.fenfei.springmvc.java_ST.service.IApplyService;
@Controller
@RequestMapping("/sqsh")

public class SQSHController {
	@Autowired
	IApplyService applyService;
	@Autowired
	IApplyChildService applychildService;
	
	@RequestMapping(value="/trees", produces = "application/json; charset=utf-8")
	@ResponseBody
	public String getTree()
	{
		String tree="";
		tree="{id:0 , item:[{id:\"#\",text:\"浙江省国资委\",item:[";
		List<String> orglist=applyService.getDisPK_ORG();
		for(int i=0;i<orglist.size();i++)
		{
			if(i!=0)tree+=",";
			tree+="{id:\""+orglist.get(i)+"\",text:\""+orglist.get(i)+"\",item:[";
			List<String> groupList=applyService.getDisPK_Group(orglist.get(i));
			for(int j=0;j<groupList.size();j++)
			{
				if(j!=0) tree+=",";
				tree+="{id:\""+groupList.get(j)+"\",text:\""+groupList.get(j)+"\",item:[]}";
			}
			tree+="]}";
		}
		tree+="]}]}";
		return tree;
	}
	@RequestMapping(value="/search", produces = "application/json; charset=utf-8")
	@ResponseBody
	public String Search(HttpServletRequest request) throws IOException
	{
		KeySearch1 keysearch=new KeySearch1();
		keysearch.setStatus("未审核");
		List<Apply> applylist=applyService.getByKey1(keysearch);
		return GirdData.Apply2String(applylist);
	}
	@RequestMapping(value="/keysearch", produces = "application/json; charset=utf-8")
	@ResponseBody
	public String SearchBykey(HttpServletRequest request) throws IOException
	{
		request.setCharacterEncoding("utf-8");//处理中文乱码问题
		String pk_org=WebFormData.decodeUTF8("pk_org", request);
		String pk_group=WebFormData.decodeUTF8("pk_group", request);
		KeySearch1 keysearch=new KeySearch1();
		keysearch.setPkOrg(pk_org);
		keysearch.setPkGroup(pk_group);
		keysearch.setStatus("未审核");
		List<Apply> applylist=applyService.getByKey1(keysearch);
		return GirdData.Apply2String(applylist);
	}
	
	@RequestMapping(value="/searchchild", produces = "application/json; charset=utf-8")
	@ResponseBody
	public String SearchChild(HttpServletRequest request) throws IOException
	{
		request.setCharacterEncoding("utf-8");//处理中文乱码问题
		String applyid=request.getParameter("applyid");//WebFormData.decodeUTF8("applyid", request);
		//System.out.println(applyid);
		Integer id=0;
		if(applyid!=null&&!applyid.equals(""))
			id=Integer.parseInt(applyid);
		//System.out.println(id);
		List<ApplyChild> applychildlist=applychildService.getApplyChild(id);
		return GirdData.ApplyChild2String(applychildlist);
	}
	
	@RequestMapping(value = "/sqshsee",method=RequestMethod.GET)
	public String sqshsee (HttpServletRequest request,ModelMap modelmap){
		String id=request.getParameter("id");
		String type=request.getParameter("type");
		int applyid=0;
		int tp=0;
		if(id!=null&&!id.equals(""))
			applyid=Integer.parseInt(id);
		if(type!=null&&!type.equals(""))
			tp=Integer.parseInt(type);
		
		Apply apply=applyService.getApply(applyid);
		List<ApplyChild> applychildlist=applychildService.getApplyChild(applyid);
//		modelmap.addAttribute("apply",apply);
//		modelmap.addAttribute("applychildlist", applychildlist);
		request.setAttribute("apply", apply);
		request.setAttribute("applychildlist",applychildlist);
		request.setAttribute("button", tp);
		return "sqshsee";
	}
	@RequestMapping(value = "/shenhe",method=RequestMethod.GET)
	public String shenhe (HttpServletRequest request,ModelMap modelmap){
		String id=request.getParameter("id");
		String result=request.getParameter("result");
		int applyid=0;
		if(id!=null&&!id.equals(""))
			applyid=Integer.parseInt(id);
		else
			return "error";
		if(result==null||result.equals(""))
			return "error";
		
		Apply apply=new Apply();
		apply.setId(applyid);
		if(result.equals("1"))
			apply.setStatus("通过");
		else
			apply.setStatus("退回");
		applyService.shApply(apply);
		return sqshsee(request,modelmap);
	}
}
