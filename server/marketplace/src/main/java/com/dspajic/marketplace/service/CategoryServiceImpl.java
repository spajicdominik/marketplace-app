package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dao.CategoryRepository;
import com.dspajic.marketplace.dao.SubcategoryRepository;
import com.dspajic.marketplace.dto.navbar.SubcategorySplitDto;
import com.dspajic.marketplace.dto.sidebar.CategoryMenuDto;
import com.dspajic.marketplace.dto.sidebar.SidebarMenuDto;
import com.dspajic.marketplace.dto.userdisplay.CategoryDisplayDto;
import com.dspajic.marketplace.entities.Category;
import com.dspajic.marketplace.entities.Subcategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService{
    @Autowired
    CategoryRepository categoryRepository;

     @Autowired
    SubcategoryRepository subcategoryRepository;

     @Autowired
     SubcategoryItemService subcategoryItemService;


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

    @Override
    public List<CategoryMenuDto> getCategoryMenu() {
        List<Category> categories = categoryRepository.getAllCategories();
        List<CategoryMenuDto> categoryMenuDtoList = new ArrayList<>();
        for (Category c : categories){
            CategoryMenuDto categoryMenuDto = new CategoryMenuDto();
            categoryMenuDto.setId(c.getId());
            categoryMenuDto.setName(c.getName());
            List<Subcategory> subcategories = subcategoryRepository.getSubcategoryByCategory(c.getId());

            int mid = (int) Math.ceil(subcategories.size() / 2.0);

            List<Subcategory> left = subcategories.subList(0, mid);
            List<Subcategory> right = subcategories.subList(mid, subcategories.size());

            categoryMenuDto.setSubcategories(
                    SubcategorySplitDto
                            .builder()
                            .left(left)
                            .right(right)
                            .build()
            );

            categoryMenuDtoList.add(categoryMenuDto);
        }
        return categoryMenuDtoList;
    }

    @Override
    public List<SidebarMenuDto> getSidebarMenuByCategory(Integer id) {
        List<SidebarMenuDto> sidebarMenuDtos = new ArrayList<>();
        List<Subcategory> allSubcategories = subcategoryRepository.getAllSubcategorys();

        for (Subcategory sc : allSubcategories){
            if (sc.getCategoryId().equals(id)){
                SidebarMenuDto sidebarMenuDto = new SidebarMenuDto();
                sidebarMenuDto.setSubcategory_id(sc.getId());
                sidebarMenuDto.setName(sc.getName());
                sidebarMenuDto.setSubcategory_items(subcategoryItemService.getSubcategoryItemsBySubcategoryId(sc.getId()));
                sidebarMenuDtos.add(sidebarMenuDto);
            }
        }
        return sidebarMenuDtos;
    }

    @Override
    public CategoryDisplayDto getFullCategoriesByProduct(Integer product_id) {
        return categoryRepository.getFullCategoriesByProduct(product_id);
    }
}
