package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dto.auth.UserRegisterDto;
import com.dspajic.marketplace.entities.Users;

import java.util.List;

public interface UsersService {
    List<Users> getAllUserss();
    Users getUsersById(Integer id);

    Users getUserByUsername(String username);

    Integer addUsers(Users entity);
    Integer updateUsers(Users entity);
    void deleteUsers(Integer id);

    Integer enableUser(String email);

    List<String> getAuthoritiesByUsername (String username);
    Users registerNewUser(UserRegisterDto userDto);

    String validateVerificationToken(String token);
}
