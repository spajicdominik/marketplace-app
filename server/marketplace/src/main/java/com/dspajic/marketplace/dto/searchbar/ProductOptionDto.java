package com.dspajic.marketplace.dto.searchbar;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductOptionDto {
    private Integer id;
    private String name;
    private Integer categoryId;
    private Integer subcategoryId;
    private Integer productTypeId;
}
