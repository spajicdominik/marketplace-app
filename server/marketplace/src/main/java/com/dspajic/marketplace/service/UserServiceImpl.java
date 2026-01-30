package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dao.UserRepository;
import com.dspajic.marketplace.dto.UserDto;
import com.dspajic.marketplace.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepo;

    @Override
    public List<User> getAllUsers() {
        return userRepo.getAllUsers();
    }

    @Override
    public User getUserById(int id) {
        return userRepo.getUserById(id);
    }

    @Override
    public int addUser(User user) {
        return userRepo.addUser(user);
    }

    @Override
    public int updateUser(User user) {
        return userRepo.updateUser(user);
    }

    @Override
    public int deleteUser(int id) {
        return userRepo.deleteUser(id);
    }

    @Override
    public UserDto getUserByIdd(int id) {
        return userRepo.getUserByIdd(id);
    }

    @Override
    public List<User> getAllFemaleUsers() {
        List<User> allUsers = userRepo.getAllUsers();
        List<User> deactivatedUsers = new ArrayList<>();
        for (User user : allUsers) {
            if (user.getGender().equals("F")) {
                deactivatedUsers.add(user);
            }
        }
        return deactivatedUsers;
    }
}
