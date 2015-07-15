package com.fenfei.springmvc.java_ST.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.fenfei.springmvc.java_ST.pojos.User;
/**
 * @author zhuohaidi
 */
@Repository
public interface IUserDao {
	public User LoadUser(User user);
	public void AddMulitUser(List<User> userlist);
}
