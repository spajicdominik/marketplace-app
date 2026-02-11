package com.dspajic.marketplace.mappers;

import com.dspajic.marketplace.entities.UserVerification;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDateTime;

public class VerificationMapper implements RowMapper<UserVerification> {
    @Override
    public UserVerification mapRow(ResultSet rs, int rowNum) throws SQLException {
        UserVerification userVerification = new UserVerification();
        userVerification.setVerificationCode(rs.getString("verification_code"));
        userVerification.setEmail(rs.getString("email"));
        userVerification.setId(rs.getLong("id"));
        userVerification.setCreatedAt(rs.getObject("created_at", LocalDateTime.class));
        userVerification.setExpiresAt(rs.getObject("expires_at", LocalDateTime.class));
        return userVerification;
    }
}
