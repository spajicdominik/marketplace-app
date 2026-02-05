package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.Brand;
import com.dspajic.marketplace.mappers.BrandRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BrandRepositoryImpl implements BrandRepository{

    @Autowired
    JdbcTemplate jdbcTemplate;

    BrandRowMapper brandRowMapper = new BrandRowMapper();

    @Override
    public List<Brand> getAllBrands() {
        String sql = """
                SELECT
                brand_id,
                name
                FROM
                brand
                """;
        return jdbcTemplate
                .query(sql, brandRowMapper);
    }

    @Override
    public Brand getBrandById(Integer id) {
        String sql = """
                SELECT
                brand_id,
                name
                FROM
                brand
                WHERE
                brand_id = ?
                """;
        return jdbcTemplate
                .queryForObject(
                        sql,
                        brandRowMapper,
                        id
                );
    }

    @Override
    public Integer addBrand(Brand brand) {
        String sql = """
                INSERT INTO
                brand
                (
                name
                )
                VALUES
                (?)
                """;
        return jdbcTemplate
                .update(
                        sql,
                        brand.getName()
                );
    }

    @Override
    public Integer updateBrand(Brand brand) {
        String sql = """
                UPDATE
                brand
                SET
                name = ?
                WHERE
                brand_id = ?
                """;
        return jdbcTemplate
                .update(
                        sql,
                        brand.getName(),
                        brand.getId()
                );
    }

    @Override
    public void deleteBrand(Integer id) {
        String sql = """
                DELETE FROM
                brand
                WHERE
                brand_id = ?
                """;
        jdbcTemplate
                .update(
                        sql,
                        id
                );
    }
}
