package com.dspajic.marketplace.controllers;

import com.dspajic.marketplace.dao.UserRepository;
import com.dspajic.marketplace.entities.User;
import dto.UserDto;
import dto.UserFilters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userRepository.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable("id") int id){
        return userRepository.getUserById(id);
    }

    @PostMapping("/users")
    public int addUser (@RequestBody User user) {
        return userRepository.addUser(user);
    }

    @PutMapping("/users")
    public int updateUser (@RequestBody User user) {
        return userRepository.updateUser(user);
    }

    @DeleteMapping("/users/{id}")
    public int deleteUser (@PathVariable("id") int id){
        return userRepository.deleteUser(id);
    }
}
