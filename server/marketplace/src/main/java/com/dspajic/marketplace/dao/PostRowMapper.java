package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.Post;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PostRowMapper implements RowMapper<Post> {

    @Override
    public Post mapRow(ResultSet rs, int rowNum) throws SQLException{
        Post p = new Post();
        p.setId(rs.getInt("id"));
        p.setTitle(rs.getString("title"));
        p.setDescription(rs.getString("description"));
        p.setPrice(rs.getInt("price"));
        p.setCurrency(rs.getString("currency"));
        p.setUserID(rs.getInt("user_id"));
        p.setProductID(rs.getInt("product_id"));
        return p;
    }
}
