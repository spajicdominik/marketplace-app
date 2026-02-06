package com.dspajic.marketplace.mappers;

import com.dspajic.marketplace.entities.Country;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CountryRowMapper implements RowMapper<Country> {
    @Override
    public Country mapRow(ResultSet rs, int rowNum) throws SQLException {
        Country e = new Country();
        e.setId(rs.getInt("country_id"));
        e.setName(rs.getString("name"));
        return e;
    }
}