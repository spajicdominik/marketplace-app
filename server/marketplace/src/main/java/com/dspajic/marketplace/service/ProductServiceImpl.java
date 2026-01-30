package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dao.ProductRepository;
import com.dspajic.marketplace.entities.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    ProductRepository productRepository;

    @Override
    public List<Product> getAllProducts() {
        return productRepository.getAllProducts();
    }

    @Override
    public Product getProductById(Integer id) {
        return productRepository.getProductById(id);
    }

    @Override
    public Integer addProduct(Product product) {
        return productRepository.addProduct(product);
    }

    @Override
    public Integer updateProduct(Product product) {
        return productRepository.updateProduct(product);
    }

    @Override
    public void deleteProduct(Integer id) {
        productRepository.deleteProduct(id);
    }
}
