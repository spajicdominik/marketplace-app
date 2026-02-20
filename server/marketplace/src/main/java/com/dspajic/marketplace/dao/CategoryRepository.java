package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.dto.userdisplay.CategoryDisplayDto;
import com.dspajic.marketplace.entities.Category;

import java.util.List;

public interface CategoryRepository {
    List<Category> getAllCategories();
    Category getCategoryById(Integer id);
    Integer addCategory (Category category);
    Integer updateCategory (Category category);
    void deleteCategory (Integer id);

    CategoryDisplayDto getFullCategoriesByProduct(Integer productId);
}
