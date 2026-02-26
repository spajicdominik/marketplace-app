package com.dspajic.marketplace.controllers;

import com.dspajic.marketplace.dto.edituser.EditUserDto;
import com.dspajic.marketplace.entities.UserDetails;
import com.dspajic.marketplace.service.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserDetailsController {

    @Autowired
    UserDetailsService service;

    @GetMapping("/userDetails")
    public List<UserDetails> getAllUserDetailss() {
        return service.getAllUserDetailss();
    }

    @GetMapping("/userDetails/{id}")
    public UserDetails getUserDetailsById(@PathVariable("id") Integer id) {
        return service.getUserDetailsById(id);
    }

    @PostMapping("/userDetails")
    public Integer addUserDetails(@RequestBody UserDetails entity) {
        return service.addUserDetails(entity);
    }

    @PutMapping("/userDetails")
    public int updateUserDetails(@RequestBody UserDetails entity) {
        return service.updateUserDetails(entity);
    }

    @DeleteMapping("/userDetails/{id}")
    public void deleteUserDetails(@PathVariable("id") Integer id) {
        service.deleteUserDetails(id);
    }

    @PutMapping("/userDetails/edit/{user_id}")
    public Integer editUser(@PathVariable Integer user_id, @RequestBody EditUserDto details) { return service.editUser(user_id, details);}
}
