package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.User;
import com.dspajic.marketplace.mappers.UserRowMapper;
import com.dspajic.marketplace.dto.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
public class UserRepositoryImpl implements UserRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;
    @Autowired
    NamedParameterJdbcTemplate namedJdbc;

    UserRowMapper userRowMapper = new UserRowMapper();

    @Override
    public List<User> getAllUsers() {
        String selectAllQuery = "SELECT id, username, password, first_name, last_name, gender, birth_date, phone_number, email, profile_url, role_id FROM users";
        return jdbcTemplate.query(selectAllQuery, userRowMapper);
    }

    @Override
    public User getUserById(int id) {
        String selectByIdQuery = "SELECT id, username, password, first_name, last_name, gender, birth_date, phone_number, email, profile_url, role_id FROM users WHERE id = ? ";
        return jdbcTemplate.queryForObject(selectByIdQuery, userRowMapper, id);
    }

    @Override
    public int addUser(User user) {
        String addUserQuery = "INSERT INTO users (username, password, first_name, last_name, gender, birth_date, phone_number, email, profile_url, role_id) VALUES (?,?,?,?,?,?,?,?,?,?)";
        return jdbcTemplate.update(addUserQuery,
                user.getUsername(),
                user.getPassword(),
                user.getFirstName(),
                user.getLastName(),
                user.getGender(),
                user.getBirthDate(),
                user.getPhoneNumber(),
                user.getEmail(),
                user.getProfileUrl(),
                user.getRoleID());
    }

    @Override
    public int updateUser(User user) {
        String updateUserQuery = """
                UPDATE users
                SET
                id = ?,
                password = ?,
                first_name = ?,
                last_name = ?,
                gender = ?,
                birth_date = ?,
                phone_number = ?,
                email = ?,
                profile_url = ?,
                role_id = ?
                WHERE
                id = ?
                """;
        return jdbcTemplate.update(
                updateUserQuery,
                user.getId(),
                user.getPassword(),
                user.getFirstName(),
                user.getLastName(),
                user.getGender(),
                user.getBirthDate(),
                user.getPhoneNumber(),
                user.getEmail(),
                user.getProfileUrl(),
                user.getRoleID(),
                user.getId()
                );
    }

    @Override
    public int deleteUser(int id) {
        String deleteUserQuery = """
                DELETE FROM
                users
                WHERE
                id = ?
                """;
        return jdbcTemplate.update(deleteUserQuery, id);
    }

    @Override
    public UserDto getUserByIdd(int id) {
        User user = getUserById(id);
        return UserDto.builder()
                .username(user.getUsername())
                .id(user.getId())
                .build();
    }
}
