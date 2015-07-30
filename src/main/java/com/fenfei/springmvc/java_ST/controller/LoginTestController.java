package com.fenfei.springmvc.java_ST.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fenfei.springmvc.java_ST.contral.MD5Util;
import com.fenfei.springmvc.java_ST.pojos.User;
import com.fenfei.springmvc.java_ST.service.IUserService;
/**
 * @author zhuohaidi
 */
@Controller
@RequestMapping("/login")
public class LoginTestController {
	
	@Autowired
	IUserService userService;
	@RequestMapping(method=RequestMethod.GET)
	public String login (HttpServletRequest request,Model model){
		return "login";
	}
	
	@RequestMapping(value="/check",method=RequestMethod.POST)
	@ResponseBody
	public String login_check (HttpServletRequest request,Model model){
		String username=(String)request.getParameter("username");
		String password=(String)request.getParameter("password");
		String Remember=(String)request.getParameter("remenber");//用来选择是否保存cookie
		User user=new User();
		user.setUserid(username);
		user=userService.getUser(user);
		//password=MD5Util.MD5(password);//MD5加密
		if(user!=null&&user.getPasswd().equals(password))
		{
			request.getSession().setAttribute("user", user);
			return "{ok:true}";
		}
		return "{ok:false}";
	}
	@RequestMapping(value="/logined")
	@ResponseBody
	public String logined_check(HttpServletRequest request){
		User user=(User)request.getSession().getAttribute("user");
		if(user!=null)
			return "{ok:true}";
		else
			return "{ok:false}";
	}
	
	@RequestMapping(value="/cookie", method=RequestMethod.GET)
	@ResponseBody
	public String getcookie (HttpServletRequest request){
		Cookie cookies[] = request.getCookies();
		if(cookies==null) return "";
		return "";
	}
}
