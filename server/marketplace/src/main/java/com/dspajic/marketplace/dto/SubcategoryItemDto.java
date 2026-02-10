package com.dspajic.marketplace.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SubcategoryItemDto {
    private Integer subcategory_item_id;
    private String name;
}
