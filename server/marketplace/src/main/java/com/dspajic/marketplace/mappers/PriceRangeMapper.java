package com.dspajic.marketplace.mappers;

import com.dspajic.marketplace.dto.filter.PriceRangeDto;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PriceRangeMapper implements RowMapper<PriceRangeDto> {
    @Override
    public PriceRangeDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        PriceRangeDto dto = new PriceRangeDto();
        dto.setMin_price(rs.getInt("min_price"));
        dto.setMax_price(rs.getInt("max_price"));
        return dto;
    }
}
