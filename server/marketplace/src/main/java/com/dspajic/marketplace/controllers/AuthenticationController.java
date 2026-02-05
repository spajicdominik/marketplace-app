package com.dspajic.marketplace.controllers;

import com.dspajic.marketplace.config.JwtService;
import com.dspajic.marketplace.dto.AuthDto;
import com.dspajic.marketplace.dto.JwtResponseDto;
import com.dspajic.marketplace.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
    @Autowired
    JwtService jwtService;

    @Autowired
    UserService userService;

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
}
