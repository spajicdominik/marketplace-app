package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.UserImage;

import java.util.List;

public interface UserImageRepository {
    List<UserImage> getAllUserImages();
    UserImage getUserImage(Integer userId);
    Integer addUserImage(UserImage image, Integer userId);
    Integer editUserImage(UserImage image, Integer userId);
    void deleteUserImage(Integer userId);
}
