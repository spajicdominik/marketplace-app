package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dto.CategoryMenuDto;
import com.dspajic.marketplace.entities.Category;

import java.util.List;

public interface CategoryService {
    List<Category> getAllCategories();
    Category getCategoryById(Integer id);
    Integer addCategory (Category category);
    Integer updateCategory (Category category);
    void deleteCategory (Integer id);

    List<CategoryMenuDto> getCategoryMenu();
}
