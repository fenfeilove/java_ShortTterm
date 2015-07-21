package com.fenfei.springmvc.java_ST.contral;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

import javax.servlet.http.HttpServletRequest;

public class WebFormData
{

  public static String decodeUTF8(String parameter, HttpServletRequest request) throws UnsupportedEncodingException {
    String source = new String(request.getParameter(parameter).getBytes("ISO-8859-1"),"UTF-8");
    if (source == null) return null;
    String result = source;
    try {
      result = URLDecoder.decode(source.replaceAll("%", "%25") ,"UTF-8");
    }
    catch (UnsupportedEncodingException e) {
      e.printStackTrace();
    }
    return result;
  }
}