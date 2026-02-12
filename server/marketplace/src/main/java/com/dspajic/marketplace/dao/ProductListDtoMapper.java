package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.dto.newpost.ProductDto;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ProductListDtoMapper implements RowMapper<ProductDto> {
    @Override
    public ProductDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        ProductDto productDto = new ProductDto();
        productDto.setId(rs.getInt(("product_id")));
        productDto.setName(rs.getString("name"));
        return productDto;
    }
}
