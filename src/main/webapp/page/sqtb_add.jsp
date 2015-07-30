<%@ page import="com.fenfei.springmvc.java_ST.pojos.*,java.util.*" language="java" contentType="text/html;charset=UTF8"
    pageEncoding="UTF8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>
</head>
<% 
	Date date=new Date();
	String sqdh="SQ"+date.getTime();
%>
<body>
<div id="MyView">
<link href="css/sqtb.css" rel="stylesheet" type="text/css" />
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
	<form id="sqtb_add_form"action="sqtb/sqtb_save" method="post"">
	<div id="Domain">
		<input type="button" onclick="SQTB_ADD_CHECK()" value="保存" />
		<button type="button" onclick="SQTB_ADD_BACK()">返回</button>
	</div>
	<div>
		<h5>基本信息</h5><hr/>
           <div id="jbxx">
          	  <table width="720px" border="0" align="center">
           	  <tr>
           	    <td width:100px>申请单号：</td>
           	    <td colspan="5"><input type="text" name="sqdh" readonly='true' required='true' value="<%=sqdh%>"/></td>
          	    </tr>
           	  <tr>
           	    <td width:100px>发行单位：</td>
           	    <td colspan="5"><input type="text" id="pk_group" name="pk_group"  style="width:590px" required='true' readonly='true'/></td>
          	    </tr>
           	  <tr>
           	    <td width:100px>所属集团：</td>
           	    <td><input type="text" id="pk_org" name="pk_org"  style="width:100px" required='true' readonly='true'/></td>
           	    <td width:100px>债券余额：</td>
           	    <td><input type="text" name="zqye" onkeyup="amount(this)" required='true' style="width:100px"/></td>
           	    <td width:100px>企业级别：</td>
           	    <td><input type="text" name="qyjb" required='true' style="width:100px"/><br/></td>
         	    </tr>
           	  <tr>
           	    <td width:100px>单位：</td>
           	    <td><input type="text" name="qddw" value="万元" required='true' style="width:100px"/></td>
           	    <td width:100px>币种：</td>
           	    <td><input type="text" name="qdbz" value="人民币" required='true' style="width:100px"/></td>
           	    <td width:100px>批复文号：</td>
           	    <td><input type="text" name="pfwh" style="width:100px"/></td>
         	    </tr>
           	  <tr>
           	    <td width:100px>备注：</td>
           	    <td colspan="5"><textarea name="remark"  style="width: 590px;height: 165px;"></textarea></td>
          	    </tr>
         	  </table>
         </div>
         
       </div>
	</form>
       <div>
       	<h5>发券申请子表</h5><hr>
       	<div>
       		<button onclick="SQTB_ADD_WARM()">新建申请子表</button>
       	</div>
           <table class="sqtbchild" width="720px" style="text-align:left">
           	<tr><td>债券品种</td><td>计划发行日期</td><td>计划发行额度</td><td>预计发行利率</td><td>用途</td><td>修改</td><td>删除</td></tr>
           </table>
       </div>
	</div>
</div>
</body>
</html>
