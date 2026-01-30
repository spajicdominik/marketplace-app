package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.Product;
import com.dspajic.marketplace.mappers.ProductRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProductRepositoryImpl implements ProductRepository{

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    NamedParameterJdbcTemplate namedJdbc;

    ProductRowMapper productRowMapper = new ProductRowMapper();

    @Override
    public List<Product> getAllProducts() {
        String selectAllQuery = """
                SELECT
                id,
                name,
                category_id
                FROM
                product
                """;
        return jdbcTemplate
                .query(selectAllQuery, productRowMapper);
    }

    @Override
    public Product getProductById(Integer id) {
        String selectByIdQuery = """
                SELECT
                id,
                name,
                category_id
                FROM
                product
                WHERE
                id = ?
                """;
        return jdbcTemplate
                .queryForObject(
                        selectByIdQuery,
                        productRowMapper,
                        id
                );
    }

    @Override
    public Integer addProduct(Product product) {
        String addProductQuery = """
                INSERT INTO
                product
                (
                name,
                category_id
                )
                VALUES
                (?,?)
                """;
        return jdbcTemplate
                .update(
                        addProductQuery,
                        product.getName(),
                        product.getCategory_id()
                );
    }

    @Override
    public Integer updateProduct(Product product) {
        String updateProductQuery = """
                UPDATE
                product
                SET
                name = ?,
                category_id = ?
                WHERE
                id = ?
                """;
        return jdbcTemplate
                .update(
                        updateProductQuery,
                        product.getName(),
                        product.getCategory_id()
                );
    }

    @Override
    public void deleteProduct(Integer id) {
        String deletePostQuery = """
                DELETE FROM
                product
                WHERE
                id = ?
                """;
        jdbcTemplate.update(
                deletePostQuery,
                id
        );
    }
}
