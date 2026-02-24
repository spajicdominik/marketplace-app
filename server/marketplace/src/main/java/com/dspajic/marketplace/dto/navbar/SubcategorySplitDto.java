package com.dspajic.marketplace.dto.navbar;

import com.dspajic.marketplace.entities.Subcategory;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SubcategorySplitDto {
    private List<Subcategory> left;
    private List<Subcategory> right;
}
