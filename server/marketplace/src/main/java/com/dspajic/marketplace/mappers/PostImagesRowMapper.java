package com.dspajic.marketplace.mappers;

import com.dspajic.marketplace.entities.PostImages;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PostImagesRowMapper implements RowMapper<PostImages> {
    @Override
    public PostImages mapRow(ResultSet rs, int rowNum) throws SQLException {
        PostImages e = new PostImages();
        e.setId(rs.getInt("post_image_id"));
        e.setUrl(rs.getString("image_url"));
        e.setPostId(rs.getInt("post_id"));
        e.setIsMain(rs.getBoolean("is_main"));
        e.setIsActive(rs.getBoolean("status"));
        return e;
    }
}