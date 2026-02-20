package com.dspajic.marketplace.mappers.dto;

import com.dspajic.marketplace.dto.userdisplay.CategoryDisplayDto;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CategoryDisplayDtoRowMapper implements RowMapper<CategoryDisplayDto> {
    @Override
    public CategoryDisplayDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        CategoryDisplayDto dto = new CategoryDisplayDto();
        dto.setCategoryId(rs.getInt("categoryId"));
        dto.setCategoryName(rs.getString("categoryName"));
        dto.setSubcategoryId(rs.getInt("subcategoryId"));
        dto.setSubcategoryName(rs.getString("subcategoryName"));
        dto.setSubcategoryItemId(rs.getInt("subcategoryItemId"));
        dto.setSubcategoryItemName(rs.getString("subcategoryItemName"));
        dto.setBrandId(rs.getInt("brandId"));
        dto.setBrandName(rs.getString("brandName"));
        dto.setProductId(rs.getInt("productId"));
        dto.setProductName(rs.getString("productName"));
        return dto;
    }
}
