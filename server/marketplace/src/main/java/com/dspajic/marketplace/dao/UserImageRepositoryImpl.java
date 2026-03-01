package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.UserImage;
import com.dspajic.marketplace.mappers.UserImageRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserImageRepositoryImpl implements UserImageRepository{

    @Autowired
    NamedParameterJdbcTemplate namedJdbc;

    UserImageRowMapper mapper = new UserImageRowMapper();

    @Override
    public List<UserImage> getAllUserImages() {
        String sql = """
                SELECT
                    user_image_id,
                    user_details_id,
                    image_url,
                    status,
                    created_at
                FROM user_image;
                """;
        return namedJdbc.query(sql, mapper);
    }

    @Override
    public UserImage getUserImage(Integer userId) {
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("userId", userId);

        String sql = """
                SELECT ui.*
                                FROM user_image ui
                                JOIN user_details ud ON ui.user_details_id = ud.user_details_id
                                JOIN users u ON u.user_details_id = ud.user_details_id
                                WHERE u.user_id = :userId
                                AND ui.status = true;
                """;

        return namedJdbc.query(sql, params, mapper).getFirst();
    }

    @Override
    public Integer addUserImage(UserImage image, Integer userId) {
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("user_id", userId);
        params.addValue("image_url", image.getImage_url());

        String sql = """
                INSERT INTO user_image (user_details_id, image_url, status)
                SELECT ud.user_details_id, :image_url, TRUE
                FROM user_details ud
                join users u
                on u.user_details_id = ud.user_details_id
                WHERE u.user_id = :user_id;
                """;

        return namedJdbc.update(sql, params);

    }

    @Override
    public Integer editUserImage(UserImage image, Integer userId) {
        String sql = """
                UPDATE user_image ui
                JOIN user_details ud ON ui.user_details_id = ud.user_details_id
                join users u on u.user_details_id = ud.user_details_id
                SET ui.image_url = "edited", ui.status = false
                WHERE u.user_id = 9;
                """;
        return null;
    }

    @Override
    public void deleteUserImage(Integer userId) {
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("userId", userId);

        String sql = """
                UPDATE user_image ui
                JOIN user_details ud ON ud.user_details_id = ui.user_details_id
                JOIN users u ON u.user_details_id = ud.user_details_id
                SET ui.status = false
                WHERE u.user_id = :userId;
                """;

        namedJdbc.update(sql, params);
    }
}
