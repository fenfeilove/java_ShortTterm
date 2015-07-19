package com.fenfei.springmvc.java_ST.pojos;

public class KeySearch1 {
	private String pkOrg;
	private String pkGroup;
	private String status;
	public String getPkOrg() {
		return pkOrg;
	}
	public void setPkOrg(String pkOrg) {
		this.pkOrg = pkOrg;
	}
	public String getPkGroup() {
		return pkGroup;
	}
	public void setPkGroup(String pkGroup) {
		this.pkGroup = pkGroup;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "KeySearch1 [pkOrg=" + pkOrg + ", pkGroup=" + pkGroup + ", status=" + status + "]";
	}
	
}
