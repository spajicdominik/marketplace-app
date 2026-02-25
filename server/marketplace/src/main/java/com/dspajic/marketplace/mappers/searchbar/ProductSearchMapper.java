package com.dspajic.marketplace.mappers.searchbar;

import com.dspajic.marketplace.dto.searchbar.ProductOptionDto;
import com.dspajic.marketplace.dto.searchbar.ProductTypeOptionDto;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ProductSearchMapper implements RowMapper<ProductOptionDto> {
    @Override
    public ProductOptionDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        return ProductOptionDto
                .builder()
                .id(rs.getInt("id"))
                .name(rs.getString("name"))
                .categoryId(rs.getInt("categoryId"))
                .subcategoryId(rs.getInt("subcategoryId"))
                .productTypeId(rs.getInt("productTypeId"))
                .build();
    }
}
