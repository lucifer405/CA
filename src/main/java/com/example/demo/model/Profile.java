package com.example.demo.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Profile")
public class Profile {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int uid;
	
	private String fname;
	private String lname;
	private String gender;
	private String address;
	private String city;
	private String country;
	private String state;
	private int pincode;
	private int aadhar;
	private String org;
	private String mStatus;
	private String spouse;
	private Date dob;
	private int income;
	private String nationality;
	private String language;
	
	public Profile() {
		super();
	}
	
	public Profile(String language,int uid,String nationality, String fname, String lname, String gender, String address, String city, String country,
			String state, int pincode, int aadhar, String org, String mStatus, String spouse, Date dob, int income) {
		super();
		this.language=language;
		this.nationality=nationality;
		this.uid = uid;
		this.fname = fname;
		this.lname = lname;
		this.gender = gender;
		this.address = address;
		this.city = city;
		this.country = country;
		this.state = state;
		this.pincode = pincode;
		this.aadhar = aadhar;
		this.org = org;
		this.mStatus = mStatus;
		this.spouse = spouse;
		this.dob = dob;
		this.income = income;
	}

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public int getAadhar() {
		return aadhar;
	}

	public void setAadhar(int aadhar) {
		this.aadhar = aadhar;
	}

	public String getOrg() {
		return org;
	}

	public void setOrg(String org) {
		this.org = org;
	}

	public String getmStatus() {
		return mStatus;
	}

	public void setmStatus(String mStatus) {
		this.mStatus = mStatus;
	}

	public String getSpouse() {
		return spouse;
	}

	public void setSpouse(String spouse) {
		this.spouse = spouse;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public int getIncome() {
		return income;
	}

	public void setIncome(int income) {
		this.income = income;
	}

	public String getNationality() {
		return nationality;
	}

	public void setNationality(String nationality) {
		this.nationality = nationality;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

    
}
