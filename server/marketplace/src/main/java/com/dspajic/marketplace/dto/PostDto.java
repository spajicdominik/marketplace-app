package com.dspajic.marketplace.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class PostDto {
    private int id;
    private String title;
    private String description;
    private int price;
    private String currency;
    private int userID;
    private int productID;
    private List<String> img_url;
}
