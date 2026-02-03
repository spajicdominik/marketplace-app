package com.dspajic.marketplace.controllers;

import com.dspajic.marketplace.config.JwtService;
import com.dspajic.marketplace.dao.UserRepository;
import com.dspajic.marketplace.dto.AuthDto;
import com.dspajic.marketplace.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;
import com.dspajic.marketplace.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    JwtService jwtService;

    @Autowired
    UserService userService;
    @Autowired
    private AuthenticationManager authenticationManager;

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable("id") int id) {
        return userService.getUserById(id);
    }

    @PostMapping("/users")
    public int addUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    @PutMapping("/users")
    public int updateUser(@RequestBody User user) {
        return userService.updateUser(user);
    }

    @DeleteMapping("/users/{id}")
    public int deleteUser(@PathVariable("id") int id) {
        return userService.deleteUser(id);
    }

    @GetMapping("/users/females")
    public List<User> getAllFemaleUsers() {
        return userService.getAllFemaleUsers();
    }

    @PostMapping("/generateToken")
    public String authenticateAndGetToken(@RequestBody AuthDto authDto) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authDto.getUsername(), authDto.getPassword())
        );
        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(authDto.getUsername());
        }
        else {
            throw new UsernameNotFoundException("Invalid user request!");
        }
    }
}
