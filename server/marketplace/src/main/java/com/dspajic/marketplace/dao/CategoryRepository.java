package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.Brand;
import com.dspajic.marketplace.entities.Category;

import java.util.List;

public interface CategoryRepository {
    List<Category> getAllCategories();
    Category getCategoryById(Integer id);
    Integer addCategory (Category brand);
    Integer updateCategory (Category brand);
    void deleteCategory (Integer id);
}
