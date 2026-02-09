package com.dspajic.marketplace.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SubcategoryItemsMenuDto {
    private Integer subcategory_item_id;
    private String name;
    private List<ProductMenuDto> products;
}
