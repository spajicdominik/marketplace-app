package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.dto.userdisplay.UserDisplayDto;
import com.dspajic.marketplace.entities.Users;
import com.dspajic.marketplace.mappers.dto.UserDisplayDtoRowMapper;
import com.dspajic.marketplace.mappers.UsersRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UsersRepositoryImpl implements UsersRepository{

    @Autowired
    JdbcTemplate jdbcTemplate;

    UsersRowMapper rowMapper = new UsersRowMapper();

    UserDisplayDtoRowMapper userDisplayDtoRowMapper = new UserDisplayDtoRowMapper();

    BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Override
    public List<Users> getAllUserss() {
        String sql = """
                SELECT
                user_id,
                username,
                password,
                enabled,
                user_details_id,
                created_at
                FROM
                users
                """;
        return jdbcTemplate.query(sql, rowMapper);
    }

    @Override
    public Users getUsersById(Integer id) {
        String sql = """
                SELECT
                user_id,
                username,
                password,
                enabled,
                user_details_id,
                created_at
                FROM
                users
                WHERE
                user_id = ?
                """;
        return jdbcTemplate.queryForObject(sql, rowMapper, id);
    }

    @Override
    public Integer addUsers(Users entity) {
        String sql = """
                INSERT INTO
                users
                (
                username,
                password,
                enabled,
                user_details_id,
                created_at
                )
                VALUES
                (?, ?, ?, ?, ?)
                """;
        String encodedPassword = passwordEncoder.encode(entity.getPassword());
        return jdbcTemplate.update(
                sql,
                entity.getUsername(),
                        encodedPassword,
                        entity.getEnabled(),
                        entity.getUserDetailsId(),
                        entity.getCreatedAt()
        );
    }

    @Override
    public Integer updateUsers(Users entity) {
        String sql = """
                UPDATE
                users
                SET
                username = ?,
                password = ?,
                enabled = ?,
                user_details_id = ?,
                created_at = ?
                WHERE
                user_id = ?
                """;
        String encodedPassword = passwordEncoder.encode(entity.getPassword());
        return jdbcTemplate.update(
                sql,
                entity.getUsername(),
                        encodedPassword,
                        entity.getEnabled(),
                        entity.getUserDetailsId(),
                        entity.getCreatedAt(),
                        entity.getId()
        );
    }

    @Override
    public void deleteUsers(Integer id) {
        String sql = """
                DELETE FROM
                users
                WHERE
                user_id = ?
                """;
        jdbcTemplate.update(sql, id);
    }

    @Override
    public Users findByUsername(String username) {
        String sql = """
                SELECT
                user_id,
                username,
                password,
                enabled,
                user_details_id,
                created_at
                FROM
                users
                WHERE
                username = ?
                """;
        return jdbcTemplate
                .queryForObject(
                        sql,
                        rowMapper,
                        username
                );
    }

    @Override
    public List<String> findAuthoritiesByUsername(String username) {
        String sql = """
                SELECT
                authority
                FROM
                authorities
                WHERE
                username = ?
                """;
        return jdbcTemplate
                .queryForList(sql, String.class, username);
    }

    @Override
    public Users getUserByEmail(String email) {
        String sql = """
                SELECT u.*, ud.*
                FROM users u
                JOIN user_details ud ON u.user_details_id = ud.user_details_id
                WHERE ud.email = ?;
                """;
        return jdbcTemplate.query(sql, rowMapper, email).getFirst();
    }

    @Override
    public Integer enableUser(String email) {
        String sql = """
                UPDATE users u
                JOIN user_details ud ON u.user_details_id = ud.user_details_id
                SET u.enabled = 1
                WHERE ud.email = ?;
                """;
        return jdbcTemplate.update(sql, email);
    }

    @Override
    public UserDisplayDto getUserInfo(Integer userId) {
        String sql = """
                SELECT
                    u.user_id       AS userId,
                    ud.email        AS email,
                    u.username      AS username,
                    ud.first_name   AS firstName,
                    ud.last_name    AS lastName,
                    ud.gender       AS gender,
                    ud.birth_date   AS birthDate,
                    ud.phone_number AS phoneNumber,
                    u.created_at    AS createdAt,
                    ud.city_id      AS cityId
                FROM users u
                JOIN user_details ud
                ON u.user_details_id = ud.user_details_id
                WHERE u.user_id = ?;
                """;
        List<UserDisplayDto> users = jdbcTemplate.query(sql, userDisplayDtoRowMapper, userId);
        if (users.isEmpty()) {
            return null;
        }
        return users.getFirst();
    }

    @Override
    public Integer addUserAuthority(String username) {
        String sql = """
                insert into
                authorities
                (username, authority)
                values
                (?, ?);
                """;
        return jdbcTemplate.update(sql, username, "ROLE_USER");
    }

}
