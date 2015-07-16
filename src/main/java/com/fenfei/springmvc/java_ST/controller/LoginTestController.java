package com.fenfei.springmvc.java_ST.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fenfei.springmvc.java_ST.pojos.User;
/**
 * @author zhuohaidi
 */
@Controller
@RequestMapping("/login")
public class LoginTestController {
	
	@RequestMapping(method=RequestMethod.GET)
	public String login (HttpServletRequest request,Model model){
		return "login";
	}
	
	@RequestMapping(value="/check",method=RequestMethod.POST)
	@ResponseBody
	public List<User> login_check (HttpServletRequest request,Model model){
		String username=(String)request.getParameter("username");
		String password=(String)request.getParameter("password");
		User user=new User();
		user.setUserid("123456");
		user.setUsername("zhd");
		user.setPasswd("123456");
		List<User> list=new ArrayList<User>();
		list.add(user);
		return list;
	}
}
