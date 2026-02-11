package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dao.UserVerificationRepository;
import com.dspajic.marketplace.entities.UserVerification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserVerificationServiceImpl implements UserVerificationService{
    @Autowired
    UserVerificationRepository userVerificationRepository;

    @Override
    public Integer addUserVerification(UserVerification userVerification) {
        return userVerificationRepository.addUserVerification(userVerification);
    }

    @Override
    public UserVerification getVerificationByToken(String token) {
        List<UserVerification> userVerL = userVerificationRepository.getVerificationByToken(token);
        UserVerification verification = userVerL.getFirst();
        return verification;
    }

    @Override
    public void deleteToken(String token) {
        userVerificationRepository.deleteToken(token);
    }
}
