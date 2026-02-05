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
        return List.of();
    }

    @Override
    public Category getCategoryById(Integer id) {
        return null;
    }

    @Override
    public Integer addCategory(Category brand) {
        return 0;
    }

    @Override
    public Integer updateCategory(Category brand) {
        return 0;
    }

    @Override
    public void deleteCategory(Integer id) {

    }
}
