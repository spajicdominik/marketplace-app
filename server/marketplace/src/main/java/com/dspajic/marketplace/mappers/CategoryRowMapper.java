package com.dspajic.marketplace.mappers;

import com.dspajic.marketplace.entities.Category;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CategoryRowMapper implements RowMapper<Category> {
    @Override
    public Category mapRow(ResultSet rs, int rowNum) throws SQLException {
        Category c = new Category();
        c.setId(rs.getInt("category_id"));
        c.setName(rs.getString("name"));
        return c;
    }
}
