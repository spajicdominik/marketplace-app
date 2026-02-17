package com.dspajic.marketplace.dto.sidebar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductMenuDto {
    private Integer product_id;
    private String name;
}
