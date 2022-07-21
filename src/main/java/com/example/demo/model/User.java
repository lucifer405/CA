package com.example.demo.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="User")
public class User {
	    @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    private int uid;
	    
	    private String u_name;
	    private String email;
		private String password;
		private String mobile;
//		private String fname;
//		private String lname;
//		private String gender;
//		private String address;
//		private String city;
//		private String country;
//		private String state;
//		private int pincode;
//		private int aadhar;
//		private String org;
//		private String mStatus;
//		private String spouse;
//		private Date dob;
//		private int income;
		
	    
//	    public String getFname() {
//			return fname;
//		}
//		public void setFname(String fname) {
//			this.fname = fname;
//		}
//		public String getLname() {
//			return lname;
//		}
//		public void setLname(String lname) {
//			this.lname = lname;
//		}
//		public String getGender() {
//			return gender;
//		}
//		public void setGender(String gender) {
//			this.gender = gender;
//		}
//		public String getAddress() {
//			return address;
//		}
//		public void setAddress(String address) {
//			this.address = address;
//		}
//		public String getCity() {
//			return city;
//		}
//		public void setCity(String city) {
//			this.city = city;
//		}
//		public String getCountry() {
//			return country;
//		}
//		public void setCountry(String country) {
//			this.country = country;
//		}
//		public String getState() {
//			return state;
//		}
//		public void setState(String state) {
//			this.state = state;
//		}
//		public int getPincode() {
//			return pincode;
//		}
//		public void setPincode(int pincode) {
//			this.pincode = pincode;
//		}
//		public int getAadhar() {
//			return aadhar;
//		}
//		public void setAadhar(int aadhar) {
//			this.aadhar = aadhar;
//		}
//		public String getOrg() {
//			return org;
//		}
//		public void setOrg(String org) {
//			this.org = org;
//		}
//		public String getmStatus() {
//			return mStatus;
//		}
//		public void setmStatus(String mStatus) {
//			this.mStatus = mStatus;
//		}
//		public String getSpouse() {
//			return spouse;
//		}
//		public void setSpouse(String spouse) {
//			this.spouse = spouse;
//		}
//		public Date getDob() {
//			return dob;
//		}
//		public void setDob(Date dob) {
//			this.dob = dob;
//		}
		public String getMobile() {
			return mobile;
		}
		public void setMobile(String mobile) {
			this.mobile = mobile;
		}
//		public int getIncome() {
//			return income;
//		}
//		public void setIncome(int income) {
//			this.income = income;
//		}
		public int getUid() {
			return uid;
		}
		public void setUid(int uid) {
			this.uid = uid;
		}
		public String getU_name() {
			return u_name;
		}
		public void setU_name(String u_name) {
			this.u_name = u_name;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getPassword() {
			return password;
		}
		public void setPass(String password) {
			this.password = password;
		}
		
}
