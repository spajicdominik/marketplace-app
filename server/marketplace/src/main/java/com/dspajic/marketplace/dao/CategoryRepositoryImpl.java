package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.Category;
import com.dspajic.marketplace.mappers.CategoryRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CategoryRepositoryImpl implements CategoryRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    NamedParameterJdbcTemplate namedJdbc;

    CategoryRowMapper categoryRowMapper = new CategoryRowMapper();

    @Override
    public List<Category> getAllCategories() {
        String selectAllQuery = """
                SELECT
                id,
                name,
                parent_id
                FROM
                category
                """;
        return jdbcTemplate
                .query(selectAllQuery, categoryRowMapper);
    }

    @Override
    public Category getCategoryById(Integer id) {
        String selectByIdQuery = """
                SELECT
                id,
                name,
                parent_id
                FROM
                category
                WHERE
                id = ?
                """;
        return jdbcTemplate
                .queryForObject(
                        selectByIdQuery,
                        categoryRowMapper,
                        id
                );
    }

    @Override
    public Integer addCategory(Category category) {
        String addCategoryQuery = """
                INSERT INTO
                category
                (
                name,
                parent_id
                )
                VALUES
                (?,?)
                """;
        return jdbcTemplate.update(
                addCategoryQuery,
                category.getName(),
                category.getParent_id()
        );
    }

    @Override
    public Integer updateCategory(Category category) {
        String updateCategoryQuery = """
                UPDATE
                category
                SET
                name = ?,
                parent_id = ?
                WHERE
                id = ?
                """;
        return jdbcTemplate.update(
                updateCategoryQuery,
                category.getName(),
                category.getParent_id(),
                category.getId()
        );
    }

    @Override
    public void deleteCategory(Integer id) {
        String deletePostQuery = """
                DELETE FROM
                category
                WHERE
                id = ?
                """;
        jdbcTemplate
                .update(
                        deletePostQuery,
                        id
                );
    }
}
