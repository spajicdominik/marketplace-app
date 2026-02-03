package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.User;
import com.dspajic.marketplace.dto.UserDto;

import java.util.List;

public interface UserRepository {
    List<User> getAllUsers();

    User getUserById(int id);

    int addUser(User user);

    int updateUser(User user);

    int deleteUser(int id);

    UserDto getUserByIdd(int id);

    User findByUsername(String username);
    List<String> findAuthoritiesByUsername(String username);
}
