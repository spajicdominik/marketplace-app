package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.Brand;

import java.util.List;

public interface BrandRepository {
    List<Brand> getAllBrands();
    Brand getBrandById(Integer id);
    Integer addBrand (Brand brand);
    Integer updateBrand (Brand brand);
    void deleteBrand (Integer id);
}
