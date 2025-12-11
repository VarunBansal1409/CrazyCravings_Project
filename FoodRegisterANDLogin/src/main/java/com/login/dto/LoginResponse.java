package com.login.dto;

public class LoginResponse {

    private String status;
    private String name;
    private String email;

    public LoginResponse(String status, String name, String email) {
        this.status = status;
        this.name = name;
        this.email = email;
    }

    public String getStatus() { return status; }
    public String getName() { return name; }
    public String getEmail() { return email; }
}
