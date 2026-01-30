package com.dspajic.marketplace.dto;

import lombok.*;

@Data
@Builder
public class UserDto {
    private String fullName;
    private int id;
}
