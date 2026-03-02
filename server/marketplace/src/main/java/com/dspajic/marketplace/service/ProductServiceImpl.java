package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dao.ProductRepository;
import com.dspajic.marketplace.dto.newpost.ProductDto;
import com.dspajic.marketplace.entities.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    ProductRepository repository;

    @Override
    public List<Product> getAllProducts() {
        return repository.getAllProducts();
    }

    @Override
    public Product getProductById(Integer id) {
        return repository.getProductById(id);
    }

    @Override
    public Integer addProduct(Product entity) {
        return repository.addProduct(entity);
    }

    @Override
    public Integer updateProduct(Product entity) {
        return repository.updateProduct(entity);
    }

    @Override
    public void deleteProduct(Integer id) {
        repository.deleteProduct(id);
    }

    @Override
    public List<ProductDto> getProductsByBrandId(Integer id, Integer subcategory_item_id) {
        return repository.getProductsByBrandId(id, subcategory_item_id);
    }

}
