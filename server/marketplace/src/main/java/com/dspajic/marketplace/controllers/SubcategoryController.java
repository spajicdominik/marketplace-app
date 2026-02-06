package com.dspajic.marketplace.controllers;

import com.dspajic.marketplace.entities.Subcategory;
import com.dspajic.marketplace.service.SubcategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class SubcategoryController {

    @Autowired
    SubcategoryService service;

    @GetMapping("/subcategories")
    public List<Subcategory> getAllSubcategorys() {
        return service.getAllSubcategorys();
    }

    @GetMapping("/subcategories/{id}")
    public Subcategory getSubcategoryById(@PathVariable("id") Integer id) {
        return service.getSubcategoryById(id);
    }

    @PostMapping("/subcategories")
    public Integer addSubcategory(@RequestBody Subcategory entity) {
        return service.addSubcategory(entity);
    }

    @PutMapping("/subcategories")
    public int updateSubcategory(@RequestBody Subcategory entity) {
        return service.updateSubcategory(entity);
    }

    @DeleteMapping("/subcategories/{id}")
    public void deleteSubcategory(@PathVariable("id") Integer id) {
        service.deleteSubcategory(id);
    }
}
