package com.dspajic.marketplace.service;

import com.dspajic.marketplace.entities.Users;

import java.util.List;

public interface UsersService {
    List<Users> getAllUserss();
    Users getUsersById(Integer id);
    Integer addUsers(Users entity);
    Integer updateUsers(Users entity);
    void deleteUsers(Integer id);
    List<String> getAuthoritiesByUsername (String username);
}
