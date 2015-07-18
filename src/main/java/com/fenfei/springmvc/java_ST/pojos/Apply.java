package com.fenfei.springmvc.java_ST.pojos;

import java.util.Date;

public class Apply {
	/**
	* 主键
	*/
	private Integer id;

	/**
	* 申请单号
	*/
	private String applyCode;

	/**
	* 批复文号
	*/
	private String fileNo;

	/**
	* 债券余额
	*/
	private Integer bondLeft;

	/**
	* 申请日期
	*/
	private Date applyDate;

	/**
	* 单位
	*/
	private String currencyUnit;

	/**
	* 币种
	*/
	private String currencyClass;

	/**
	* 备注
	*/
	private String remark;

	/**
	* 状态
	*/
	private String status;

	/**
	* 集团
	*/
	private String pkOrg;

	/**
	* 公司
	*/
	private String pkGroup;

	/**
	* 创建人
	*/
	private String creator;

	/**
	* 创建时间
	*/
	private Date createTime;

	/**
	* 修改人
	*/
	private  String modifier;

	/**
	* 修改时间
	*/
	private Date modifeTime;

	/**
	* 审核人
	*/
	private  String approver;

	/**
	* 审核时间
	*/
	private Date approvedTime;

	/**
	* 审批意见
	*/
	private String approvetext;

	/**
	* 工作流实例ID
	*/
	private String pkApproveid;

	/**
	* 是否启用
	*/
	private String enable;

	/**
	* 备注
	*/
	private String vmeno;

	/**
	* 删除人
	*/
	private String deleter;

	/**
	* 删除时间
	*/
	private Date deleteTime;

	/**
	* 软删除(标志)
	*/
	private  String dr;

	/**
	* 时间轴
	*/
	private Date ts;

	/**
	* 保留字段1
	*/
	private String def1;

	/**
	* 保留字段2
	*/
	private String def2;

	/**
	* 保留字段3
	*/
	private String def3;

	/**
	* 保留字段4
	*/
	private String def4;

	/**
	* 保留字段5
	*/
	private String def5;

	/**
	* 保留字段6
	*/
	private Integer def6;

	/**
	* 保留字段7
	*/
	private Integer def7;

	/**
	* 保留字段8
	*/
	private Integer def8;

	/**
	* 保留字段9
	*/
	private Date def9;

	/**
	* 保留字段10
	*/
	private Date def10;

	/**
	* 获取 主键 的属性值
	* @return id : 主键
	 
	*/
	public Integer getId(){
		return this.id;
	}

	/**
	* 设置 主键 的属性值
	* @param id : 主键
	 
	*/
	public void setId(Integer id){
		this.id	= id;
	}

	/**
	* 获取 申请单号 的属性值
	* @return applyCode : 申请单号
	 
	*/
	public  String getApplyCode(){
		return this.applyCode;
	}

	/**
	* 设置 申请单号 的属性值
	* @param applyCode : 申请单号
	 
	*/
	public void setApplyCode( String applyCode){
		this.applyCode	= applyCode;
	}

	/**
	* 获取 批复文号 的属性值
	* @return fileNo : 批复文号
	 
	*/
	public  String getFileNo(){
		return this.fileNo;
	}

	/**
	* 设置 批复文号 的属性值
	* @param fileNo : 批复文号
	 
	*/
	public void setFileNo( String fileNo){
		this.fileNo	= fileNo;
	}

	/**
	* 获取 债券余额 的属性值
	* @return bondLeft : 债券余额
	 
	*/
	public  Integer getBondLeft(){
		return this.bondLeft;
	}

	/**
	* 设置 债券余额 的属性值
	* @param bondLeft : 债券余额
	 
	*/
	public void setBondLeft( Integer bondLeft){
		this.bondLeft	= bondLeft;
	}

	/**
	* 获取 申请日期 的属性值
	* @return applyDate : 申请日期
	 
	*/
	public Date getApplyDate(){
		return this.applyDate;
	}

	/**
	* 设置 申请日期 的属性值
	* @param applyDate : 申请日期
	 
	*/
	public void setApplyDate(Date applyDate){
		this.applyDate	= applyDate;
	}

	/**
	* 获取 单位 的属性值
	* @return currencyUnit : 单位
	 
	*/
	public  String getCurrencyUnit(){
		return this.currencyUnit;
	}

	/**
	* 设置 单位 的属性值
	* @param currencyUnit : 单位
	 
	*/
	public void setCurrencyUnit( String currencyUnit){
		this.currencyUnit	= currencyUnit;
	}

	/**
	* 获取 币种 的属性值
	* @return currencyClass : 币种
	 
	*/
	public  String getCurrencyClass(){
		return this.currencyClass;
	}

	/**
	* 设置 币种 的属性值
	* @param currencyClass : 币种
	 
	*/
	public void setCurrencyClass( String currencyClass){
		this.currencyClass	= currencyClass;
	}

	/**
	* 获取 备注 的属性值
	* @return remark : 备注
	 
	*/
	public  String getRemark(){
		return this.remark;
	}

	/**
	* 设置 备注 的属性值
	* @param remark : 备注
	 
	*/
	public void setRemark( String remark){
		this.remark	= remark;
	}

	/**
	* 获取 状态 的属性值
	* @return status : 状态
	 
	*/
	public  String getStatus(){
		return this.status;
	}

	/**
	* 设置 状态 的属性值
	* @param status : 状态
	 
	*/
	public void setStatus( String status){
		this.status	= status;
	}

	/**
	* 获取 集团 的属性值
	* @return pkOrg : 集团
	 
	*/
	public  String getPkOrg(){
		return this.pkOrg;
	}

	/**
	* 设置 集团 的属性值
	* @param pkOrg : 集团
	 
	*/
	public void setPkOrg( String pkOrg){
		this.pkOrg	= pkOrg;
	}

	/**
	* 获取 公司 的属性值
	* @return pkGroup : 公司
	 
	*/
	public  String getPkGroup(){
		return this.pkGroup;
	}

	/**
	* 设置 公司 的属性值
	* @param pkGroup : 公司
	 
	*/
	public void setPkGroup( String pkGroup){
		this.pkGroup	= pkGroup;
	}

	/**
	* 获取 创建人 的属性值
	* @return creator : 创建人
	 
	*/
	public  String getCreator(){
		return this.creator;
	}

	/**
	* 设置 创建人 的属性值
	* @param creator : 创建人
	 
	*/
	public void setCreator( String creator){
		this.creator	= creator;
	}

	/**
	* 获取 创建时间 的属性值
	* @return createTime : 创建时间
	 
	*/
	public Date getCreateTime(){
		return this.createTime;
	}

	/**
	* 设置 创建时间 的属性值
	* @param createTime : 创建时间
	 
	*/
	public void setCreateTime(Date createTime){
		this.createTime	= createTime;
	}

	/**
	* 获取 修改人 的属性值
	* @return modifier : 修改人
	 
	*/
	public  String getModifier(){
		return this.modifier;
	}

	/**
	* 设置 修改人 的属性值
	* @param modifier : 修改人
	 
	*/
	public void setModifier( String modifier){
		this.modifier	= modifier;
	}

	/**
	* 获取 修改时间 的属性值
	* @return modifeTime : 修改时间
	 
	*/
	public Date getModifeTime(){
		return this.modifeTime;
	}

	/**
	* 设置 修改时间 的属性值
	* @param modifeTime : 修改时间
	 
	*/
	public void setModifeTime(Date modifeTime){
		this.modifeTime	= modifeTime;
	}

	/**
	* 获取 审核人 的属性值
	* @return approver : 审核人
	 
	*/
	public  String getApprover(){
		return this.approver;
	}

	/**
	* 设置 审核人 的属性值
	* @param approver : 审核人
	 
	*/
	public void setApprover( String approver){
		this.approver	= approver;
	}

	/**
	* 获取 审核时间 的属性值
	* @return approvedTime : 审核时间
	 
	*/
	public Date getApprovedTime(){
		return this.approvedTime;
	}

	/**
	* 设置 审核时间 的属性值
	* @param approvedTime : 审核时间
	 
	*/
	public void setApprovedTime(Date approvedTime){
		this.approvedTime	= approvedTime;
	}

	/**
	* 获取 审批意见 的属性值
	* @return approvetext : 审批意见
	 
	*/
	public  String getApprovetext(){
		return this.approvetext;
	}

	/**
	* 设置 审批意见 的属性值
	* @param approvetext : 审批意见
	 
	*/
	public void setApprovetext( String approvetext){
		this.approvetext	= approvetext;
	}

	/**
	* 获取 工作流实例ID 的属性值
	* @return pkApproveid : 工作流实例ID
	 
	*/
	public  String getPkApproveid(){
		return this.pkApproveid;
	}

	/**
	* 设置 工作流实例ID 的属性值
	* @param pkApproveid : 工作流实例ID
	 
	*/
	public void setPkApproveid( String pkApproveid){
		this.pkApproveid	= pkApproveid;
	}

	/**
	* 获取 是否启用 的属性值
	* @return enable : 是否启用
	 
	*/
	public  String getEnable(){
		return this.enable;
	}

	/**
	* 设置 是否启用 的属性值
	* @param enable : 是否启用
	 
	*/
	public void setEnable( String enable){
		this.enable	= enable;
	}

	/**
	* 获取 备注 的属性值
	* @return vmeno : 备注
	 
	*/
	public  String getVmeno(){
		return this.vmeno;
	}

	/**
	* 设置 备注 的属性值
	* @param vmeno : 备注
	 
	*/
	public void setVmeno( String vmeno){
		this.vmeno	= vmeno;
	}

	/**
	* 获取 删除人 的属性值
	* @return deleter : 删除人
	 
	*/
	public  String getDeleter(){
		return this.deleter;
	}

	/**
	* 设置 删除人 的属性值
	* @param deleter : 删除人
	 
	*/
	public void setDeleter( String deleter){
		this.deleter	= deleter;
	}

	/**
	* 获取 删除时间 的属性值
	* @return deleteTime : 删除时间
	 
	*/
	public Date getDeleteTime(){
		return this.deleteTime;
	}

	/**
	* 设置 删除时间 的属性值
	* @param deleteTime : 删除时间
	 
	*/
	public void setDeleteTime(Date deleteTime){
		this.deleteTime	= deleteTime;
	}

	/**
	* 获取 软删除(标志) 的属性值
	* @return dr : 软删除(标志)
	*/
	public  String getDr(){
		return this.dr;
	}

	/**
	* 设置 软删除(标志) 的属性值
	* @param dr : 软删除(标志)
	*/
	public void setDr( String dr){
		this.dr	= dr;
	}

	/**
	* 获取 时间轴 的属性值
	* @return ts : 时间轴
	*/
	public Date getTs(){
		return this.ts;
	}

	/**
	* 设置 时间轴 的属性值
	* @param ts : 时间轴
	*/
	public void setTs(Date ts){
		this.ts	= ts;
	}

	/**
	* 获取 保留字段1 的属性值
	* @return def1 : 保留字段1
	*/
	public  String getDef1(){
		return this.def1;
	}

	/**
	* 设置 保留字段1 的属性值
	* @param def1 : 保留字段1
	*/
	public void setDef1( String def1){
		this.def1	= def1;
	}

	/**
	* 获取 保留字段2 的属性值
	* @return def2 : 保留字段2
	*/
	public  String getDef2(){
		return this.def2;
	}

	/**
	* 设置 保留字段2 的属性值
	* @param def2 : 保留字段2
	*/
	public void setDef2( String def2){
		this.def2	= def2;
	}

	/**
	* 获取 保留字段3 的属性值
	* @return def3 : 保留字段3
	*/
	public  String getDef3(){
		return this.def3;
	}

	/**
	* 设置 保留字段3 的属性值
	* @param def3 : 保留字段3
	*/
	public void setDef3( String def3){
		this.def3	= def3;
	}

	/**
	* 获取 保留字段4 的属性值
	* @return def4 : 保留字段4
	*/
	public  String getDef4(){
		return this.def4;
	}

	/**
	* 设置 保留字段4 的属性值
	* @param def4 : 保留字段4
	*/
	public void setDef4( String def4){
		this.def4	= def4;
	}

	/**
	* 获取 保留字段5 的属性值
	* @return def5 : 保留字段5
	*/
	public  String getDef5(){
		return this.def5;
	}

	/**
	* 设置 保留字段5 的属性值
	* @param def5 : 保留字段5
	*/
	public void setDef5( String def5){
		this.def5	= def5;
	}

	/**
	* 获取 保留字段6 的属性值
	* @return def6 : 保留字段6
	*/
	public  Integer getDef6(){
		return this.def6;
	}

	/**
	* 设置 保留字段6 的属性值
	* @param def6 : 保留字段6
	*/
	public void setDef6( Integer def6){
		this.def6	= def6;
	}

	/**
	* 获取 保留字段7 的属性值
	* @return def7 : 保留字段7
	*/
	public  Integer getDef7(){
		return this.def7;
	}

	/**
	* 设置 保留字段7 的属性值
	* @param def7 : 保留字段7
	*/
	public void setDef7( Integer def7){
		this.def7	= def7;
	}

	/**
	* 获取 保留字段8 的属性值
	* @return def8 : 保留字段8
	*/
	public  Integer getDef8(){
		return this.def8;
	}

	/**
	* 设置 保留字段8 的属性值
	* @param def8 : 保留字段8
	*/
	public void setDef8( Integer def8){
		this.def8	= def8;
	}

	/**
	* 获取 保留字段9 的属性值
	* @return def9 : 保留字段9
	*/
	public Date getDef9(){
		return this.def9;
	}

	/**
	* 设置 保留字段9 的属性值
	* @param def9 : 保留字段9
	*/
	public void setDef9(Date def9){
		this.def9	= def9;
	}

	/**
	* 获取 保留字段10 的属性值
	* @return def10 : 保留字段10
	*/
	public Date getDef10(){
		return this.def10;
	}

	/**
	* 设置 保留字段10 的属性值
	* @param def10 : 保留字段10
	*/
	public void setDef10(Date def10){
		this.def10	= def10;
	}

	public String toString(){
		return "{" + "id(主键)=" + id + "," + "applyCode(申请单号)=" + applyCode + "," + "fileNo(批复文号)=" + fileNo + "," + "bondLeft(债券余额)=" + bondLeft + "," + "applyDate(申请日期)=" + applyDate + "," + "currencyUnit(单位)=" + currencyUnit + "," + "currencyClass(币种)=" + currencyClass + "," + "remark(备注)=" + remark + "," + "status(状态)=" + status + "," + "pkOrg(集团)=" + pkOrg + "," + "pkGroup(公司)=" + pkGroup + "," + "creator(创建人)=" + creator + "," + "createTime(创建时间)=" + createTime + "," + "modifier(修改人)=" + modifier + "," + "modifeTime(修改时间)=" + modifeTime + "," + "approver(审核人)=" + approver + "," + "approvedTime(审核时间)=" + approvedTime + "," + "approvetext(审批意见)=" + approvetext + "," + "pkApproveid(工作流实例ID)=" + pkApproveid + "," + "enable(是否启用)=" + enable + "," + "vmeno(备注)=" + vmeno + "," + "deleter(删除人)=" + deleter + "," + "deleteTime(删除时间)=" + deleteTime + "," + "dr(软删除(标志))=" + dr + "," + "ts(时间轴)=" + ts + "," + "def1(保留字段1)=" + def1 + "," + "def2(保留字段2)=" + def2 + "," + "def3(保留字段3)=" + def3 + "," + "def4(保留字段4)=" + def4 + "," + "def5(保留字段5)=" + def5 + "," + "def6(保留字段6)=" + def6 + "," + "def7(保留字段7)=" + def7 + "," + "def8(保留字段8)=" + def8 + "," + "def9(保留字段9)=" + def9 + "," + "def10(保留字段10)=" + def10 + "," +  "}";
	}
}