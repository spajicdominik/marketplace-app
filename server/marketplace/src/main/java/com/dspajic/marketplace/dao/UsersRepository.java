package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.Users;

import java.util.List;

public interface UsersRepository {
    List<Users> getAllUserss();
    Users getUsersById(Integer id);
    Integer addUsers(Users entity);
    Integer updateUsers(Users entity);
    void deleteUsers(Integer id);

    Users findByUsername(String username);

    List<String> findAuthoritiesByUsername(String username);
}
