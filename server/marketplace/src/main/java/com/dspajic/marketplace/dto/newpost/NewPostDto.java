package com.dspajic.marketplace.dto.newpost;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NewPostDto {

    @NotBlank(message = "Title cannot be empty!")
    private String title;
    private String description;

    @NotNull(message = "Price cannot be null!")
    private BigDecimal price;

    @NotBlank(message = "Currency cannot be empty!")
    private String currency;

    @NotNull(message = "User ID cannot be empty!")
    private Integer user_id;

    @NotNull(message = "Product cannot be empty!")
    private Integer product_id;

    private String address_line1;
    private String address_line2;
    private String postal_code;

    @NotNull(message = "City ID cannot be empty!")
    private Integer city_id;
}
