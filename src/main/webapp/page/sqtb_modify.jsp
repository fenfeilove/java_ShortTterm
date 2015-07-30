<%@ page import="com.fenfei.springmvc.java_ST.pojos.*,java.util.*" language="java" contentType="text/html;charset=UTF8"
    pageEncoding="UTF8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>

</head>
<%
	Apply apply=(Apply)request.getAttribute("apply");
	List<ApplyChild> applychildlist=(List<ApplyChild>) request.getAttribute("applychildlist");
	if(apply==null)
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
<div id="MyView">
<link href="css/sqtb.css" rel="stylesheet" type="text/css" />
<style type="text/css">
.rowHeader {
  height: 25px;
  background-color: #CCCCFF;
  width: 100%;
}
.rowEven {
  height: 25px;
  background-color: #E9EFF8;
}
</style>
<div id="Shortcut_Bar">
	<h2>快捷栏</h2>
	<hr>
	<div id="TreeSearch">
		<h5>组织</h5>
		<div id="ch_ThreeSearch" style="width:100%;height:600px;overflow-y:auto;background-color:#f5f5f5">
			<div id="mytree" ></div>
		</div>
	</div>
</div>
<div id="DataList">
	<form id="sqtb_modify_form" action="sqtb/sqtb_save" method="post">
	<div id="Domain">
		<input type="hidden" name="applyid" value="<%=apply.getId() %>">
		<input type="button" onclick="SQTB_MOD_CHECK()" value="保存" />
		<button type="button" onclick="SQTB_MOD_BACK()">返回</button>
		<button type="button" onclick="SQTV_MOD_RELOAD(<%=apply.getId() %>)">刷新</button>
	</div>
	<div>
		<h5>基本信息</h5><hr/>
           <div id="jbxx">
          	  <table width="720px" border="0" align="center">
           	  <tr>
           	    <td width:100px>申请单号：</td>
           	    <td colspan="5"><input type="text" name="sqdh" readonly='true' required='true' value="<%=apply.getApply_code() %>"/></td>
          	    </tr>
           	  <tr>
           	    <td width:100px>发行单位：</td>
           	    <td colspan="5"><input type="text" id="pk_group" name="pk_group" value="<%=apply.getPk_group() %>" style="width:590px" required='true' readonly='true'/></td>
          	    </tr>
           	  <tr>
           	    <td width:100px>所属集团：</td>
           	    <td><input type="text" id="pk_org" name="pk_org" value="<%=apply.getPk_org() %>" style="width:100px" required='true' readonly='true'/></td>
           	    <td width:100px>债券余额：</td>
           	    <td><input type="text" name="zqye" value="<%=apply.getBond_left() %>" onkeyup="amount(this)" required='true' style="width:100px"/></td>
           	    <td width:100px>企业级别：</td>
           	    <td><input type="text" value="<%=apply.getDef1() %>" name="qyjb" required='true' style="width:100px"/><br/></td>
         	    </tr>
           	  <tr>
           	    <td width:100px>单位：</td>
           	    <td><input type="text" name="qddw" value="<%=apply.getCurrency_unit() %>" required='true' style="width:100px"/></td>
           	    <td width:100px>币种：</td>
           	    <td><input type="text" name="qdbz" value="<%=apply.getCurrency_class() %>" required='true' style="width:100px"/></td>
           	    <td width:100px>批复文号：</td>
           	    <td><input type="text" name="pfwh" value="<%=apply.getFile_no() %>" style="width:100px"/></td>
         	    </tr>
           	  <tr>
           	    <td width:100px>备注：</td>
           	    <td colspan="5"><textarea name="remark"  style="width: 590px;height: 165px;"><%=apply.getRemark() %></textarea></td>
          	    </tr>
         	  </table>
         </div>
         
       </div>
	</form>
       <div>
       	<h5>发券申请子表</h5><hr>
       	<div>
       		<button onclick="SQTB_MOD_ADDChildApply('新建申请子表',<%=apply.getId() %>)">新建申请子表</button>
       	</div>
           <table class="sqtbchild" width="720px" style="text-align:left">
           	<tr class="rowHeader"><td>债券品种</td><td>计划发行日期</td><td>计划发行额度</td><td>预计发行利率</td><td>用途</td><td>修改</td><td>删除</td></tr>
           	<%
           		if(applychildlist!=null)
           		for(int i=0; i < applychildlist.size();i++)
           		{
           			ApplyChild applychild=applychildlist.get(i);
           			if(i%2==1)
           				out.print("<tr class=\"rowEven\">");
           			else
           				out.print("<tr>");
           	%>
           	<td><%=map.get(applychild.getZq_class()) %></td>
           		<td><%=applychild.getFx_date().toLocaleString() %></td>
           		<td><%=applychild.getFx_ed() %></td>
           		<td><%=applychild.getFx_lilv() %></td>
           		<td><%=applychild.getPurpose() %></td>
           		<td><button onclick="SQTB_MOD_MODBUT(<%=applychild.getId()%>,<%=applychild.getApplyid()%>)">修改</button></td>
           		<td><button onclick="SQTB_MOD_DELBUT(<%=applychild.getId()%>,<%=applychild.getApplyid()%>)">删除</button></td></tr>
            <%  	
           		}
           	%>
           </table>
       </div>
	</div>
</div>
</body>
</html>