package com.dspajic.marketplace.mappers;

import com.dspajic.marketplace.entities.PostImage;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PostImageRowMapper implements RowMapper<PostImage> {
    @Override
    public PostImage mapRow(ResultSet rs, int rowNum) throws SQLException {
        PostImage pi = new PostImage();
        pi.setId(rs.getInt("id"));
        pi.setUrl(rs.getString("url"));
        pi.setPost_id(rs.getInt("post_id"));
        return pi;
    }
}
