package com.dspajic.marketplace.entities;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SidebarItem {

    private Category category;
    private Product product;
}
