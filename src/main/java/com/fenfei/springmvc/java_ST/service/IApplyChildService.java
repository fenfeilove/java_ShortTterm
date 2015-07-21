package com.fenfei.springmvc.java_ST.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fenfei.springmvc.java_ST.pojos.ApplyChild;
/**
 * @author zhuohaidi
 */
@Service
public interface IApplyChildService {
	public List<ApplyChild> getApplyChild(Integer applyid); 
}
