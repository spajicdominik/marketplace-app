package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.dto.newpost.CountyDto;
import com.dspajic.marketplace.entities.County;
import com.dspajic.marketplace.mappers.dto.CountyDtoMapper;
import com.dspajic.marketplace.mappers.CountyRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CountyRepositoryImpl implements CountyRepository{

    @Autowired
    JdbcTemplate jdbcTemplate;

    CountyRowMapper rowMapper = new CountyRowMapper();

    CountyDtoMapper rowDtoMapper = new CountyDtoMapper();

    @Override
    public List<County> getAllCountys() {
        String sql = """
                SELECT
                county_id,
                name,
                country_id
                FROM
                county
                """;
        return jdbcTemplate.query(sql, rowMapper);
    }

    @Override
    public County getCountyById(Integer id) {
        String sql = """
                SELECT
                county_id,
                name,
                country_id
                FROM
                county
                WHERE
                county_id = ?
                """;
        return jdbcTemplate.queryForObject(sql, rowMapper, id);
    }

    @Override
    public Integer addCounty(County entity) {
        String sql = """
                INSERT INTO
                county
                (
                name,
                country_id
                )
                VALUES
                (?, ?)
                """;
        return jdbcTemplate.update(
                sql,
                entity.getName(),
                        entity.getCountryId()
        );
    }

    @Override
    public Integer updateCounty(County entity) {
        String sql = """
                UPDATE
                county
                SET
                name = ?,
                country_id = ?
                WHERE
                county_id = ?
                """;
        return jdbcTemplate.update(
                sql,
                entity.getName(),
                        entity.getCountryId(),
                        entity.getId()
        );
    }

    @Override
    public void deleteCounty(Integer id) {
        String sql = """
                DELETE FROM
                county
                WHERE
                county_id = ?
                """;
        jdbcTemplate.update(sql, id);
    }

    @Override
    public List<CountyDto> getCountyByCountryId(Integer id) {
        String sql = """
                SELECT
                county_id,
                name
                FROM
                county
                WHERE
                country_id = ?
                """;
        return jdbcTemplate.query(sql, rowDtoMapper, id);
    }
}
