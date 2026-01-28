package dto;

import lombok.*;

@Data
@Builder
public class UserDto {
    private String username;
    private int id;
}
