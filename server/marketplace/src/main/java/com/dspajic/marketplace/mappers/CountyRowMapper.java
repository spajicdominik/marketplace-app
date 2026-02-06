package com.dspajic.marketplace.mappers;

import com.dspajic.marketplace.entities.County;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CountyRowMapper implements RowMapper<County> {
    @Override
    public County mapRow(ResultSet rs, int rowNum) throws SQLException {
        County e = new County();
        e.setId(rs.getInt("county_id"));
        e.setName(rs.getString("name"));
        e.setCountryId(rs.getInt("country_id"));
        return e;
    }
}