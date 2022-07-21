package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Hotel_Details")
public class Hotel_Facility {
	
	@Id
	private String coupon_code;
	
	private String h_name;
	private String h_facilitie;
	private String h_terms;
	private String h_location;
	
	public Hotel_Facility() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Hotel_Facility(String coupon_code, String h_name, String h_facilitie, String h_terms, String h_location) {
		super();
		this.coupon_code = coupon_code;
		this.h_name = h_name;
		this.h_facilitie = h_facilitie;
		this.h_terms = h_terms;
		this.h_location = h_location;
	}
	public String getCoupon_code() {
		return coupon_code;
	}
	public void setCoupon_code(String coupon_code) {
		this.coupon_code = coupon_code;
	}
	public String getH_name() {
		return h_name;
	}
	public void setH_name(String h_name) {
		this.h_name = h_name;
	}
	public String getH_facilitie() {
		return h_facilitie;
	}
	public void setH_facilitie(String h_facilitie) {
		this.h_facilitie = h_facilitie;
	}
	public String getH_terms() {
		return h_terms;
	}
	public void setH_terms(String h_terms) {
		this.h_terms = h_terms;
	}
	public String getH_location() {
		return h_location;
	}
	public void setH_location(String h_location) {
		this.h_location = h_location;
	}
	
	
	
	
}
