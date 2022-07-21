package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.example.demo.model.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer>{
	@Query("SELECT email FROM User t where t.email=?1")
	 public String existsByEmail(String email);
	
	@Query("SELECT t FROM User t where t.email=?1 and t.password=?2")
	public User verifyCredentials(String email,String pass);

}
