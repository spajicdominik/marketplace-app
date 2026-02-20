package com.dspajic.marketplace.dto.userdisplay;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CategoryDisplayDto {
    private Integer categoryId;
    private String categoryName;
    private Integer subcategoryId;
    private String subcategoryName;
    private Integer subcategoryItemId;
    private String subcategoryItemName;
    private Integer brandId;
    private String brandName;
    private Integer productId;
    private String productName;
}
