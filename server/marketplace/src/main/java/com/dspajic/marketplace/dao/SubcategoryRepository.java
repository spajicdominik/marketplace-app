package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.Subcategory;

import java.util.List;

public interface SubcategoryRepository {
    List<Subcategory> getAllSubcategorys();
    Subcategory getSubcategoryById(Integer id);
    Integer addSubcategory(Subcategory entity);
    Integer updateSubcategory(Subcategory entity);
    void deleteSubcategory(Integer id);
    List<Subcategory> getSubcategoryByCategory(Integer categoryId);
}
