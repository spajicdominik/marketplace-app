package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.dto.newpost.SubcategoryItemDto;
import com.dspajic.marketplace.entities.SubcategoryItem;
import com.dspajic.marketplace.mappers.SubcategoryItemRowMapper;
import com.dspajic.marketplace.mappers.dto.SubcategoryItemDtoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class SubcategoryItemRepositoryImpl implements SubcategoryItemRepository{

    @Autowired
    JdbcTemplate jdbcTemplate;

    SubcategoryItemRowMapper rowMapper = new SubcategoryItemRowMapper();

    SubcategoryItemDtoMapper dtoMapper = new SubcategoryItemDtoMapper();

    @Override
    public List<SubcategoryItem> getAllSubcategoryItems() {
        String sql = """
                SELECT
                subcategory_item_id,
                name,
                subcategory_id
                FROM
                subcategory_item
                """;
        return jdbcTemplate.query(sql, rowMapper);
    }

    @Override
    public SubcategoryItem getSubcategoryItemById(Integer id) {
        String sql = """
                SELECT
                subcategory_item_id,
                name,
                subcategory_id
                FROM
                subcategory_item
                WHERE
                subcategory_item_id = ?
                """;
        return jdbcTemplate.queryForObject(sql, rowMapper, id);
    }

    @Override
    public Integer addSubcategoryItem(SubcategoryItem entity) {
        String sql = """
                INSERT INTO
                subcategory_item
                (
                name,
                subcategory_id
                )
                VALUES
                (?, ?)
                """;
        return jdbcTemplate.update(
                sql,
                entity.getName(),
                        entity.getSubcategoryId()
        );
    }

    @Override
    public Integer updateSubcategoryItem(SubcategoryItem entity) {
        String sql = """
                UPDATE
                subcategory_item
                SET
                name = ?,
                subcategory_id = ?
                WHERE
                subcategory_item_id = ?
                """;
        return jdbcTemplate.update(
                sql,
                entity.getName(),
                        entity.getSubcategoryId(),
                        entity.getId()
        );
    }

    @Override
    public void deleteSubcategoryItem(Integer id) {
        String sql = """
                DELETE FROM
                subcategory_item
                WHERE
                subcategory_item_id = ?
                """;
        jdbcTemplate.update(sql, id);
    }

    @Override
    public List<SubcategoryItemDto> getDtoItemsBySubcategoryId(Integer id) {
        String sql = """
                SELECT
                subcategory_item_id,
                name
                FROM
                subcategory_item
                WHERE
                subcategory_id = ?
                """;
        return jdbcTemplate.query(sql, dtoMapper, id);
    }
}
