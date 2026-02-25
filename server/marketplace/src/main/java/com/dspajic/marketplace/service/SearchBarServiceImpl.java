package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dao.SearchBarRepository;
import com.dspajic.marketplace.dto.searchbar.SearchBarDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SearchBarServiceImpl implements SearchBarService{
    @Autowired
    SearchBarRepository repository;

    @Override
    public SearchBarDto getDto() {
        return SearchBarDto
                .builder()
                .categories(repository.getCategories())
                .subcategories(repository.getSubcategories())
                .productTypes(repository.getProductTypes())
                .products(repository.getProducts())
                .build();
    }
}
