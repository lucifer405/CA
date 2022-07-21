package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Post_Table")
public class Posts {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int postId;
	
	private String post_heading;
	private String post_subject;
	private String post_desc;
	public Posts(int postId, String post_heading, String post_subject, String post_desc) {
		super();
		this.postId = postId;
		this.post_heading = post_heading;
		this.post_subject = post_subject;
		this.post_desc = post_desc;
	}
	public Posts() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getPostId() {
		return postId;
	}
	public void setPostId(int postId) {
		this.postId = postId;
	}
	public String getPost_heading() {
		return post_heading;
	}
	public void setPost_heading(String post_heading) {
		this.post_heading = post_heading;
	}
	public String getPost_subject() {
		return post_subject;
	}
	public void setPost_subject(String post_subject) {
		this.post_subject = post_subject;
	}
	public String getPost_desc() {
		return post_desc;
	}
	public void setPost_desc(String post_desc) {
		this.post_desc = post_desc;
	}
	
	
	
	
}
