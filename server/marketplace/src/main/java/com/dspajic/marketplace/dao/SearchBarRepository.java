package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.dto.searchbar.OptionDto;
import com.dspajic.marketplace.dto.searchbar.ProductOptionDto;
import com.dspajic.marketplace.dto.searchbar.ProductTypeOptionDto;
import com.dspajic.marketplace.dto.searchbar.SubcategoryOptionDto;

import java.util.List;

public interface SearchBarRepository {
    List<OptionDto> getCategories();
    List<SubcategoryOptionDto> getSubcategories();
    List<ProductTypeOptionDto> getProductTypes();
    List<ProductOptionDto> getProducts();
}
