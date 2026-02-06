package com.dspajic.marketplace.mappers;

import com.dspajic.marketplace.entities.City;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CityRowMapper implements RowMapper<City> {
    @Override
    public City mapRow(ResultSet rs, int rowNum) throws SQLException {
        City e = new City();
        e.setId(rs.getInt("city_id"));
        e.setName(rs.getString("name"));
        e.setCountyId(rs.getInt("county_id"));
        return e;
    }
}