package com.dspajic.marketplace.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.validation.constraints.*;

import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserRegisterDto {

    @NotBlank(message = "Email cannot be empty")
    @Email(message = "Invalid email format")
    private String email;

    @NotBlank(message = "Username cannot be empty")
    @Size(min = 3, max = 30, message = "Username must be between 3 and 30 characters")
    private String username;

    @NotBlank(message = "Password cannot be empty")
    @Pattern(
            regexp = "^(?=.*[A-Z])(?=.*[!@#$%^&*()_+=\\-]).{6,}$",
            message = "Password must be at least 6 characters long, contain one uppercase letter and one symbol"
    )
    private String password;

    @NotBlank(message = "First name cannot be empty")
    private String firstName;

    @NotBlank(message = "Last name cannot be empty")
    private String lastName;

    @NotBlank(message = "Gender cannot be empty")
    private String gender;

    @NotNull(message = "Birth date is required")
    private Date birthDate;


    @NotBlank(message = "Phone number cannot be empty")
    @Pattern(
            regexp = "^[0-9+\\-\\s()]+$",
            message = "Invalid phone number format"
    )
    private String phoneNumber;

    @NotNull(message = "City is required")
    private Integer cityId;
}
