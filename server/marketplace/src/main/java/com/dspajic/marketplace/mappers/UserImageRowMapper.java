package com.dspajic.marketplace.mappers;

import com.dspajic.marketplace.entities.UserImage;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDateTime;

public class UserImageRowMapper implements RowMapper<UserImage> {
    @Override
    public UserImage mapRow(ResultSet rs, int rowNum) throws SQLException {
        return UserImage
                .builder()
                .user_image_id(rs.getInt("user_image_id"))
                .user_details_id(rs.getInt("user_details_id"))
                .image_url(rs.getString("image_url"))
                .status(rs.getBoolean("status"))
                .createdAt(rs.getObject("created_at", LocalDateTime.class))
                .build();
    }
}
