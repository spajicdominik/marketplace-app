package com.dspajic.marketplace.mappers;

import com.dspajic.marketplace.entities.Post;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDateTime;

public class PostRowMapper implements RowMapper<Post> {
    @Override
    public Post mapRow(ResultSet rs, int rowNum) throws SQLException {
        Post e = new Post();
        e.setId(rs.getInt("post_id"));
        e.setTitle(rs.getString("title"));
        e.setDescription(rs.getString("description"));
        e.setPrice(rs.getBigDecimal("price"));
        e.setCurrency(rs.getString("currency"));
        e.setUserId(rs.getInt("user_id"));
        e.setProductId(rs.getInt("product_id"));
        e.setLocationId(rs.getLong("location_id"));
        e.setCreatedAt(rs.getObject("created_at", LocalDateTime.class));
        e.setUpdatedAt(rs.getObject("updated_at", LocalDateTime.class));
        e.setStatus(rs.getBoolean("status"));
        return e;
    }
}