package com.dspajic.marketplace.mappers;

import com.dspajic.marketplace.entities.Subcategory;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class SubcategoryRowMapper implements RowMapper<Subcategory> {
    @Override
    public Subcategory mapRow(ResultSet rs, int rowNum) throws SQLException {
        Subcategory e = new Subcategory();
        e.setId(rs.getInt("subcategory_id"));
        e.setName(rs.getString("name"));
        e.setCategoryId(rs.getInt("category_id"));
        return e;
    }
}