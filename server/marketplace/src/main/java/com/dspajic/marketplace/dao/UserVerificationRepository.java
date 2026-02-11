package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.UserVerification;

import java.util.List;

public interface UserVerificationRepository {
    Integer addUserVerification(UserVerification userVerification);
    List<UserVerification> getVerificationByToken(String token);

    void deleteToken(String token);
}
