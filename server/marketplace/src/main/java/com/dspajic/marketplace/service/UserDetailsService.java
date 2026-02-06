package com.dspajic.marketplace.service;

import com.dspajic.marketplace.entities.UserDetails;

import java.util.List;

public interface UserDetailsService {
    List<UserDetails> getAllUserDetailss();
    UserDetails getUserDetailsById(Integer id);
    Integer addUserDetails(UserDetails entity);
    Integer updateUserDetails(UserDetails entity);
    void deleteUserDetails(Integer id);
}
