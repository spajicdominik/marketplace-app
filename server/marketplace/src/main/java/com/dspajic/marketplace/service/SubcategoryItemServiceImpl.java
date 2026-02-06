package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dao.SubcategoryItemRepository;
import com.dspajic.marketplace.entities.SubcategoryItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubcategoryItemServiceImpl implements SubcategoryItemService{

    @Autowired
    SubcategoryItemRepository repository;

    @Override
    public List<SubcategoryItem> getAllSubcategoryItems() {
        return repository.getAllSubcategoryItems();
    }

    @Override
    public SubcategoryItem getSubcategoryItemById(Integer id) {
        return repository.getSubcategoryItemById(id);
    }

    @Override
    public Integer addSubcategoryItem(SubcategoryItem entity) {
        return repository.addSubcategoryItem(entity);
    }

    @Override
    public Integer updateSubcategoryItem(SubcategoryItem entity) {
        return repository.updateSubcategoryItem(entity);
    }

    @Override
    public void deleteSubcategoryItem(Integer id) {
        repository.deleteSubcategoryItem(id);
    }
}
