package com.dspajic.marketplace.controllers;

import com.dspajic.marketplace.entities.Brand;
import com.dspajic.marketplace.service.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class BrandController {
    @Autowired
    BrandService brandService;

    @GetMapping("/brands")
    public List<Brand> getAllBrands() {return brandService.getAllBrands();}

    @GetMapping("/brands/{id}")
    public Brand getBrandById(@PathVariable("id") Integer id) {
        return brandService.getBrandById(id);
    }

    @PostMapping("/brands")
    public Integer addBrand (@RequestBody Brand brand) {
        return brandService.addBrand(brand);
    }

    @PutMapping("/brands")
    public int updateBrand (@RequestBody Brand brand) {
        return brandService.updateBrand(brand);
    }

    @DeleteMapping("/brands/{id}")
    public void deleteBrand (@PathVariable("id") Integer id) {
        brandService.deleteBrand(id);
    }
}
