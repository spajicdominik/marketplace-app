package com.dspajic.marketplace.controllers;

import com.dspajic.marketplace.entities.Users;
import com.dspajic.marketplace.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UsersController {

    @Autowired
    UsersService service;

    @GetMapping("/users")
    public List<Users> getAllUserss() {
        return service.getAllUserss();
    }

    @GetMapping("/users/{id}")
    public Users getUsersById(@PathVariable("id") Integer id) {
        return service.getUsersById(id);
    }

    @PostMapping("/users")
    public Integer addUsers(@RequestBody Users entity) {
        return service.addUsers(entity);
    }

    @PutMapping("/users")
    public int updateUsers(@RequestBody Users entity) {
        return service.updateUsers(entity);
    }

    @DeleteMapping("/users/{id}")
    public void deleteUsers(@PathVariable("id") Integer id) {
        service.deleteUsers(id);
    }
}
