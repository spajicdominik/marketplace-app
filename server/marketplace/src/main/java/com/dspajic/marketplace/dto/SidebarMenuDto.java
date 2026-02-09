package com.dspajic.marketplace.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SidebarMenuDto {
    private Integer subcategory_id;
    private String name;
    private List<SubcategoryItemsMenuDto> subcategory_items;
}
