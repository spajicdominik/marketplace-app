package com.dspajic.marketplace.mappers.searchbar;

import com.dspajic.marketplace.dto.searchbar.OptionDto;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CategorySearchMapper implements RowMapper<OptionDto> {
    @Override
    public OptionDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        return OptionDto
                .builder()
                .id(rs.getInt("id"))
                .name(rs.getString("name"))
                .build();
    }
}
