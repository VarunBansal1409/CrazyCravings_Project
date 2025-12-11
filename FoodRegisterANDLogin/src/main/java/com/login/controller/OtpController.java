package com.login.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class OtpController {

    // ✅ Load API key from application.properties
    @Value("${fast2sms.api.key}")
    private String fast2smsApiKey;

    // ✅ Temporary in-memory OTP storage
    private Map<String, String> otpStore = new HashMap<>();


    // ============================
    // ✅ SEND OTP
    // ============================
    @PostMapping("/send-otp")
    public ResponseEntity<?> sendOtp(@RequestBody Map<String, String> request) {

        String mobile = request.get("mobile");
        String otp = String.valueOf(1000 + new Random().nextInt(9000));

        otpStore.put(mobile, otp);

        String message = "Your CrazyCravings verification code is " + otp;

        // ✅ DLT SAFE TRANSACTIONAL ROUTE
        String url = "https://www.fast2sms.com/dev/bulkV2"
                + "?authorization=" + fast2smsApiKey
                + "&route=v3"
                + "&language=english"
                + "&numbers=" + mobile
                + "&message=" + message;

        new RestTemplate().getForObject(url, String.class);

        return ResponseEntity.ok(Map.of("message", "OTP sent to your mobile"));
    }



    // ============================
    // ✅ VERIFY OTP
    // ============================
    @PostMapping("/verify-otp")
    public ResponseEntity<?> verifyOtp(@RequestBody Map<String, String> request) {

        String mobile = request.get("mobile");
        String otp = request.get("otp");

        String savedOtp = otpStore.get(mobile);

        if (savedOtp != null && savedOtp.equals(otp)) {
            otpStore.remove(mobile); // delete after success
            return ResponseEntity.ok(Map.of("message", "OTP Verified"));
        }

        return ResponseEntity.ok(Map.of("message", "Invalid OTP"));
    }
}
