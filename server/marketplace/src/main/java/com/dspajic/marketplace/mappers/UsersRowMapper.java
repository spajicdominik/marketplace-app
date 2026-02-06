package com.dspajic.marketplace.mappers;

import com.dspajic.marketplace.entities.Users;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UsersRowMapper implements RowMapper<Users> {
    @Override
    public Users mapRow(ResultSet rs, int rowNum) throws SQLException {
        Users e = new Users();
        e.setId(rs.getInt("user_id"));
        e.setUsername(rs.getString("username"));
        e.setPassword(rs.getString("password"));
        e.setEnabled(rs.getBoolean("enabled"));
        e.setUserDetailsId(rs.getInt("user_details_id"));
        return e;
    }
}