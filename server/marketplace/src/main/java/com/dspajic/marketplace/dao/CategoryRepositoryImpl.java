package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.dto.userdisplay.CategoryDisplayDto;
import com.dspajic.marketplace.entities.Category;
import com.dspajic.marketplace.mappers.CategoryRowMapper;
import com.dspajic.marketplace.mappers.dto.CategoryDisplayDtoRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CategoryRepositoryImpl implements CategoryRepository{

    @Autowired
    JdbcTemplate jdbcTemplate;

    CategoryRowMapper categoryRowMapper = new CategoryRowMapper();

    CategoryDisplayDtoRowMapper displayDtoRowMapper = new CategoryDisplayDtoRowMapper();

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
                category_id,
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

    @Override
    public CategoryDisplayDto getFullCategoriesByProduct(Integer productId) {
        String sql = """
                SELECT
                    c.category_id          AS categoryId,
                    c.name                 AS categoryName,
                    sc.subcategory_id      AS subcategoryId,
                    sc.name                AS subcategoryName,
                    sci.subcategory_item_id AS subcategoryItemId,
                    sci.name               AS subcategoryItemName,
                    b.brand_id             AS brandId,
                    b.name                 AS brandName,
                    p.product_id           AS productId,
                    p.name                 AS productName
                FROM product p
                JOIN subcategory_item sci ON p.subcategory_item_id = sci.subcategory_item_id
                JOIN subcategory sc       ON sci.subcategory_id = sc.subcategory_id
                JOIN category c           ON sc.category_id = c.category_id
                JOIN brand b              ON p.brand_id = b.brand_id
                WHERE p.product_id = ?;
                """;
        return jdbcTemplate.query(sql, displayDtoRowMapper, productId).getFirst();
    }


}
