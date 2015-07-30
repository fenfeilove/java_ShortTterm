package com.fenfei.springmvc.java_ST.controller;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fenfei.springmvc.java_ST.contral.DateAction;
import com.fenfei.springmvc.java_ST.contral.GirdData;
import com.fenfei.springmvc.java_ST.contral.WebFormData;
import com.fenfei.springmvc.java_ST.pojos.Apply;
import com.fenfei.springmvc.java_ST.pojos.ApplyChild;
import com.fenfei.springmvc.java_ST.pojos.KeySearch1;
import com.fenfei.springmvc.java_ST.pojos.User;
import com.fenfei.springmvc.java_ST.service.IApplyChildService;
import com.fenfei.springmvc.java_ST.service.IApplyService;
@Controller
@RequestMapping("/sqtb")

public class SQTBController {
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
		//request.setCharacterEncoding("utf-8");//处理中文乱码问题
//		String pk_org=WebFormData.decodeUTF8("pk_org", request);
//		String pk_group=WebFormData.decodeUTF8("pk_group", request);
//		String status=WebFormData.decodeUTF8("status", request);
//		if(pk_org!=null)
//		{
//			System.out.println(pk_org);
//		}
//		else
//			System.out.println(pk_org);
		KeySearch1 keysearch=new KeySearch1();
//		keysearch.setPkOrg(pk_org);
//		keysearch.setPkGroup(pk_group);
//		keysearch.setStatus(status);
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
		String status=WebFormData.decodeUTF8("status", request);
//		if(pk_org!=null)
//		{
//			System.out.println(pk_org);
//		}
//		else
//			System.out.println(pk_org);
		KeySearch1 keysearch=new KeySearch1();
		keysearch.setPkOrg(pk_org);
		keysearch.setPkGroup(pk_group);
		keysearch.setStatus(status);
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
	
	@RequestMapping(value="/delete",method=RequestMethod.GET)
	@ResponseBody
	public String deleteApply (HttpServletRequest request,Model model) throws UnsupportedEncodingException{
		request.setCharacterEncoding("utf-8");//处理中文乱码问题
		String id=request.getParameter("id");//WebFormData.decodeUTF8("applyid", request);
		//System.out.println(applyid);
		Integer applyid=0;
		if(id!=null&&!id.equals(""))
			applyid=Integer.parseInt(id);
		else
			return "{ok:false}";
		applyService.DeApply(applyid);
		
		return "{ok:true}";
	}
	
	@RequestMapping(value="/sqtb_add",method=RequestMethod.GET)
	public String sqtb_add (HttpServletRequest request,Model model) throws UnsupportedEncodingException{
		return "sqtb_add";
	}
	
	@RequestMapping(value="/sqtb_add_save",method=RequestMethod.POST)
	@ResponseBody
	public Integer sqtb_add_save (HttpServletRequest request,Model model) throws UnsupportedEncodingException{
		request.setCharacterEncoding("utf-8");//处理中文乱码问题
		String sqdh=request.getParameter("sqdh");
		String pk_group=request.getParameter("pk_group");
		String pk_org=request.getParameter("pk_org");
		String zqye=request.getParameter("zqye");
		String qyjb=request.getParameter("qyjb");
		String qddw=request.getParameter("qddw");
		String qdbz=request.getParameter("qdbz");
		String pfwh=request.getParameter("pfwh");
		String remark=request.getParameter("remark");
		Apply apply=new Apply();
		apply.setApply_code(sqdh);
		apply.setPk_group(pk_group);
		apply.setPk_org(pk_org);
		apply.setBond_left(Integer.parseInt(zqye));
		apply.setDef1(qyjb);
		apply.setCurrency_unit(qddw);
		apply.setCurrency_class(qdbz);
		apply.setFile_no(pfwh);
		apply.setRemark(remark);
		apply.setStatus("未审核");
		apply.setApply_date(new Date());
		Integer id=-1;
		id=applyService.AddApply(apply);
		return id;
	}
	@RequestMapping(value = "/sqtb_modify",method=RequestMethod.GET)
	public String sqshsee (HttpServletRequest request,ModelMap modelmap){
		String id=request.getParameter("id");
		int applyid=0;
		if(id!=null&&!id.equals(""))
			applyid=Integer.parseInt(id);
		Apply apply=applyService.getApply(applyid);
		List<ApplyChild> applychildlist=applychildService.getApplyChild(applyid);

		request.setAttribute("apply", apply);
		request.setAttribute("applychildlist",applychildlist);
		return "sqtb_modify";
	}
	@RequestMapping(value="/sqtb_mod_save",method=RequestMethod.POST)
	@ResponseBody
	public String sqtb_mod_save (HttpServletRequest request,Model model) throws UnsupportedEncodingException{
		request.setCharacterEncoding("utf-8");//处理中文乱码问题
		String id=request.getParameter("applyid");
		String sqdh=request.getParameter("sqdh");
		String pk_group=request.getParameter("pk_group");
		String pk_org=request.getParameter("pk_org");
		String zqye=request.getParameter("zqye");
		String qyjb=request.getParameter("qyjb");
		String qddw=request.getParameter("qddw");
		String qdbz=request.getParameter("qdbz");
		String pfwh=request.getParameter("pfwh");
		String remark=request.getParameter("remark");
		User user=(User)request.getSession().getAttribute("user");
		if(user==null)
		{
			request.setAttribute("result", "你还没有登录");
			return "{\"ok\":false}";
		}
		Apply apply=new Apply();
		apply.setId(Integer.parseInt(id));
		apply.setApply_code(sqdh);
		apply.setPk_group(pk_group);
		apply.setPk_org(pk_org);
		apply.setBond_left(Integer.parseInt(zqye));
		apply.setDef1(qyjb);
		apply.setCurrency_unit(qddw);
		apply.setCurrency_class(qdbz);
		apply.setFile_no(pfwh);
		apply.setRemark(remark);
		apply.setModifier(user.getUserid());
		apply.setModife_time(new Date());
		applyService.ModifyApply(apply);
		return "{\"ok\":true}";
	}
	@RequestMapping(value = "/sqtb_child_add",method=RequestMethod.GET)
	public String sqtb_child_add (HttpServletRequest request,ModelMap modelmap){
		String id=request.getParameter("id");
		if(id==null||id.equals("")){
			request.setAttribute("result", "参数有误，请重试");
			return "error";
		}
		request.setAttribute("applyid", id);
		return "sqtb_child_add";
	}
	
	@RequestMapping(value = "/sqtb_child_add_save",method=RequestMethod.POST)
	@ResponseBody
	public String sqtb_child_add_save (HttpServletRequest request,ModelMap modelmap) throws Exception{
		request.setCharacterEncoding("utf-8");//处理中文乱码问题
		String applyid=request.getParameter("applyid");
		String zq_class=request.getParameter("zq_class");
		String fx_date=request.getParameter("fx_date");
		String fx_ed=request.getParameter("fx_ed");
		String fx_lilv=request.getParameter("fx_lilv");
		String use=request.getParameter("use");
		
		ApplyChild applychild=new ApplyChild();
		applychild.setApplyid(Integer.parseInt(applyid));
		applychild.setZq_class(Integer.parseInt(zq_class));
		applychild.setFx_date(DateAction.StringtoDate(fx_date));
		applychild.setFx_ed(Integer.parseInt(fx_ed));
		applychild.setFx_lilv(Double.parseDouble(fx_lilv));
		applychild.setPurpose(use);
		applychildService.AddApplyChild(applychild);
		
		return "{\"ok\":true}";
	}
	@RequestMapping(value = "/sqtb_child_mod",method=RequestMethod.GET)
	public String sqtb_child_mod (HttpServletRequest request,ModelMap modelmap){
		String id=request.getParameter("id");
		if(id==null||id.equals("")){
			request.setAttribute("result", "参数有误，请重试");
			return "error";
		}
		ApplyChild applychild=applychildService.getApplyChildById(Integer.parseInt(id));
		
		request.setAttribute("applychild", applychild);
		return "sqtb_child_modify";
	}
	@RequestMapping(value = "/sqtb_child_mod_save",method=RequestMethod.POST)
	@ResponseBody
	public String sqtb_child_mod_save (HttpServletRequest request,ModelMap modelmap) throws Exception{
		String id=request.getParameter("id");
		String zq_class=request.getParameter("zq_class");
		String fx_date=request.getParameter("fx_date");
		String fx_ed=request.getParameter("fx_ed");
		System.out.println(fx_ed);
		String fx_lilv=request.getParameter("fx_lilv");
		String use=request.getParameter("use");
		
		ApplyChild applychild=new ApplyChild();
		applychild.setId(Integer.parseInt(id));
		applychild.setZq_class(Integer.parseInt(zq_class));
		applychild.setFx_date(DateAction.StringtoDate(fx_date));
		applychild.setFx_ed(Integer.parseInt(fx_ed));
		System.out.println(applychild.getFx_ed());
		applychild.setFx_lilv(Double.parseDouble(fx_lilv));
		applychild.setPurpose(use);
		applychildService.ModifyApplyChild(applychild);
		
		return "{\"ok\":true}";
	}
	@RequestMapping(value = "/sqtb_child_del",method=RequestMethod.GET)
	@ResponseBody
	public String sqtb_child_del (HttpServletRequest request,ModelMap modelmap) throws Exception{
		String id=request.getParameter("id");
		if(id==null||id.equals(""))
			return "{\"ok\":false}";
		applychildService.DeleteApplyChild(Integer.parseInt(id));
		
		return "{\"ok\":true}";
	}
}
