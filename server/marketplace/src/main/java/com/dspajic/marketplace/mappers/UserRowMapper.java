package com.dspajic.marketplace.mappers;

import com.dspajic.marketplace.entities.User;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserRowMapper implements RowMapper<User> {

    @Override
    public User mapRow(ResultSet rs, int rowNum) throws SQLException{
        User u = new User();
        u.setId(rs.getInt("id"));
        u.setEmail(rs.getString("email"));
        u.setGender(rs.getString("gender"));
        u.setPassword(rs.getString("password"));
        u.setFirstName(rs.getString("first_name"));
        u.setBirthDate(rs.getDate("birth_date").toLocalDate());
        u.setLastName(rs.getString("last_name"));
        u.setUsername(rs.getString("username"));
        u.setProfileUrl(rs.getString("profile_url"));
        u.setRoleID(rs.getInt("role_id"));
        u.setPhoneNumber(rs.getInt("phone_number"));
        return u;
    }
}
