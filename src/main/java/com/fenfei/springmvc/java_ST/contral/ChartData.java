package com.fenfei.springmvc.java_ST.contral;

import java.util.ArrayList;
import java.util.List;

import com.fenfei.springmvc.java_ST.pojos.Apply;
import com.fenfei.springmvc.java_ST.pojos.FX_Apply;

public class ChartData {
	public static String Apply2String(List<Apply> applylist){
		List<FX_Apply> fxapplylist=new ArrayList<FX_Apply>();
		for(int i=0;i<applylist.size();i++)
		{
			Apply apply=applylist.get(i);
			int flag=0;
			for(int j=0;j<fxapplylist.size();j++)
			{
				flag=0;
				if(apply.getPk_group().equals(fxapplylist.get(j).getName()))
				{
					fxapplylist.get(j).setNum(fxapplylist.get(j).getNum()+1);
					flag=1;
					break;
				}
			}
			if(flag==0)
			{
				FX_Apply fxapply=new FX_Apply();
				fxapply.setNum(1);
				fxapply.setName(apply.getPk_group());
				fxapplylist.add(fxapply);
			}
		}
		String str="[";
		for(int i=0;i<fxapplylist.size();i++)
		{
			if(i!=0) str+=",";
			str+="{num:"+fxapplylist.get(i).getNum()+",name:\""+fxapplylist.get(i).getName()+"\"}";
		}
		str+="]";
		return str;
	}
}
