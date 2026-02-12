package com.dspajic.marketplace.dto.sidebar;

import com.dspajic.marketplace.entities.Subcategory;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryMenuDto {
    private Integer id;
    private String name;
    private List<Subcategory> subcategories;
}
