package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dao.CategoryRepository;
import com.dspajic.marketplace.entities.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService{
    @Autowired
    CategoryRepository categoryRepository;


    @Override
    public List<Category> getAllCategories() {
        return categoryRepository.getAllCategories();
    }

    @Override
    public Category getCategoryById(Integer id) {
        return categoryRepository.getCategoryById(id);
    }

    @Override
    public Integer addCategory(Category category) {
        return categoryRepository.addCategory(category);
    }

    @Override
    public Integer updateCategory(Category category) {
        return categoryRepository.updateCategory(category);
    }

    @Override
    public void deleteCategory(Integer id) {
        categoryRepository.deleteCategory(id);
    }
}
