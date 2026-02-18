package com.dspajic.marketplace.dto.filter;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PriceRangeDto {
    private Integer min_price;
    private Integer max_price;
}
