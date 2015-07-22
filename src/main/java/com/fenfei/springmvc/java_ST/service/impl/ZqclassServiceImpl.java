package com.fenfei.springmvc.java_ST.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fenfei.springmvc.java_ST.dao.IZqclassDao;
import com.fenfei.springmvc.java_ST.pojos.Zqclass;
import com.fenfei.springmvc.java_ST.service.IZqclassService;

@Service
public class ZqclassServiceImpl implements IZqclassService{

	@Autowired
	IZqclassDao zqclassDao;

	@Override
	public List<Zqclass> getZqclass() {
		// TODO Auto-generated method stub
		return zqclassDao.LoadZqclass();
	}

}
