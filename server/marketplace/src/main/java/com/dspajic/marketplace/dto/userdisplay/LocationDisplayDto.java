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
    private Integer cityId;
    private String cityName;

    private Integer countyId;
    private String countyName;

    private Integer countryId;
    private String countryName;
}
