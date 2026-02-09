package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.Subcategory;
import com.dspajic.marketplace.mappers.SubcategoryRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class SubcategoryRepositoryImpl implements SubcategoryRepository{

    @Autowired
    JdbcTemplate jdbcTemplate;

    SubcategoryRowMapper rowMapper = new SubcategoryRowMapper();

    @Override
    public List<Subcategory> getAllSubcategorys() {
        String sql = """
                SELECT
                subcategory_id,
                name,
                category_id
                FROM
                subcategory
                """;
        return jdbcTemplate.query(sql, rowMapper);
    }

    @Override
    public Subcategory getSubcategoryById(Integer id) {
        String sql = """
                SELECT
                subcategory_id,
                name,
                category_id
                FROM
                subcategory
                WHERE
                subcategory_id = ?
                """;
        return jdbcTemplate.queryForObject(sql, rowMapper, id);
    }

    @Override
    public Integer addSubcategory(Subcategory entity) {
        String sql = """
                INSERT INTO
                subcategory
                (
                name,
                category_id
                )
                VALUES
                (?, ?)
                """;
        return jdbcTemplate.update(
                sql,
                entity.getName(),
                        entity.getCategoryId()
        );
    }

    @Override
    public Integer updateSubcategory(Subcategory entity) {
        String sql = """
                UPDATE
                subcategory
                SET
                name = ?,
                category_id = ?
                WHERE
                subcategory_id = ?
                """;
        return jdbcTemplate.update(
                sql,
                entity.getName(),
                        entity.getCategoryId(),
                        entity.getId()
        );
    }

    @Override
    public void deleteSubcategory(Integer id) {
        String sql = """
                DELETE FROM
                subcategory
                WHERE
                subcategory_id = ?
                """;
        jdbcTemplate.update(sql, id);
    }

    @Override
    public List<Subcategory> getSubcategoryByCategory(Integer categoryId) {
        String sql = """
            SELECT
            s.subcategory_id,
            s.name,
            s.category_id
            FROM
            subcategory s
            WHERE
            s.category_id = ?
            """;
        return jdbcTemplate.query(sql, rowMapper, categoryId);
    }


}
