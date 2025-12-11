package com.login.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.login.Entity.LoginEntity;
import com.login.dto.LoginDTO;
import com.login.dto.RegisterRequest;
import com.login.repo.LoginRepo;

@Service
public class LoginService {
   
	@Autowired
	public LoginRepo repo;
	
	//register
	//first we have to check user is present or not 
	public String register(RegisterRequest req) {
		
		Optional<LoginEntity> user = repo.findByEmail(req.getEmail());
		if(user.isPresent()) {
			return "User Already Exist";
		}
		
		LoginEntity us = new LoginEntity(
                req.getEmail(),
                req.getUsername(),
                req.getPassword()
        );
		 repo.save(us);
		 
		 return "Registered Successfully";
	    }
	  
	  //login 
	public String login(LoginDTO req) {
		 
		Optional<LoginEntity> user = repo.findByEmail(req.getEmail());
		
		if(user.isEmpty()) {
			return "user Doesnt Exit";
		}
		
		LoginEntity u = user.get();
		if(!u.getPassword().equals(req.getPassword())) {
			return "Invaild password";
		}
		return "Login Successfull";
	}
}
