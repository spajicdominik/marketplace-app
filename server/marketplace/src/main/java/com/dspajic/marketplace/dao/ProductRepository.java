package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.Product;

import java.util.List;

public interface ProductRepository {
    List<Product> getAllProducts();
    Product getProductById(Integer id);
    Integer addProduct(Product product);
    Integer updateProduct(Product product);
    void deleteProduct(Integer id);
}
