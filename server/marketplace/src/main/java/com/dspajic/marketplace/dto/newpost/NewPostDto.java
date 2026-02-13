package com.dspajic.marketplace.dto.newpost;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NewPostDto {
    private String title;
    private String description;
    private BigDecimal price;
    private String currency;
    private Integer user_id;
    private Integer product_id;
    private String address_line1;
    private String address_line2;
    private String postal_code;
    private Integer city_id;
}
