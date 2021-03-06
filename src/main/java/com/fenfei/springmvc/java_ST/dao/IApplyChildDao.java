package com.fenfei.springmvc.java_ST.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.fenfei.springmvc.java_ST.pojos.ApplyChild;
/**
 * @author zhuohaidi
 */
@Repository
public interface IApplyChildDao {
	public List<ApplyChild> LoadApplyChild(Integer applyid);
	public ApplyChild LoadApplyChildById(Integer id);
	public void AddApplyChild(ApplyChild applychild);
	public void ModifyApplyChild(ApplyChild applychild);
	public void DeleteApplyChild(Integer id);
}
