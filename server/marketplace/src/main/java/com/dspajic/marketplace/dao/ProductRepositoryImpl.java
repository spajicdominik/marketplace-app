package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.dto.newpost.ProductDto;
import com.dspajic.marketplace.dto.sidebar.ProductMenuDto;
import com.dspajic.marketplace.entities.Product;
import com.dspajic.marketplace.mappers.dto.ProductMenuDtoMapper;
import com.dspajic.marketplace.mappers.ProductRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProductRepositoryImpl implements ProductRepository{

    @Autowired
    JdbcTemplate jdbcTemplate;

    ProductRowMapper rowMapper = new ProductRowMapper();

    ProductMenuDtoMapper rowDtoMapper = new ProductMenuDtoMapper();

    ProductListDtoMapper rowListDtoMapper = new ProductListDtoMapper();

    @Override
    public List<Product> getAllProducts() {
        String sql = """
                SELECT
                product_id,
                name,
                brand_id,
                subcategory_item_id
                FROM
                product
                """;
        return jdbcTemplate.query(sql, rowMapper);
    }

    @Override
    public Product getProductById(Integer id) {
        String sql = """
                SELECT
                product_id,
                name,
                brand_id,
                subcategory_item_id
                FROM
                product
                WHERE
                product_id = ?
                """;
        return jdbcTemplate.queryForObject(sql, rowMapper, id);
    }

    @Override
    public Integer addProduct(Product entity) {
        String sql = """
                INSERT INTO
                product
                (
                name,
                brand_id,
                subcategory_item_id
                )
                VALUES
                (?, ?, ?)
                """;
        return jdbcTemplate.update(
                sql,
                entity.getName(),
                        entity.getBrandId(),
                        entity.getSubcategoryItemId()
        );
    }

    @Override
    public Integer updateProduct(Product entity) {
        String sql = """
                UPDATE
                product
                SET
                name = ?,
                brand_id = ?
                subcategory_item_id = ?
                WHERE
                product_id = ?
                """;
        return jdbcTemplate.update(
                sql,
                entity.getName(),
                entity.getBrandId(),
                        entity.getSubcategoryItemId(),
                        entity.getId()
        );
    }

    @Override
    public void deleteProduct(Integer id) {
        String sql = """
                DELETE FROM
                product
                WHERE
                product_id = ?
                """;
        jdbcTemplate.update(sql, id);
    }

    @Override
    public List<ProductMenuDto> getProductsBySubcategoryId(Integer id) {
        String sql = """
                SELECT
                name
                FROM
                product
                WHERE
                subcategory_item_id = ?
                """;
        return jdbcTemplate.query(sql, rowDtoMapper, id);
    }

    @Override
    public List<ProductDto> getProductsByBrandId(Integer id) {
        String sql = """
                SELECT
                product_id,
                name
                FROM
                product
                WHERE
                brand_id = ?
                """;
        return jdbcTemplate.query(sql, rowListDtoMapper, id);
    }
}
