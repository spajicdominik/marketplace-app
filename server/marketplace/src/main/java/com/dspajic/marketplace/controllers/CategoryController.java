package com.dspajic.marketplace.controllers;

import com.dspajic.marketplace.dto.sidebar.CategoryMenuDto;
import com.dspajic.marketplace.dto.sidebar.SidebarMenuDto;
import com.dspajic.marketplace.entities.Category;
import com.dspajic.marketplace.service.CategoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CategoryController {
    final
    CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping("/category")
    public List<Category> getAllCategories() {return categoryService.getAllCategories();}

    @GetMapping("/category/{id}")
    public Category getCategoryById(@PathVariable Integer id) {
        return categoryService.getCategoryById(id);
    }

    @PostMapping("/category")
    public Integer addCategory (@RequestBody Category category) {
        return categoryService.addCategory(category);
    }

    @PutMapping("/category")
    public int updateCategory (@RequestBody Category category) {
        return categoryService.updateCategory(category);
    }

    @DeleteMapping("/category/{id}")
    public void deleteCategory (@PathVariable Integer id) {
        categoryService.deleteCategory(id);
    }

    @GetMapping("/category/menu-items")
    public List<CategoryMenuDto> getCategoryMenu() {
        return categoryService.getCategoryMenu();
    }

    @GetMapping("/category/sidebar-items/{id}")
    public List<SidebarMenuDto> getSidebarMenuByCategory(@PathVariable Integer id) {
        return categoryService.getSidebarMenuByCategory(id);
    }
}
