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
        e.setUrl(rs.getString("url"));
        e.setPostId(rs.getInt("post_id"));
        return e;
    }
}