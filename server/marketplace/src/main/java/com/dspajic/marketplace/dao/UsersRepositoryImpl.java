package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.Users;
import com.dspajic.marketplace.mappers.UsersRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UsersRepositoryImpl implements UsersRepository{

    @Autowired
    JdbcTemplate jdbcTemplate;

    UsersRowMapper rowMapper = new UsersRowMapper();

    @Override
    public List<Users> getAllUserss() {
        String sql = """
                SELECT
                user_id,
                username,
                password,
                enabled,
                user_details_id
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
                user_details_id
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
                user_details_id
                )
                VALUES
                (?, ?, ?, ?)
                """;
        return jdbcTemplate.update(
                sql,
                entity.getUsername(),
                        entity.getPassword(),
                        entity.getEnabled(),
                        entity.getUserDetailsId()
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
                user_details_id = ?
                WHERE
                user_id = ?
                """;
        return jdbcTemplate.update(
                sql,
                entity.getUsername(),
                        entity.getPassword(),
                        entity.getEnabled(),
                        entity.getUserDetailsId(),
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
                user_details_id
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
}
