package com.fenfei.springmvc.java_ST.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fenfei.springmvc.java_ST.pojos.User;

@RestController
@RequestMapping("/test")

public class TestController {
	@RequestMapping(method = RequestMethod.GET)
	public List<User> test(HttpServletRequest request,HttpServletResponse response)
	{
		response.setContentType("text/json");
		User user=new User();
		user.setUserid("123456");
		user.setUsername("zhd");
		user.setPasswd("123456");
		List<User> list=new ArrayList<User>();
		list.add(user);
		return list;
	}
}
