package com.dspajic.marketplace.service;

public interface EmailService {
    void sendEmail(String to, String subject, String text);
}
