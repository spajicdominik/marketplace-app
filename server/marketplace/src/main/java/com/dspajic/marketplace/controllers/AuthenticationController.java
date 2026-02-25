package com.dspajic.marketplace.controllers;

import com.dspajic.marketplace.config.JwtService;
import com.dspajic.marketplace.dto.auth.AuthDto;
import com.dspajic.marketplace.dto.auth.JwtResponseDto;
import com.dspajic.marketplace.dto.auth.UserRegisterDto;
import com.dspajic.marketplace.entities.Users;
import com.dspajic.marketplace.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
    @Autowired
    JwtService jwtService;

    @Autowired
    UsersService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity<JwtResponseDto> authenticateAndGetToken(@RequestBody AuthDto authDto) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authDto.getUsername(), authDto.getPassword())
        );
        if (authentication.isAuthenticated()) {
            String token = jwtService.generateToken(authDto.getUsername());
            JwtResponseDto response = new JwtResponseDto(token);
            return ResponseEntity.ok(response);
        }
        else {
            throw new UsernameNotFoundException("Invalid user request!");
        }
    }

    @GetMapping("/verify-email")
    public ResponseEntity<String> verifyEmail(@RequestParam("token") String token) {
        String result = userService.validateVerificationToken(token);

        return switch (result) {
            case "valid" -> ResponseEntity.ok("Email verified successfully!");
            case "invalid" -> ResponseEntity.badRequest().body("Invalid verification token.");
            case "token has expired" -> ResponseEntity.badRequest().body("Verification link has expired.");
            case "user already enabled" -> ResponseEntity.badRequest().body("User already enabled. Please log in.");
            default -> ResponseEntity.internalServerError().body("Unknown error.");
        };
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody UserRegisterDto userRegisterDto) {
        Users user = userService.registerNewUser(userRegisterDto);
        userService.addUserAuthority(user.getUsername());
        return ResponseEntity.ok("User registered successifully! Check your email to confirm registration.");
    }
}

