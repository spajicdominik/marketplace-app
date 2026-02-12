package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dto.newpost.SubcategoryDto;
import com.dspajic.marketplace.entities.Subcategory;

import java.util.List;

public interface SubcategoryService {
    List<Subcategory> getAllSubcategorys();
    Subcategory getSubcategoryById(Integer id);
    Integer addSubcategory(Subcategory entity);
    Integer updateSubcategory(Subcategory entity);
    void deleteSubcategory(Integer id);

    List<SubcategoryDto> getSubcategoryByCategoryId(Integer id);
}
