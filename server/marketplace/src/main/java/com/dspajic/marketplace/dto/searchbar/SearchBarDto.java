package com.dspajic.marketplace.dto.searchbar;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SearchBarDto {
    private List<OptionDto> categories;
    private List<SubcategoryOptionDto> subcategories;
    private List<ProductTypeOptionDto> productTypes;
    private List<ProductOptionDto> products;
}
