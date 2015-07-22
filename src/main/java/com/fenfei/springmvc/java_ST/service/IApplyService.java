package com.fenfei.springmvc.java_ST.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fenfei.springmvc.java_ST.pojos.Apply;
import com.fenfei.springmvc.java_ST.pojos.KeySearch1;
/**
 * @author zhuohaidi
 */
@Service
public interface IApplyService {
	public List<String> getDisPK_ORG();
	public List<String> getDisPK_Group(String pk_org);
	public List<Apply> getByKey1(KeySearch1 keysearch); 
	public Apply getApply(int applyid);
	public void shApply(Apply apply);
}
