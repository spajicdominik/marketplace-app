package com.dspajic.marketplace.mappers.dto;

import com.dspajic.marketplace.dto.userdisplay.LocationDisplayDto;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class LocationDisplayDtoRowMapper implements RowMapper<LocationDisplayDto> {

    @Override
    public LocationDisplayDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        LocationDisplayDto dto = new LocationDisplayDto();

        dto.setCityName(rs.getString("cityName"));
        dto.setCountyName(rs.getString("countyName"));
        dto.setCountryName(rs.getString("countryName"));

        return dto;
    }
}