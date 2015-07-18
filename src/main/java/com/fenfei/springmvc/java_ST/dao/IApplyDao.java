package com.fenfei.springmvc.java_ST.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.fenfei.springmvc.java_ST.pojos.Apply;
/**
 * @author zhuohaidi
 */
@Repository
public interface IApplyDao {
	public List<String> LoadDisPK_ORG();
}
