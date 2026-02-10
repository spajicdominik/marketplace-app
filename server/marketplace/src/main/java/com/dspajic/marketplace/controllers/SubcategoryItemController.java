package com.dspajic.marketplace.controllers;

import com.dspajic.marketplace.dto.SubcategoryItemDto;
import com.dspajic.marketplace.entities.SubcategoryItem;
import com.dspajic.marketplace.service.SubcategoryItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class SubcategoryItemController {

    @Autowired
    SubcategoryItemService service;

    @GetMapping("/subcategoryItems")
    public List<SubcategoryItem> getAllSubcategoryItems() {
        return service.getAllSubcategoryItems();
    }

    @GetMapping("/subcategoryItems/{id}")
    public SubcategoryItem getSubcategoryItemById(@PathVariable("id") Integer id) {
        return service.getSubcategoryItemById(id);
    }

    @PostMapping("/subcategoryItems")
    public Integer addSubcategoryItem(@RequestBody SubcategoryItem entity) {
        return service.addSubcategoryItem(entity);
    }

    @PutMapping("/subcategoryItems")
    public int updateSubcategoryItem(@RequestBody SubcategoryItem entity) {
        return service.updateSubcategoryItem(entity);
    }

    @DeleteMapping("/subcategoryItems/{id}")
    public void deleteSubcategoryItem(@PathVariable("id") Integer id) {
        service.deleteSubcategoryItem(id);
    }

    @GetMapping("/subcategoryItems/subcategory/{id}")
    public List<SubcategoryItemDto> getItemsBySubcategoryId(@PathVariable("id") Integer id) { return service.getItemsBySubcategoryId(id);}
}
