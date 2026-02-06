package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.Location;
import com.dspajic.marketplace.mappers.LocationRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class LocationRepositoryImpl implements LocationRepository{

    @Autowired
    JdbcTemplate jdbcTemplate;

    LocationRowMapper rowMapper = new LocationRowMapper();

    @Override
    public List<Location> getAllLocations() {
        String sql = """
                SELECT
                location_id,
                address_line1,
                address_line2,
                postal_code,
                city_id
                FROM
                location
                """;
        return jdbcTemplate.query(sql, rowMapper);
    }

    @Override
    public Location getLocationById(Integer id) {
        String sql = """
                SELECT
                location_id,
                address_line1,
                address_line2,
                postal_code,
                city_id
                FROM
                location
                WHERE
                location_id = ?
                """;
        return jdbcTemplate.queryForObject(sql, rowMapper, id);
    }

    @Override
    public Integer addLocation(Location entity) {
        String sql = """
                INSERT INTO
                location
                (
                address_line1,
                address_line2,
                postal_code,
                city_id
                )
                VALUES
                (?, ? ,? ,?)
                """;
        return jdbcTemplate.update(
                sql,
                entity.getAddressLine1(),
                entity.getAddressLine2(),
                entity.getPostalCode(),
                entity.getCityId()
        );
    }

    @Override
    public Integer updateLocation(Location entity) {
        String sql = """
                UPDATE
                location
                SET
                address_line1 = ?,
                address_line2 = ?,
                postal_code = ?,
                city_id = ?
                WHERE
                location_id = ?
                """;
        return jdbcTemplate.update(
                sql,
                entity.getAddressLine1(),
                        entity.getAddressLine2(),
                        entity.getPostalCode(),
                        entity.getCityId(),
                        entity.getId()
        );
    }

    @Override
    public void deleteLocation(Integer id) {
        String sql = """
                DELETE FROM
                location
                WHERE
                location_id = ?
                """;
        jdbcTemplate.update(sql, id);
    }
}
