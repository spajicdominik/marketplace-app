package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.dto.newpost.CityDto;
import com.dspajic.marketplace.entities.City;
import com.dspajic.marketplace.mappers.CityRowMapper;
import com.dspajic.marketplace.mappers.dto.CityDtoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CityRepositoryImpl implements CityRepository{

    @Autowired
    JdbcTemplate jdbcTemplate;

    CityRowMapper rowMapper = new CityRowMapper();

    CityDtoMapper dtoRowMapper = new CityDtoMapper();

    @Override
    public List<City> getAllCities() {
        String sql = """
                SELECT
                city_id,
                name,
                county_id
                FROM
                city
                """;
        return jdbcTemplate.query(sql, rowMapper);
    }

    @Override
    public City getCityById(Integer id) {
        String sql = """
                SELECT
                city_id,
                name,
                county_id
                FROM
                city
                WHERE
                city_id = ?
                """;
        return jdbcTemplate.queryForObject(sql, rowMapper, id);
    }

    @Override
    public Integer addCity(City entity) {
        String sql = """
                INSERT INTO
                city
                (
                name,
                county_id
                )
                VALUES
                (?, ?)
                """;
        return jdbcTemplate.update(
                sql,
                entity.getName(),
                        entity.getCountyId()
        );
    }

    @Override
    public Integer updateCity(City entity) {
        String sql = """
                UPDATE
                city
                SET
                name = ?,
                county_id = ?
                WHERE
                city_id = ?
                """;
        return jdbcTemplate.update(
                sql,
                entity.getName(),
                        entity.getCountyId(),
                        entity.getId()
        );
    }

    @Override
    public void deleteCity(Integer id) {
        String sql = """
                DELETE FROM
                city
                WHERE
                city_id = ?;
                """;
        jdbcTemplate.update(sql, id);
    }

    @Override
    public List<CityDto> getCityByCountyId(Integer id) {
        String sql = """
                SELECT
                city_id,
                name
                FROM
                city
                WHERE
                county_id = ?;
                """;
        return jdbcTemplate.query(sql, dtoRowMapper, id);
    }
}
