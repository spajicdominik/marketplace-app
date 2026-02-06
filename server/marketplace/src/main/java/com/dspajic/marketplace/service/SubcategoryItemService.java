package com.dspajic.marketplace.service;

import com.dspajic.marketplace.entities.SubcategoryItem;

import java.util.List;

public interface SubcategoryItemService {
    List<SubcategoryItem> getAllSubcategoryItems();
    SubcategoryItem getSubcategoryItemById(Integer id);
    Integer addSubcategoryItem(SubcategoryItem entity);
    Integer updateSubcategoryItem(SubcategoryItem entity);
    void deleteSubcategoryItem(Integer id);
}
