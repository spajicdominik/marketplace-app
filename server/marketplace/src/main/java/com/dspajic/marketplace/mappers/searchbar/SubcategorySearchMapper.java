package com.dspajic.marketplace.mappers.searchbar;

import com.dspajic.marketplace.dto.searchbar.SubcategoryOptionDto;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class SubcategorySearchMapper implements RowMapper<SubcategoryOptionDto> {
    @Override
    public SubcategoryOptionDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        return SubcategoryOptionDto
                .builder()
                .id(rs.getInt("id"))
                .name(rs.getString("name"))
                .categoryId(rs.getInt("categoryId"))
                .build();
    }
}
