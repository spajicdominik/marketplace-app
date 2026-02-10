package com.dspajic.marketplace.mappers.dto;

import com.dspajic.marketplace.dto.SubcategoryDto;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class SubcategoryDtoMapper implements RowMapper<SubcategoryDto> {
    @Override
    public SubcategoryDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        SubcategoryDto subcategoryDto = new SubcategoryDto();
        subcategoryDto.setId(rs.getInt("subcategory_id"));
        subcategoryDto.setName(rs.getString("name"));
        return subcategoryDto;
    }
}
