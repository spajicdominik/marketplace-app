package com.dspajic.marketplace.service;

import com.dspajic.marketplace.entities.Category;
import com.dspajic.marketplace.entities.Product;
import com.dspajic.marketplace.entities.SidebarItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SidebarServiceImpl implements SidebarService {
    @Autowired
    CategoryService categoryService;
    @Autowired
    ProductService productService;

    @Override
    public List<SidebarItem> getAllSidebarItems() {
        List<SidebarItem> sidebarItems = new ArrayList<>();

        List<Category> categories = categoryService.getAllCategories();
        List<Product> products = productService.getAllProducts();

        for (Category c : categories) {
            for (Product p : products) {
                if (c.getId() == p.getCategory_id()) {
                    SidebarItem sidebarItem = SidebarItem.builder().category(c).product(p).build();
                    sidebarItems.add(sidebarItem);
                }
            }
        }
        return sidebarItems;
    }
}
