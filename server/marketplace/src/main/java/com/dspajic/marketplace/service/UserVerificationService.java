package com.dspajic.marketplace.service;

import com.dspajic.marketplace.entities.UserVerification;

import java.util.List;

public interface UserVerificationService {
    Integer addUserVerification(UserVerification userVerification);
    UserVerification getVerificationByToken(String token);

    void deleteToken(String token);
}
