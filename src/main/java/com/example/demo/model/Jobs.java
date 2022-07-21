package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Jobs")
public class Jobs {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int jobs_id;
	
	private String c_name;
	private String job_role;
	private String job_desc;
	private String job_details;
	private String job_req;
	private String job_code;
	private String job_location;
	
	public Jobs(int jobs_id, String c_name, String job_role, String job_desc, String job_details, String job_req,
			String job_code, String job_location) {
		super();
		this.jobs_id = jobs_id;
		this.c_name = c_name;
		this.job_role = job_role;
		this.job_desc = job_desc;
		this.job_details = job_details;
		this.job_req = job_req;
		this.job_code = job_code;
		this.job_location = job_location;
	}

	public Jobs() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getJobs_id() {
		return jobs_id;
	}

	public void setJobs_id(int jobs_id) {
		this.jobs_id = jobs_id;
	}

	public String getC_name() {
		return c_name;
	}

	public void setC_name(String c_name) {
		this.c_name = c_name;
	}

	public String getJob_role() {
		return job_role;
	}

	public void setJob_role(String job_role) {
		this.job_role = job_role;
	}

	public String getJob_desc() {
		return job_desc;
	}

	public void setJob_desc(String job_desc) {
		this.job_desc = job_desc;
	}

	public String getJob_details() {
		return job_details;
	}

	public void setJob_details(String job_details) {
		this.job_details = job_details;
	}

	public String getJob_req() {
		return job_req;
	}

	public void setJob_req(String job_req) {
		this.job_req = job_req;
	}

	public String getJob_code() {
		return job_code;
	}

	public void setJob_code(String job_code) {
		this.job_code = job_code;
	}

	public String getJob_location() {
		return job_location;
	}

	public void setJob_location(String job_location) {
		this.job_location = job_location;
	}
	

}
