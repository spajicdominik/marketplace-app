package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.dto.CategoryMenuDto;
import com.dspajic.marketplace.entities.Brand;
import com.dspajic.marketplace.entities.Category;
import com.dspajic.marketplace.entities.Subcategory;

import java.util.List;

public interface CategoryRepository {
    List<Category> getAllCategories();
    Category getCategoryById(Integer id);
    Integer addCategory (Category category);
    Integer updateCategory (Category category);
    void deleteCategory (Integer id);

}
