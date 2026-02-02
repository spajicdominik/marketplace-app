package com.dspajic.marketplace.config;

import com.dspajic.marketplace.dao.UserRepository;
import com.dspajic.marketplace.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {

    private UserService userService;

    @Bean
    public UserDetailsService userDetailsService() {
        return username -> (UserDetails) userService.getUserByUsername(username);
        }
    }
