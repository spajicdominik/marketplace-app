package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.dto.ProductMenuDto;
import com.dspajic.marketplace.entities.Product;

import java.util.List;

public interface ProductRepository {
    List<Product> getAllProducts();
    Product getProductById(Integer id);
    Integer addProduct(Product entity);
    Integer updateProduct(Product entity);
    void deleteProduct(Integer id);
    List<ProductMenuDto> getProductsBySubcategoryId(Integer id);
}
