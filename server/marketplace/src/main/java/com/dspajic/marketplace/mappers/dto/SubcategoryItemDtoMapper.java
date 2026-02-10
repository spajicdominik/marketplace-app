package com.dspajic.marketplace.mappers.dto;

import com.dspajic.marketplace.dto.SubcategoryItemDto;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class SubcategoryItemDtoMapper implements RowMapper<SubcategoryItemDto> {
    @Override
    public SubcategoryItemDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        SubcategoryItemDto subcategoryItemDto = new SubcategoryItemDto();
        subcategoryItemDto.setSubcategory_item_id(rs.getInt("subcategory_item_id"));
        subcategoryItemDto.setName(rs.getString("name"));
        return subcategoryItemDto;
    }
}
