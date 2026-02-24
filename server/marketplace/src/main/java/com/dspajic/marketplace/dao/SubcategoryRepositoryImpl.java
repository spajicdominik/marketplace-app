package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.dto.newpost.SubcategoryDto;
import com.dspajic.marketplace.entities.Subcategory;
import com.dspajic.marketplace.mappers.dto.SubcategoryDtoMapper;
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
    SubcategoryDtoMapper dtoMapper = new SubcategoryDtoMapper();

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
                sc.subcategory_id,
                sc.name,
                sc.category_id
            FROM subcategory sc
            LEFT JOIN subcategory_item si
                ON si.subcategory_id = sc.subcategory_id
            LEFT JOIN product pr
                ON pr.subcategory_item_id = si.subcategory_item_id
            LEFT JOIN post p
                ON p.product_id = pr.product_id
            WHERE sc.category_id = ?
            GROUP BY sc.subcategory_id, sc.name
            ORDER BY COUNT(p.post_id)  DESC;
            """;
        return jdbcTemplate.query(sql, rowMapper, categoryId);
    }

    @Override
    public List<SubcategoryDto> getSubcategoryByCategoryId(Integer id) {
        String sql = """
                SELECT
                subcategory_id,
                name
                FROM
                subcategory
                WHERE
                category_id = ?
                """;
        return jdbcTemplate.query(sql, dtoMapper, id);
    }


}
