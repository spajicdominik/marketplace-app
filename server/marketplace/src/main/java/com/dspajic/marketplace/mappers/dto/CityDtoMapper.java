package com.dspajic.marketplace.mappers.dto;

import com.dspajic.marketplace.dto.newpost.CityDto;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CityDtoMapper implements RowMapper<CityDto> {
    @Override
    public CityDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        CityDto cityDto = new CityDto();
        cityDto.setId(rs.getInt("city_id"));
        cityDto.setName(rs.getString("name"));
        return cityDto;
    }
}
