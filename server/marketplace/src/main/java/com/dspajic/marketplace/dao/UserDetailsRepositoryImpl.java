package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.UserDetails;
import com.dspajic.marketplace.mappers.UserDetailsRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserDetailsRepositoryImpl implements UserDetailsRepository{

    @Autowired
    JdbcTemplate jdbcTemplate;

    UserDetailsRowMapper rowMapper = new UserDetailsRowMapper();

    @Override
    public List<UserDetails> getAllUserDetailss() {
        String sql = """
                SELECT
                user_details_id,
                first_name,
                last_name,
                gender,
                birth_date,
                phone_number,
                email,
                city_id
                FROM
                user_details
                """;
        return jdbcTemplate.query(sql, rowMapper);
    }

    @Override
    public UserDetails getUserDetailsById(Integer id) {
        String sql = """
                SELECT
                user_details_id,
                first_name,
                last_name,
                gender,
                birth_date,
                phone_number,
                email,
                city_id
                FROM
                user_details
                WHERE
                user_details_id = ?
                """;
        return jdbcTemplate.queryForObject(sql, rowMapper, id);
    }

    @Override
    public Integer addUserDetails(UserDetails entity) {
        String sql = """
                INSERT INTO
                user_details
                (
                first_name,
                last_name,
                gender,
                birth_date,
                phone_number,
                email,
                city_id
                )
                VALUES
                (?, ?, ?, ?, ?, ?,?)
                """;
        return jdbcTemplate.update(
                sql,
                entity.getFirstName(),
                        entity.getLastName(),
                        entity.getGender(),
                        entity.getBirthDate(),
                        entity.getPhoneNumber(),
                        entity.getEmail(),
                        entity.getCityId()
        );
    }

    @Override
    public Integer updateUserDetails(UserDetails entity) {
        String sql = """
                UPDATE
                user_details
                SET
                first_name = ?,
                last_name = ?,
                gender = ?,
                birth_date = ?,
                phone_number = ?,
                email = ?,
                city_id = ?
                WHERE
                user_details_id = ?
                """;
        return jdbcTemplate.update(
                sql,
                entity.getFirstName(),
                        entity.getLastName(),
                        entity.getGender(),
                        entity.getBirthDate(),
                        entity.getPhoneNumber(),
                        entity.getEmail(),
                        entity.getId(),
                        entity.getCityId()
        );
    }

    @Override
    public void deleteUserDetails(Integer id) {
        String sql = """
                DELETE FROM
                user_details
                WHERE
                user_details_id = ?
                """;
        jdbcTemplate.update(sql, id);
    }

    @Override
    public UserDetails getUserDetailsByEmail(String email) {
        String sql = """
                SELECT
                user_details_id,
                first_name,
                last_name,
                gender,
                birth_date,
                phone_number,
                email,
                city_id
                FROM
                user_details
                WHERE
                email = ?
                """;
        return jdbcTemplate.queryForObject(sql, rowMapper, email);
    }
}
