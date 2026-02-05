package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dao.BrandRepository;
import com.dspajic.marketplace.entities.Brand;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BrandServiceImpl implements BrandService{

    @Autowired
    BrandRepository brandRepository;

    @Override
    public List<Brand> getAllBrands() {
        return brandRepository.getAllBrands();
    }

    @Override
    public Brand getBrandById(Integer id) {
        return brandRepository.getBrandById(id);
    }

    @Override
    public Integer addBrand(Brand brand) {
        return brandRepository.addBrand(brand);
    }

    @Override
    public Integer updateBrand(Brand brand) {
        return brandRepository.updateBrand(brand);
    }

    @Override
    public void deleteBrand(Integer id) {
        brandRepository.deleteBrand(id);
    }
}
