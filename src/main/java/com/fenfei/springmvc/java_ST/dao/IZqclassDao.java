package com.fenfei.springmvc.java_ST.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.fenfei.springmvc.java_ST.pojos.Zqclass;
/**
 * @author zhuohaidi
 */
@Repository
public interface IZqclassDao {
	public List<Zqclass> LoadZqclass();
}
