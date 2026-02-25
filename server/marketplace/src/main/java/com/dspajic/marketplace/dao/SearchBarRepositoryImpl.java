package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.dto.searchbar.OptionDto;
import com.dspajic.marketplace.dto.searchbar.ProductOptionDto;
import com.dspajic.marketplace.dto.searchbar.ProductTypeOptionDto;
import com.dspajic.marketplace.dto.searchbar.SubcategoryOptionDto;
import com.dspajic.marketplace.mappers.searchbar.CategorySearchMapper;
import com.dspajic.marketplace.mappers.searchbar.ProductSearchMapper;
import com.dspajic.marketplace.mappers.searchbar.ProductTypeSearchMapper;
import com.dspajic.marketplace.mappers.searchbar.SubcategorySearchMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class SearchBarRepositoryImpl implements SearchBarRepository{

    @Autowired
    JdbcTemplate jdbcTemplate;

    CategorySearchMapper categorySearchMapper = new CategorySearchMapper();
    SubcategorySearchMapper subcategorySearchMapper = new SubcategorySearchMapper();
    ProductTypeSearchMapper productTypeSearchMapper = new ProductTypeSearchMapper();
    ProductSearchMapper productSearchMapper = new ProductSearchMapper();

    @Override
    public List<OptionDto> getCategories() {
        String sql = """
                SELECT
                c.category_id as `id`,
                c.name as `name`
                FROM category c;
                """;
        return jdbcTemplate.query(sql, categorySearchMapper);
    }

    @Override
    public List<SubcategoryOptionDto> getSubcategories() {
        String sql = """
                select
                s.subcategory_id as `id`,
                s.name as `name`,
                s.category_id as `categoryId`
                from subcategory s;
                """;
        return jdbcTemplate.query(sql, subcategorySearchMapper);
    }

    @Override
    public List<ProductTypeOptionDto> getProductTypes() {
        String sql = """
                select
                si.subcategory_item_id as `id`,
                si.name as `name`,
                s.subcategory_id as `subcategoryId`,
                c.category_id as `categoryId`
                from subcategory_item si
                join subcategory s on s.subcategory_id = si.subcategory_id\s
                join category c on c.category_id = s.category_id;
                """;
        return jdbcTemplate.query(sql, productTypeSearchMapper);
    }

    @Override
    public List<ProductOptionDto> getProducts() {
        String sql = """
                SELECT
                p.product_id   as `id`,
                p.name as `name`,
                si.subcategory_id as `productTypeId`,
                s.subcategory_id as `subcategoryId`,
                c.category_id as `categoryId`
                FROM product p
                join subcategory_item si on si.subcategory_item_id = p.subcategory_item_id
                join subcategory s on s.subcategory_id = si.subcategory_id\s
                join category c on c.category_id = s.category_id;
                """;
        return jdbcTemplate.query(sql, productSearchMapper);
    }
}
