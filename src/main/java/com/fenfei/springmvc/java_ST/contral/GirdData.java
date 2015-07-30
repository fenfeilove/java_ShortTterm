package com.fenfei.springmvc.java_ST.contral;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fenfei.springmvc.java_ST.pojos.Apply;
import com.fenfei.springmvc.java_ST.pojos.ApplyChild;

public class GirdData {
	public static String Apply2String(List<Apply> applylist){
		String str="{rows:[";
		
		for(int i=0;i<applylist.size();i++)
		{
			if(i!=0) str+=",";
			Apply apply=applylist.get(i);
			str+="{id: "+apply.getId()+",data:["+i+",\""+apply.getApply_code()+"\",\""+apply.getPk_group()+"\",\""+apply.getPk_org()+"\",\""+apply.getBond_left()+"\",\""+apply.getStatus()+"\",\""+apply.getDef1()+"\",\""+apply.getFile_no()+"\"]}";
		}
		str+="]}";
		return str;
	}
	@SuppressWarnings("deprecation")
	public static String ApplyChild2String(List<ApplyChild> applychildlist){
		
		Map<Integer,String> map=new HashMap<Integer,String>();
		map.put(10, "企业债券");
		map.put(20, "公司债券");
		map.put(30, "中期票据");
		map.put(40, "短期融资券");
		map.put(50, "非定向公开债券融资工具");
		map.put(60, "超短期融资券");
		map.put(70, "其他");
		
		String str="{rows:[";
		
		for(int i=0;i<applychildlist.size();i++)
		{
			if(i!=0) str+=",";
			ApplyChild applychild=applychildlist.get(i);
			str+="{id: "+applychild.getId()+",data:["+i+",\""+map.get(applychild.getZq_class())+"\",\""+applychild.getFx_date().toLocaleString()+"\",\""+applychild.getFx_ed()+"\",\""+applychild.getFx_lilv()+"\",\""+applychild.getPurpose()+"\"]}";
		}
		str+="]}";
		return str;
	}
}
