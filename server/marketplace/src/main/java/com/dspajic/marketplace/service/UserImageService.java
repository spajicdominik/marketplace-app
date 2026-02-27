package com.dspajic.marketplace.service;

import com.dspajic.marketplace.entities.UserImage;

public interface UserImageService {
    UserImage getUserImage(Integer userId);

    Integer addUserImage(Integer userId, UserImage image);
}
