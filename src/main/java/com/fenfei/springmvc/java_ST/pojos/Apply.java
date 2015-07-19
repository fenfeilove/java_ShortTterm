package com.fenfei.springmvc.java_ST.pojos;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class Apply {
	/**
	* 主键
	*/
	private Integer id;

	/**
	* 申请单号
	*/
	private String Apply_code;

	/**
	* 批复文号
	*/
	private String File_no;

	/**
	* 债券余额
	*/
	private Integer Bond_left;

	/**
	* 申请日期
	*/
	private Date apply_date;

	/**
	* 单位
	*/
	private String Currency_unit;

	/**
	* 币种
	*/
	private String Currency_class;

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
	private String pk_org;

	/**
	* 公司
	*/
	private String pk_group;

	/**
	* 创建人
	*/
	private String creator;

	/**
	* 创建时间
	*/
	private Date create_time;

	/**
	* 修改人
	*/
	private  String modifier;

	/**
	* 修改时间
	*/
	private Date modife_time;

	/**
	* 审核人
	*/
	private  String approver;

	/**
	* 审核时间
	*/
	private Date approved_time;

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
	private Date delete_time;

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
	@JsonIgnore
	private String def1;

	/**
	* 保留字段2
	*/
	@JsonIgnore
	private String def2;

	/**
	* 保留字段3
	*/
	@JsonIgnore
	private String def3;

	/**
	* 保留字段4
	*/
	@JsonIgnore
	private String def4;

	/**
	* 保留字段5
	*/
	@JsonIgnore
	private String def5;

	/**
	* 保留字段6
	*/
	@JsonIgnore
	private Integer def6;

	/**
	* 保留字段7
	*/
	@JsonIgnore
	private Integer def7;

	/**
	* 保留字段8
	*/
	@JsonIgnore
	private Integer def8;

	/**
	* 保留字段9
	*/
	@JsonIgnore
	private Date def9;

	/**
	* 保留字段10
	*/
	@JsonIgnore
	private Date def10;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getApply_code() {
		return Apply_code;
	}

	public void setApply_code(String apply_code) {
		Apply_code = apply_code;
	}

	public String getFile_no() {
		return File_no;
	}

	public void setFile_no(String file_no) {
		File_no = file_no;
	}

	public Integer getBond_left() {
		return Bond_left;
	}

	public void setBond_left(Integer bond_left) {
		Bond_left = bond_left;
	}

	public Date getApply_date() {
		return apply_date;
	}

	public void setApply_date(Date apply_date) {
		this.apply_date = apply_date;
	}

	public String getCurrency_unit() {
		return Currency_unit;
	}

	public void setCurrency_unit(String currency_unit) {
		Currency_unit = currency_unit;
	}

	public String getCurrency_class() {
		return Currency_class;
	}

	public void setCurrency_class(String currency_class) {
		Currency_class = currency_class;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getPk_org() {
		return pk_org;
	}

	public void setPk_org(String pk_org) {
		this.pk_org = pk_org;
	}

	public String getPk_group() {
		return pk_group;
	}

	public void setPk_group(String pk_group) {
		this.pk_group = pk_group;
	}

	public String getCreator() {
		return creator;
	}

	public void setCreator(String creator) {
		this.creator = creator;
	}

	public Date getCreate_time() {
		return create_time;
	}

	public void setCreate_time(Date create_time) {
		this.create_time = create_time;
	}

	public String getModifier() {
		return modifier;
	}

	public void setModifier(String modifier) {
		this.modifier = modifier;
	}

	public Date getModife_time() {
		return modife_time;
	}

	public void setModife_time(Date modife_time) {
		this.modife_time = modife_time;
	}

	public String getApprover() {
		return approver;
	}

	public void setApprover(String approver) {
		this.approver = approver;
	}

	public Date getApproved_time() {
		return approved_time;
	}

	public void setApproved_time(Date approved_time) {
		this.approved_time = approved_time;
	}

	public String getApprovetext() {
		return approvetext;
	}

	public void setApprovetext(String approvetext) {
		this.approvetext = approvetext;
	}

	public String getPkApproveid() {
		return pkApproveid;
	}

	public void setPkApproveid(String pkApproveid) {
		this.pkApproveid = pkApproveid;
	}

	public String getEnable() {
		return enable;
	}

	public void setEnable(String enable) {
		this.enable = enable;
	}

	public String getVmeno() {
		return vmeno;
	}

	public void setVmeno(String vmeno) {
		this.vmeno = vmeno;
	}

	public String getDeleter() {
		return deleter;
	}

	public void setDeleter(String deleter) {
		this.deleter = deleter;
	}

	public Date getDelete_time() {
		return delete_time;
	}

	public void setDelete_time(Date delete_time) {
		this.delete_time = delete_time;
	}

	public String getDr() {
		return dr;
	}

	public void setDr(String dr) {
		this.dr = dr;
	}

	public Date getTs() {
		return ts;
	}

	public void setTs(Date ts) {
		this.ts = ts;
	}

	public String getDef1() {
		return def1;
	}

	public void setDef1(String def1) {
		this.def1 = def1;
	}

	public String getDef2() {
		return def2;
	}

	public void setDef2(String def2) {
		this.def2 = def2;
	}

	public String getDef3() {
		return def3;
	}

	public void setDef3(String def3) {
		this.def3 = def3;
	}

	public String getDef4() {
		return def4;
	}

	public void setDef4(String def4) {
		this.def4 = def4;
	}

	public String getDef5() {
		return def5;
	}

	public void setDef5(String def5) {
		this.def5 = def5;
	}

	public Integer getDef6() {
		return def6;
	}

	public void setDef6(Integer def6) {
		this.def6 = def6;
	}

	public Integer getDef7() {
		return def7;
	}

	public void setDef7(Integer def7) {
		this.def7 = def7;
	}

	public Integer getDef8() {
		return def8;
	}

	public void setDef8(Integer def8) {
		this.def8 = def8;
	}

	public Date getDef9() {
		return def9;
	}

	public void setDef9(Date def9) {
		this.def9 = def9;
	}

	public Date getDef10() {
		return def10;
	}

	public void setDef10(Date def10) {
		this.def10 = def10;
	}

	@Override
	public String toString() {
		return "Apply [id=" + id + ", Apply_code=" + Apply_code + ", File_no=" + File_no + ", Bond_left=" + Bond_left
				+ ", apply_date=" + apply_date + ", Currency_unit=" + Currency_unit + ", Currency_class="
				+ Currency_class + ", remark=" + remark + ", status=" + status + ", pk_org=" + pk_org + ", pk_group="
				+ pk_group + ", creator=" + creator + ", create_time=" + create_time + ", modifier=" + modifier
				+ ", modife_time=" + modife_time + ", approver=" + approver + ", approved_time=" + approved_time
				+ ", approvetext=" + approvetext + ", pkApproveid=" + pkApproveid + ", enable=" + enable + ", vmeno="
				+ vmeno + ", deleter=" + deleter + ", delete_time=" + delete_time + ", dr=" + dr + ", ts=" + ts
				+ ", def1=" + def1 + ", def2=" + def2 + ", def3=" + def3 + ", def4=" + def4 + ", def5=" + def5
				+ ", def6=" + def6 + ", def7=" + def7 + ", def8=" + def8 + ", def9=" + def9 + ", def10=" + def10 + "]";
	}

}