package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dao.ProductRepository;
import com.dspajic.marketplace.dao.SubcategoryItemRepository;
import com.dspajic.marketplace.dto.SubcategoryItemDto;
import com.dspajic.marketplace.dto.SubcategoryItemsMenuDto;
import com.dspajic.marketplace.entities.SubcategoryItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SubcategoryItemServiceImpl implements SubcategoryItemService{

    @Autowired
    SubcategoryItemRepository repository;

    @Autowired
    ProductRepository productRepository;

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

    @Override
    public List<SubcategoryItemsMenuDto> getSubcategoryItemsBySubcategoryId(Integer id) {
        List<SubcategoryItemsMenuDto> returnList = new ArrayList<>();
        List<SubcategoryItem> items = getAllSubcategoryItems();
        for (SubcategoryItem item : items) {
            if (item.getSubcategoryId().equals(id)){
                SubcategoryItemsMenuDto menuItem = new SubcategoryItemsMenuDto();
                menuItem.setSubcategory_item_id(item.getId());
                menuItem.setName(item.getName());
                menuItem.setProducts(productRepository.getProductsBySubcategoryId(item.getId()));
                returnList.add(menuItem);
            }
        }
        return returnList;
    }

    @Override
    public List<SubcategoryItemDto> getItemsBySubcategoryId(Integer id) {
        return repository.getDtoItemsBySubcategoryId(id);
    }
}
