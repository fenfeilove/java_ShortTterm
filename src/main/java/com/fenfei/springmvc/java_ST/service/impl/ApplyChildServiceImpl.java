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

}
