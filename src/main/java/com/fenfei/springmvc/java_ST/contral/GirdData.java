package com.fenfei.springmvc.java_ST.contral;

import java.util.List;

import com.fenfei.springmvc.java_ST.pojos.Apply;

public class GirdData {
	public static String Apply2String(List<Apply> applylist){
		String str="{rows:[";
		
		for(int i=0;i<applylist.size();i++)
		{
			if(i!=0) str+=",";
			Apply apply=applylist.get(i);
			str+="{id: "+apply.getId()+",data:["+i+",\""+apply.getApply_code()+"\",\""+apply.getPk_group()+"\",\""+apply.getPk_org()+"\",\"\",\""+apply.getStatus()+"\",\"\"]}";
		}
		str+="]}";
		return str;
	}
}
