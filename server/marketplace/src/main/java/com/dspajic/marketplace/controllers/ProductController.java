package com.dspajic.marketplace.controllers;

import com.dspajic.marketplace.dto.newpost.ProductDto;
import com.dspajic.marketplace.entities.Product;
import com.dspajic.marketplace.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    ProductService service;

    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return service.getAllProducts();
    }

    @GetMapping("/products/{id}")
    public Product getProductById(@PathVariable("id") Integer id) {
        return service.getProductById(id);
    }

    @PostMapping("/products")
    public Integer addProduct(@RequestBody Product entity) {
        return service.addProduct(entity);
    }

    @PutMapping("/products")
    public int updateProduct(@RequestBody Product entity) {
        return service.updateProduct(entity);
    }

    @DeleteMapping("/products/{id}")
    public void deleteProduct(@PathVariable("id") Integer id) {
        service.deleteProduct(id);
    }

    @GetMapping("/products/brand/{id}")
    public List<ProductDto> getProductByBrandId(@PathVariable("id") Integer id) {
        return service.getProductsByBrandId(id);
    }
}
