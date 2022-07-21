package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.enums.status;
import com.example.demo.member.Credentials;
import com.example.demo.model.Profile;
import com.example.demo.model.User;
import com.example.demo.repository.ProfileRepo;
import com.example.demo.repository.UserRepo;

@Service
public class UserService {
	
    @Autowired
	private UserRepo uRepo;
    private ProfileRepo pRepo;
    
	 public status createUser(User user) {

	        String email=uRepo.existsByEmail(user.getEmail());
	        if(email!=null) {
	            return status.USER_ALREADY_EXISTS;
	        }
	        
	        uRepo.save(user);
	        
	        return status.SUCCESS;
	    }
	 public User login(Credentials credentials) {
			/* Object user=null; */
	        User sp =uRepo.verifyCredentials(credentials.getEmail(),credentials.getPass());
	        
	        return sp;
}
//	 public User update(int uid,User u)
//	 {
//		 User user=uRepo.findById(uid).get(); 
//		 if (user.getAadhar()==0) {
//		 user.setAadhar(u.getAadhar());
//		 user.setMobile(u.getMobile());
//		 user.setDob(u.getDob());
//		 user.setFname(u.getFname());
//		 user.setLname(u.getLname());
//		 user.setGender(u.getGender());
//		 user.setIncome(u.getIncome());
//		 user.setmStatus(u.getmStatus());
//		 user.setSpouse(u.getSpouse());
//		 user.setOrg(u.getOrg());
//		 user.setAddress(u.getAddress());
//		 user.setCity(u.getCity());
//		 user.setState(u.getState());
//		 user.setCountry(u.getCountry());
//		 user.setPincode(u.getPincode());
//		 uRepo.save(user);}
//		 return user;
//	 }
}
