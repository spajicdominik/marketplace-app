package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dao.SubcategoryRepository;
import com.dspajic.marketplace.dto.SidebarMenuDto;
import com.dspajic.marketplace.entities.Subcategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubcategoryServiceImpl implements SubcategoryService{

    @Autowired
    SubcategoryRepository repository;

    @Override
    public List<Subcategory> getAllSubcategorys() {
        return repository.getAllSubcategorys();
    }

    @Override
    public Subcategory getSubcategoryById(Integer id) {
        return repository.getSubcategoryById(id);
    }

    @Override
    public Integer addSubcategory(Subcategory entity) {
        return repository.addSubcategory(entity);
    }

    @Override
    public Integer updateSubcategory(Subcategory entity) {
        return repository.updateSubcategory(entity);
    }

    @Override
    public void deleteSubcategory(Integer id) {
        repository.deleteSubcategory(id);
    }

}
