package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.UserVerification;
import com.dspajic.marketplace.mappers.VerificationMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserVerificationRepositoryImpl implements UserVerificationRepository{

    @Autowired
    JdbcTemplate jdbcTemplate;

    VerificationMapper verificationMapper = new VerificationMapper();

    @Override
    public Integer addUserVerification(UserVerification userVerification) {
        String sql = """
                INSERT INTO 
                user_verification 
                (
                email, 
                verification_code,
                created_at,
                expires_at
                )
                VALUES 
                (?, ?, ?, ?);
                """;
        return jdbcTemplate.update(
                sql,
                userVerification.getEmail(),
                userVerification.getVerificationCode(),
                userVerification.getCreatedAt(),
                userVerification.getExpiresAt()
        );
    }

    @Override
    public List<UserVerification> getVerificationByToken(String token) {
        String sql = """
                SELECT
                *
                FROM
                user_verification
                WHERE
                verification_code = ?
                """;
        return jdbcTemplate.query(sql,verificationMapper, token);
    }

    @Override
    public void deleteToken(String token) {
        String sql = """
                DELETE FROM
                user_verification
                WHERE
                token = ?;
                """;
        jdbcTemplate.update(sql, token);
    }
}
