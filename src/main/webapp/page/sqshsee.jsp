<%@ page import="com.fenfei.springmvc.java_ST.pojos.*,java.util.*" language="java" contentType="text/html; charset=UTF8"
    pageEncoding="UTF8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>查看详情</title>
<script src="<%=request.getContextPath()%>/js/lib/jquery-1.9.1.js"></script>
<style type="text/css">
.yuanjiao{
	background-color: #DEEFFF;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	border: 1px solid #ADCBDE;
	padding-bottom:8px;
	padding-left:8px;
	padding-top:8px;
	
	float:left;
	width:60px;
	height:10px;
	text-align: center;
	color: #63A2CE;
	font-size: 12px;
}
#sqshsee{
	width:1000px;
	height:auto;
	margin:0px auto;
}
#blue{
	background:#E5ECF9;
}
#textalign{
	text-align:right;
}
.td100{
	width:100px;
}
</style>
<script type="text/jscript">

</script>
</head>
<%
	Apply apply=(Apply)request.getAttribute("apply");
	List<ApplyChild> applychildlist=(List<ApplyChild>) request.getAttribute("applychildlist");
	Integer button = (Integer)request.getAttribute("button");
	if(apply==null||button==null)
	{
		out.println("<script>alert('您的请求有误，请重试！')</script>");
		return;
	}
	if(applychildlist==null)
	{
		applychildlist=new ArrayList<ApplyChild>();
	}
	Map<Integer,String> map=new HashMap<Integer,String>();
	map.put(10, "企业债券");
	map.put(20, "公司债券");
	map.put(30, "中期票据");
	map.put(40, "短期融资券");
	map.put(50, "非定向公开债券融资工具");
	map.put(60, "超短期融资券");
	map.put(70, "其他");
%>
<body>
	<div id="sqshsee">
    	<div>编辑</div>
        <div>
        	<% if(button==1){%> 
        	<div>
				<div class="yuanjiao"><a href="shenhe?result=1&id=<%=apply.getId() %>">审核通过</a></div>
				<div class="yuanjiao"><a href="shenhe?result=0&id=<%=apply.getId() %>">审核退回</a></div>
			</div><br>
        	<%} %>
        	
        	<h5>基本信息</h5><hr/>
            <div id="jbxx">
           	  <table width="900" border="0" align="center">
            	  <tr>
            	    <td class="td100">申请单号：</td>
            	    <td colspan="5"><input type="text" name="sqdh" value="<%=apply.getApply_code() %>"/></td>
           	    </tr>
            	  <tr>
            	    <td class="td100">发行单位：</td>
            	    <td colspan="5"><input type="text" name="pk_group" value="<%=apply.getPk_group() %>" style="width:748px"/></td>
           	    </tr>
            	  <tr>
            	    <td class="td100">所属集团：</td>
            	    <td><input type="text" name="pk_org" value="<%=apply.getPk_org() %>"/></td>
            	    <td class="td100">债券余额：</td>
            	    <td><input type="text" name="zqye" value="<%=apply.getBond_left() %>"/></td>
            	    <td class="td100">企业级别：</td>
            	    <td><input type="text" name="qyjb" value="<%=apply.getDef1() %>" /><br/></td>
          	    </tr>
            	  <tr>
            	    <td class="td100">单位：</td>
            	    <td><input type="text" name="qddw" value="<%=apply.getCurrency_unit() %>"/></td>
            	    <td class="td100">币种：</td>
            	    <td><input type="text" name="qdbz" value="<%=apply.getCurrency_class() %>"/></td>
            	    <td class="td100">批复文号：</td>
            	    <td><input type="text" name="pfwh" value="<%=apply.getFile_no() %>"/></td>
          	    </tr>
            	  <tr>
            	    <td class="td100">备注：</td>
            	    <td colspan="5"><textarea name="remark" value="<%=apply.getRemark() %>" style="width: 748px;height: 165px;"></textarea></td>
           	    </tr>
          	  </table>
          </div>
          
        </div>
        <div>
        	<h5>发券申请子表</h5><hr/>
            <table class="sqshchild" width="900px" style="text-align:left">
            	<tr><td>债券品种</td><td>计划发行日期</td><td>计划发行额度</td><td>预计发行利率</td><td>用途</td></tr>
            	<%
            		for(int i=0;i<applychildlist.size();i++)
            		{
            			ApplyChild applychild=applychildlist.get(i);
            	%>
            	<tr><td><%=map.get(applychild.getZq_class()) %></td>
            		<td><%=applychild.getFx_date().toLocaleString() %></td>
            		<td><%=applychild.getFx_ed() %></td>
            		<td><%=applychild.getFx_lilv() %></td>
            		<td><%=applychild.getUse() %></td></tr>
                <%  	
            		}
            	%>
            </table>
        </div>
    </div>
</body>
</html>
