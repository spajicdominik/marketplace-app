package com.dspajic.marketplace.controllers;

import com.dspajic.marketplace.dao.CategoryRepository;
import com.dspajic.marketplace.entities.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CategoryController {

    @Autowired
    CategoryRepository categoryRepository;

    @GetMapping("/category")
    public List<Category> getAllCategories() {
        return categoryRepository.getAllCategories();
    }

    @GetMapping("/category/{id}")
    public Category getCategoryById(@PathVariable("id") Integer id) {
        return categoryRepository.getCategoryById(id);
    }

    @PostMapping("/category")
    public int addCategory (@RequestBody Category category) {
        return categoryRepository.addCategory(category);
    }

    @PutMapping("/category")
    public int updateCategory (@RequestBody Category category) {
        return categoryRepository.updateCategory(category);
    }

    @DeleteMapping("/category/{id}")
    public void deleteCategory (@PathVariable("id") Integer id) {
        categoryRepository.deleteCategory(id);
    }
}
