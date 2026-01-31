package com.dspajic.marketplace.dto;

import com.dspajic.marketplace.entities.Product;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class SidebarDto {
    private Integer id;
    private String name;
    private Integer parent_id;
    private List<Product> products;
    private List<SidebarDto> children;
}
