package com.dspajic.marketplace.dto.userdisplay;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LocationDisplayDto {
    private String cityName;
    private String countyName;
    private String countryName;
}
