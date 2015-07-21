package com.fenfei.springmvc.java_ST.pojos;

import java.util.Date;

public class ApplyChild {
	private Integer id;
	private Integer applyid;
	private Integer zq_class;
	private Date fx_date;
	private Integer fx_ed;
	private Double fx_lilv;
	private String use;
	private boolean dr;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getApplyid() {
		return applyid;
	}
	public void setApplyid(Integer applyid) {
		this.applyid = applyid;
	}
	public Integer getZq_class() {
		return zq_class;
	}
	public void setZq_class(Integer zq_class) {
		this.zq_class = zq_class;
	}
	public Date getFx_date() {
		return fx_date;
	}
	public void setFx_date(Date fx_date) {
		this.fx_date = fx_date;
	}
	public Integer getFx_ed() {
		return fx_ed;
	}
	public void setFx_ed(Integer fx_ed) {
		this.fx_ed = fx_ed;
	}
	public Double getFx_lilv() {
		return fx_lilv;
	}
	public void setFx_lilv(Double fx_lilv) {
		this.fx_lilv = fx_lilv;
	}
	public String getUse() {
		return use;
	}
	public void setUse(String use) {
		this.use = use;
	}
	public boolean isDr() {
		return dr;
	}
	public void setDr(boolean dr) {
		this.dr = dr;
	}
	@Override
	public String toString() {
		return "ApplyChild [id=" + id + ", applyid=" + applyid + ", zq_class=" + zq_class + ", fx_date=" + fx_date
				+ ", fx_ed=" + fx_ed + ", fx_lilv=" + fx_lilv + ", use=" + use + ", dr=" + dr + "]";
	}
}
