package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dao.UserImageRepository;
import com.dspajic.marketplace.entities.UserImage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserImageServiceImpl implements UserImageService{
    @Autowired
    UserImageRepository repository;

    @Override
    public UserImage getUserImage(Integer userId) {
        return repository.getUserImage(userId);
    }

    @Override
    public Integer addUserImage(Integer userId, UserImage image) {
        return repository.addUserImage(image, userId);
    }
}
