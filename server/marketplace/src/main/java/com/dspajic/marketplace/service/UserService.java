package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dto.UserDto;
import com.dspajic.marketplace.entities.User;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

public interface UserService {
    List<User> getAllUsers();

    User getUserById(int id);

    int addUser(User user);

    int updateUser(User user);

    int deleteUser(int id);

    UserDto getUserByIdd(int id);

    List<User> getAllFemaleUsers();


}
