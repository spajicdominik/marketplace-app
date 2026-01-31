package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dto.SidebarDto;
import com.dspajic.marketplace.entities.Category;
import com.dspajic.marketplace.entities.Product;
import com.dspajic.marketplace.entities.SidebarItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.relational.core.sql.In;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    public List<SidebarDto> getSidebarDto() {
        List<SidebarDto> sidebarDto = new ArrayList<>();

        List<Category> categories = categoryService.getAllCategories();
        List<Product> products = productService.getAllProducts();

        Map<Integer, List<Product>> productsByCategoryId = new HashMap<>();
        for (Category c : categories){
            List<Product> initProdList = new ArrayList<>();

            for (Product p : products) {
                if(p.getCategory_id() == c.getId()){
                    initProdList.add(p);
                }
            }
            productsByCategoryId.put(c.getId(), initProdList);
        }

        Map<Integer, SidebarDto> nodesById = new HashMap<>();
        for (Category c : categories) {
            List<SidebarDto> initChildren = new ArrayList<>();

            SidebarDto node = SidebarDto.builder()
                    .id(c.getId())
                    .name(c.getName())
                    .parent_id(c.getParent_id())
                    .products(productsByCategoryId.get(c.getId()))
                    .children(initChildren)
                    .build();
            nodesById.put(c.getId(), node);
        }

        List<SidebarDto> roots = new ArrayList<>();
        for (Category c : categories) {
            SidebarDto node = nodesById.get(c.getId());
            Integer parentId = c.getParent_id();

            if(parentId == 0){
                roots.add(node);
            }
            else {
                SidebarDto parent = nodesById.get(parentId);
                parent.getChildren().add(node);
            }
        }

        return roots;
    }


}
