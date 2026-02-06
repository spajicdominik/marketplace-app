package com.dspajic.marketplace.mappers;

import com.dspajic.marketplace.entities.Product;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ProductRowMapper implements RowMapper<Product> {
    @Override
    public Product mapRow(ResultSet rs, int rowNum) throws SQLException {
        Product e = new Product();
        e.setId(rs.getInt("product_id"));
        e.setName(rs.getString("name"));
        e.setSubcategoryItemId(rs.getInt("subcategory_item_id"));
        return e;
    }
}