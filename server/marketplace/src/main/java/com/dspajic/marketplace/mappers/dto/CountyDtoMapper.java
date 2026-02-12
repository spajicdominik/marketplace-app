package com.dspajic.marketplace.mappers.dto;

import com.dspajic.marketplace.dto.newpost.CountyDto;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CountyDtoMapper implements RowMapper<CountyDto> {
    @Override
    public CountyDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        CountyDto countyDto = new CountyDto();
        countyDto.setId(rs.getInt("county_id"));
        countyDto.setName(rs.getString("name"));
        return countyDto;
    }
}
