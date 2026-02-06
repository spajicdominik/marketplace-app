package com.dspajic.marketplace.mappers;

import com.dspajic.marketplace.entities.Location;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class LocationRowMapper implements RowMapper<Location> {
    @Override
    public Location mapRow(ResultSet rs, int rowNum) throws SQLException {
        Location e = new Location();
        e.setId(rs.getInt("location_id"));
        e.setCityId(rs.getInt("city_id"));
        return e;
    }
}