package com.dspajic.marketplace.service;

import com.dspajic.marketplace.entities.Brand;

import java.util.List;

public interface BrandService {
    List<Brand> getAllBrands();
    Brand getBrandById(Integer id);
    Integer addBrand (Brand brand);
    Integer updateBrand (Brand brand);
    void deleteBrand (Integer id);
}
