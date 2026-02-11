package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dao.UserDetailsRepository;
import com.dspajic.marketplace.entities.UserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{

    @Autowired
    UserDetailsRepository repository;

    @Override
    public List<UserDetails> getAllUserDetailss() {
        return repository.getAllUserDetailss();
    }

    @Override
    public UserDetails getUserDetailsById(Integer id) {
        return repository.getUserDetailsById(id);
    }

    @Override
    public Integer addUserDetails(UserDetails entity) {
        return repository.addUserDetails(entity);
    }

    @Override
    public Integer updateUserDetails(UserDetails entity) {
        return repository.updateUserDetails(entity);
    }

    @Override
    public void deleteUserDetails(Integer id) {
        repository.deleteUserDetails(id);
    }

    @Override
    public UserDetails getUserDetailsByEmail(String email) {
        return repository.getUserDetailsByEmail(email);
    }
}
