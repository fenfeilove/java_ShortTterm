package com.fenfei.springmvc.java_ST.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.fenfei.springmvc.java_ST.contral.MD5Util;
import com.fenfei.springmvc.java_ST.pojos.User;
import com.fenfei.springmvc.java_ST.service.IUserService;
/**
 * @author zhuohaidi
 */
@Controller
public class LoginController {
	
	@Autowired
	IUserService userService;
	@RequestMapping(value = "/login")
	public String login (HttpServletRequest request,Model model){
		User user=(User)request.getSession().getAttribute("user");
		if(user!=null) return "redirect:home";
		String username=(String)request.getParameter("username");
		String password=(String)request.getParameter("password");
		if(username==null) 
		{
			return "login";
		}
		if(username.equals(""))
		{
			model.addAttribute("result","用户名不能为空");
			return "login";
		}
		else if(password==null||password.equals(""))
		{
			model.addAttribute("result","密码不能为空");
			return "login";
		}
		else
		{
			user=new User();
			user.setUserid(username);
			user=userService.getUser(user);
			password=MD5Util.MD5(password);
		
			if(user!=null&&user.getPasswd().equals(password))
			{
				request.getSession().setAttribute("user", user);
				return "redirect:test.html";
			}
			else 
			{
				model.addAttribute("result","用户名或密码错误");
				return "login";
			}
		}
	}
}
