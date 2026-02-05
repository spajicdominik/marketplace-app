package com.dspajic.marketplace.mappers;

import com.dspajic.marketplace.entities.Brand;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class BrandRowMapper implements RowMapper<Brand> {
    @Override
    public Brand mapRow(ResultSet rs, int rowNum) throws SQLException {
        Brand b = new Brand();
        b.setId(rs.getInt("brand_id"));
        b.setName(rs.getString("name"));
        return b;
    }
}
