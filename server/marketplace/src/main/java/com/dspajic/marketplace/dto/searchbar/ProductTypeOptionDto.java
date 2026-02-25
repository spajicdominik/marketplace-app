package com.dspajic.marketplace.dto.searchbar;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductTypeOptionDto {
    private Integer id;
    private String name;
    private Integer categoryId;
    private Integer subcategoryId;
}
