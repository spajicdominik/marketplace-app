package com.dspajic.marketplace.controllers;

import com.dspajic.marketplace.entities.Category;
import com.dspajic.marketplace.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @GetMapping("/category")
    public List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }

    @GetMapping("/category/{id}")
    public Category getCategoryById(@PathVariable("id") Integer id) {
        return categoryService.getCategoryById(id);
    }

    @PostMapping("/category")
    public int addCategory (@RequestBody Category category) {
        return categoryService.addCategory(category);
    }

    @PutMapping("/category")
    public int updateCategory (@RequestBody Category category) {
        return categoryService.updateCategory(category);
    }

    @DeleteMapping("/category/{id}")
    public void deleteCategory (@PathVariable("id") Integer id) {
        categoryService.deleteCategory(id);
    }
}
