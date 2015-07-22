package com.fenfei.springmvc.java_ST.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.fenfei.springmvc.java_ST.dao.IApplyDao;
import com.fenfei.springmvc.java_ST.pojos.Apply;
import com.fenfei.springmvc.java_ST.pojos.KeySearch1;
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
	@Override
	public List<String> getDisPK_Group(String pk_org) {
		// TODO Auto-generated method stub
		return applyDao.LoadDisPK_Group(pk_org);
	}
	@Override
	public List<Apply> getByKey1(KeySearch1 keysearch) {
		// TODO Auto-generated method stub
		return applyDao.LoadByKey1(keysearch);
	}
	@Override
	public Apply getApply(int applyid) {
		// TODO Auto-generated method stub
		return applyDao.LoadApply(applyid);
	}
	@Override
	public void shApply(Apply apply) {
		// TODO Auto-generated method stub
		applyDao.SHApply(apply);
		
	}
}
