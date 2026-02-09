package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.dto.SubcategoryItemsMenuDto;
import com.dspajic.marketplace.entities.SubcategoryItem;

import java.util.List;

public interface SubcategoryItemRepository {
    List<SubcategoryItem> getAllSubcategoryItems();
    SubcategoryItem getSubcategoryItemById(Integer id);
    Integer addSubcategoryItem(SubcategoryItem entity);
    Integer updateSubcategoryItem(SubcategoryItem entity);
    void deleteSubcategoryItem(Integer id);

}
