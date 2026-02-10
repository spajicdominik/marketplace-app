package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dao.UsersRepository;
import com.dspajic.marketplace.entities.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersServiceImpl implements UsersService{

    @Autowired
    UsersRepository repository;

    @Override
    public List<Users> getAllUserss() {
        return repository.getAllUserss();
    }

    @Override
    public Users getUsersById(Integer id) {
        return repository.getUsersById(id);
    }

    @Override
    public Integer addUsers(Users entity) {
        return repository.addUsers(entity);
    }

    @Override
    public Integer updateUsers(Users entity) {
        return repository.updateUsers(entity);
    }

    @Override
    public void deleteUsers(Integer id) {
        repository.deleteUsers(id);
    }

    @Override
    public List<String> getAuthoritiesByUsername(String username) {
        return repository.findAuthoritiesByUsername(username);
    }

}
