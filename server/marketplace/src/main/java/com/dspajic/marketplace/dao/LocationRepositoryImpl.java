package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.dto.userdisplay.LocationDisplayDto;
import com.dspajic.marketplace.entities.Location;
import com.dspajic.marketplace.mappers.LocationRowMapper;
import com.dspajic.marketplace.mappers.dto.LocationDisplayDtoRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class LocationRepositoryImpl implements LocationRepository{

    @Autowired
    JdbcTemplate jdbcTemplate;

    LocationRowMapper rowMapper = new LocationRowMapper();

    @Autowired
    NamedParameterJdbcTemplate namedJdbc;

    LocationDisplayDtoRowMapper locationDisplayDtoRowMapper = new LocationDisplayDtoRowMapper();

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
    public Location getLocationById(Long id) {
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
    public Long addLocation(Location entity) {
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("addressline1", entity.getAddressLine1());
        params.addValue("addressline2", entity.getAddressLine2());
        params.addValue("postalcode", entity.getPostalCode());
        params.addValue("cityid", entity.getCityId());
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
                (:addressline1, :addressline2 ,:postalcode ,:cityid)
                """;
        try {
            KeyHolder keyHolder = new GeneratedKeyHolder();
            namedJdbc.update(sql,params, keyHolder, new String[]{"location_id"});
            return keyHolder.getKey() != null ? keyHolder.getKey().longValue() : null;

        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }

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

    @Override
    public LocationDisplayDto getLocationByCity(Integer cityId) {
        String sql = """
                SELECT
                    c.city_id as cityId,
                    c.name  AS cityName,
                    co.county_id as countyId,
                    co.name AS countyName,
                    cn.country_id AS countryId,
                    cn.name AS countryName
                FROM city c
                JOIN county co   ON c.county_id = co.county_id
                JOIN country cn  ON co.country_id = cn.country_id
                WHERE c.city_id = ?;
                """;
        List<LocationDisplayDto> location = jdbcTemplate.query(sql, locationDisplayDtoRowMapper, cityId);
        return location.getFirst();
    }
}
