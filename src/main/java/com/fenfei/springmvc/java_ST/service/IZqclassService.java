package com.fenfei.springmvc.java_ST.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fenfei.springmvc.java_ST.pojos.Zqclass;
/**
 * @author zhuohaidi
 */
@Service
public interface IZqclassService {
	public List<Zqclass> getZqclass(); 
}
