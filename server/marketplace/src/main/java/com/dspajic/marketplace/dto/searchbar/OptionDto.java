package com.dspajic.marketplace.dto.searchbar;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OptionDto {
    private Integer id;
    private String name;
}
