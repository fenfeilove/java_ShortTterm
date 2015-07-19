package com.fenfei.springmvc.java_ST.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fenfei.springmvc.java_ST.contral.GirdData;
import com.fenfei.springmvc.java_ST.pojos.Apply;
import com.fenfei.springmvc.java_ST.pojos.KeySearch1;
import com.fenfei.springmvc.java_ST.service.IApplyService;
@Controller
@RequestMapping("/sqtb")

public class SQTBController {
	@Autowired
	IApplyService applyService;
	@RequestMapping(value="/trees", produces = "application/json; charset=utf-8")
	@ResponseBody
	public String getTree()
	{
		String tree="";
		tree="{id:0 , item:[";
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
		tree+="]}";
		return tree;
	}
	@RequestMapping(value="/search", produces = "application/json; charset=utf-8")
	@ResponseBody
	public String Search()
	{
		KeySearch1 keysearch=new KeySearch1();
//		keysearch.setPkOrg("集团2");
		List<Apply> applylist=applyService.getByKey1(keysearch);
		return GirdData.Apply2String(applylist);

	}
}
