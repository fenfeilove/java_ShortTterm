package com.fenfei.springmvc.java_ST.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fenfei.springmvc.java_ST.pojos.User;
/**
 * @author zhuohaidi
 */
@Service
public interface IUserService {
	public User getUser(User user);
	public void AddMulitUser(List<User> userlist);
}
