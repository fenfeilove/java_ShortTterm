package com.fenfei.springmvc.java_ST.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.fenfei.springmvc.java_ST.pojos.Apply;
import com.fenfei.springmvc.java_ST.pojos.KeySearch1;
/**
 * @author zhuohaidi
 */
@Repository
public interface IApplyDao {
	public List<String> LoadDisPK_ORG();
	public List<String> LoadDisPK_Group(String pk_org);
	public List<Apply> LoadByKey1(KeySearch1 keysearch);
	public Apply LoadApply(int applyid);
	public void SHApply(Apply apply);
	public void DeApply(int applyid);
	public Integer AddApply(Apply apply);
	public void ModifyApply(Apply apply);
	public List<Apply> LoadAllPK_Group();
}
