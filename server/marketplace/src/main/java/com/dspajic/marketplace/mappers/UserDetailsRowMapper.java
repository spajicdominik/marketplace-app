package com.dspajic.marketplace.mappers;

import com.dspajic.marketplace.entities.UserDetails;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserDetailsRowMapper implements RowMapper<UserDetails> {
    @Override
    public UserDetails mapRow(ResultSet rs, int rowNum) throws SQLException {
        UserDetails e = new UserDetails();
        e.setId(rs.getInt("user_details_id"));
        e.setFirstName(rs.getString("first_name"));
        e.setLastName(rs.getString("last_name"));
        e.setGender(rs.getString("gender"));
        e.setBirthDate(rs.getDate("birth_date"));
        e.setPhoneNumber(rs.getString("phone_number"));
        e.setEmail(rs.getString("email"));
        e.setCityId(rs.getInt("city_id"));
        return e;
    }
}