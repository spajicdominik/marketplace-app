package com.dspajic.marketplace.mappers.dto;

import com.dspajic.marketplace.dto.userdisplay.UserDisplayDto;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDateTime;

public class UserDisplayDtoRowMapper implements RowMapper<UserDisplayDto> {

    @Override
    public UserDisplayDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        UserDisplayDto dto = new UserDisplayDto();

        dto.setUserId(rs.getInt("userId"));
        dto.setEmail(rs.getString("email"));
        dto.setUsername(rs.getString("username"));
        dto.setFirstName(rs.getString("firstName"));
        dto.setLastName(rs.getString("lastName"));
        dto.setGender(rs.getString("gender"));
        dto.setBirthDate(rs.getDate("birthDate"));
        dto.setPhoneNumber(rs.getString("phoneNumber"));
        dto.setCreatedAt(rs.getObject("createdAt", LocalDateTime.class));

        return dto;
    }
}