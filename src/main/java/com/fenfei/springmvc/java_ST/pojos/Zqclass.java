package com.fenfei.springmvc.java_ST.pojos;

public class Zqclass {
	private int zq_id;
	private String zq_name;
	private String zq_remark;
	public int getZq_id() {
		return zq_id;
	}
	public void setZq_id(int zq_id) {
		this.zq_id = zq_id;
	}
	public String getZq_name() {
		return zq_name;
	}
	public void setZq_name(String zq_name) {
		this.zq_name = zq_name;
	}
	public String getZq_remark() {
		return zq_remark;
	}
	public void setZq_remark(String zq_remark) {
		this.zq_remark = zq_remark;
	}
	@Override
	public String toString() {
		return "Zqclass [zq_id=" + zq_id + ", zq_name=" + zq_name + ", zq_remark=" + zq_remark + "]";
	}
	
}
