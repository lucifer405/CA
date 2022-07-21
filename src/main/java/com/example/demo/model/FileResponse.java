package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Hospitality_Details")
public class FileResponse {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int res_no;
	
	private String res_name;
	private String res_cp_facilities;
	private String res_term;
	private String res_outlets;
	private String coupon_code;
	private String upload_img;
	private String filename;
	private String fileDownloadUri;
	private String fileType;
	private long size;
	
	public FileResponse(String filename, String fileDownloadUri, String fileType,
			long size) {
		super();
		this.filename = filename;
		this.fileDownloadUri = fileDownloadUri;
		this.fileType = fileType;
		this.size = size;
	}
	
	public FileResponse(String res_name, String res_cp_facilities, String res_term, String res_outlets,
			String coupon_code, String upload_img, String filename, String fileDownloadUri, String fileType,
			long size) {
		super();
		this.res_name = res_name;
		this.res_cp_facilities = res_cp_facilities;
		this.res_term = res_term;
		this.res_outlets = res_outlets;
		this.coupon_code = coupon_code;
		this.upload_img = upload_img;
		this.filename = filename;
		this.fileDownloadUri = fileDownloadUri;
		this.fileType = fileType;
		this.size = size;
	}
	public FileResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getFilename() {
		return filename;
	}
	public void setFilename(String filename) {
		this.filename = filename;
	}
	public String getFileDownloadUri() {
		return fileDownloadUri;
	}
	public void setFileDownloadUri(String fileDownloadUri) {
		this.fileDownloadUri = fileDownloadUri;
	}
	public String getFileType() {
		return fileType;
	}
	public void setFileType(String fileType) {
		this.fileType = fileType;
	}
	public long getSize() {
		return size;
	}
	public void setSize(long size) {
		this.size = size;
	}
	public String getRes_name() {
		return res_name;
	}
	public void setRes_name(String res_name) {
		this.res_name = res_name;
	}
	public String getRes_cp_facilities() {
		return res_cp_facilities;
	}
	public void setRes_cp_facilities(String res_cp_facilities) {
		this.res_cp_facilities = res_cp_facilities;
	}
	public String getRes_term() {
		return res_term;
	}
	public void setRes_term(String res_term) {
		this.res_term = res_term;
	}
	public String getRes_outlets() {
		return res_outlets;
	}
	public void setRes_outlets(String res_outlets) {
		this.res_outlets = res_outlets;
	}
	public String getCoupon_code() {
		return coupon_code;
	}
	public void setCoupon_code(String coupon_code) {
		this.coupon_code = coupon_code;
	}
	public String getUpload_img() {
		return upload_img;
	}
	public void setUpload_img(String upload_img) {
		this.upload_img = upload_img;
	}
	
	

}
