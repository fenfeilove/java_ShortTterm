package com.fenfei.springmvc.java_ST.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.fenfei.springmvc.java_ST.dao.IApplyDao;
import com.fenfei.springmvc.java_ST.service.IApplyService;

@Service
public class ApplyServiceImpl implements IApplyService{

	@Autowired
	IApplyDao applyDao;
	@Override
	public List<String> getDisPK_ORG() {
		// TODO Auto-generated method stub
		return applyDao.LoadDisPK_ORG();
	}
}