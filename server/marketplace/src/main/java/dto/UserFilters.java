package dto;

public record UserFilters(String name,
                          String lastname,
                          String username) {

    public boolean hasName(){
        return name != null && !name.isBlank();
    }
    public boolean hasUsername(){
        return username != null && !username.isBlank();
    }
    public boolean hasLastName(){
        return lastname != null && !lastname.isBlank();
    }
}
