package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dto.newpost.ProductDto;
import com.dspajic.marketplace.entities.Product;

import java.util.List;

public interface ProductService {
    List<Product> getAllProducts();
    Product getProductById(Integer id);
    Integer addProduct(Product entity);
    Integer updateProduct(Product entity);
    void deleteProduct(Integer id);

    List<ProductDto> getProductsByBrandId(Integer id, Integer subcategory_item_id);

}
