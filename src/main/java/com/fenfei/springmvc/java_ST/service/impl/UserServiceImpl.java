package com.fenfei.springmvc.java_ST.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fenfei.springmvc.java_ST.dao.IUserDao;
import com.fenfei.springmvc.java_ST.pojos.User;
import com.fenfei.springmvc.java_ST.service.IUserService;

@Service
public class UserServiceImpl implements IUserService{
	@Autowired
	IUserDao userDao;
	public User getUser(User user) {
		return userDao.LoadUser(user);
	}
	@Override
	public void AddMulitUser(List<User> userlist) {
		// TODO Auto-generated method stub
		userDao.AddMulitUser(userlist);
	}
}
