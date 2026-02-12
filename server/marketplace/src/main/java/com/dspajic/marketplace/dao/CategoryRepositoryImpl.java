package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.Category;
import com.dspajic.marketplace.mappers.CategoryRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CategoryRepositoryImpl implements CategoryRepository{

    @Autowired
    JdbcTemplate jdbcTemplate;

    CategoryRowMapper categoryRowMapper = new CategoryRowMapper();

    @Override
    public List<Category> getAllCategories() {
        String sql = """
                SELECT
                category_id,
                name
                FROM
                category
                """;
        return jdbcTemplate.query(sql, categoryRowMapper);
    }

    @Override
    public Category getCategoryById(Integer id) {
        String sql = """
                SELECT
                category_id
                name
                FROM
                category
                WHERE
                category_id = ?
                """;
        return jdbcTemplate.queryForObject(sql, categoryRowMapper, id);
    }

    @Override
    public Integer addCategory(Category category) {
        String sql = """
                INSERT INTO
                category
                (
                name
                )
                VALUES
                (?)
                """;
        return jdbcTemplate.update(
                sql,
                category.getName()
        );
    }

    @Override
    public Integer updateCategory(Category category) {
        String sql = """
                UPDATE
                category
                SET
                name = ?
                WHERE
                category_id = ?
                """;
        return jdbcTemplate.update(
                sql,
                category.getName(),
                category.getId()
        );
    }

    @Override
    public void deleteCategory(Integer id) {
        String sql = """
                DELETE FROM
                category
                WHERE
                category_id = ?
                """;
        jdbcTemplate.update(sql, id);
    }


}
