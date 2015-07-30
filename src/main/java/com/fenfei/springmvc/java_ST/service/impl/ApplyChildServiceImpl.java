package com.fenfei.springmvc.java_ST.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fenfei.springmvc.java_ST.dao.IApplyChildDao;
import com.fenfei.springmvc.java_ST.pojos.ApplyChild;
import com.fenfei.springmvc.java_ST.service.IApplyChildService;

@Service
public class ApplyChildServiceImpl implements IApplyChildService{

	@Autowired
	IApplyChildDao applychildDao;

	@Override
	public List<ApplyChild> getApplyChild(Integer applyid) {
		// TODO Auto-generated method stub
		return applychildDao.LoadApplyChild(applyid);
	}

	@Override
	public void AddApplyChild(ApplyChild applychild) {
		// TODO Auto-generated method stub
		applychildDao.AddApplyChild(applychild);
	}

	@Override
	public void ModifyApplyChild(ApplyChild applychild) {
		// TODO Auto-generated method stub
		applychildDao.ModifyApplyChild(applychild);
	}

	@Override
	public void DeleteApplyChild(Integer id) {
		// TODO Auto-generated method stub
		applychildDao.DeleteApplyChild(id);
	}

	@Override
	public ApplyChild getApplyChildById(Integer id) {
		// TODO Auto-generated method stub
		return applychildDao.LoadApplyChildById(id);
	}

}
