package com.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.login.dto.LoginDTO;
import com.login.dto.RegisterRequest;
import com.login.service.LoginService;

@RestController
@RequestMapping("/api")

public class LoginController {

    @Autowired
    public LoginService service;

    // Register API
    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest req) {
        return service.register(req);
    }

    // Login API
    @PostMapping("/login")
    public String login(@RequestBody LoginDTO req) {
        return service.login(req);
    }
}
