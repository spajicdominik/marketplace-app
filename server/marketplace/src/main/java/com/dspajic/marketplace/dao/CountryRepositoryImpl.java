package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.Country;
import com.dspajic.marketplace.mappers.CountryRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CountryRepositoryImpl implements CountryRepository{

    @Autowired
    JdbcTemplate jdbcTemplate;

    CountryRowMapper rowMapper = new CountryRowMapper();

    @Override
    public List<Country> getAllCountrys() {
        String sql = """
                SELECT
                country_id,
                name
                FROM
                country
                """;
        return jdbcTemplate.query(sql, rowMapper);
    }

    @Override
    public Country getCountryById(Integer id) {
        String sql = """
                SELECT
                country_id,
                name
                FROM
                country
                WHERE
                country_id = ?
                """;
        return jdbcTemplate.queryForObject(sql, rowMapper, id);
    }

    @Override
    public Integer addCountry(Country entity) {
        String sql = """
                INSERT INTO
                country
                (
                name
                )
                VALUES
                (?)
                """;
        return jdbcTemplate.update(
                sql,
                entity.getName()
        );
    }

    @Override
    public Integer updateCountry(Country entity) {
        String sql = """
                UPDATE
                country
                SET
                name = ?
                WHERE
                country_id = ?
                """;
        return jdbcTemplate.update(
                sql,
                entity.getName(),
                        entity.getId()
        );
    }

    @Override
    public void deleteCountry(Integer id) {
        String sql = """
                DELETE FROM
                country
                WHERE
                country_id = ?
                """;
        jdbcTemplate.update(sql, id);
    }
}
