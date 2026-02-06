package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.PostImages;
import com.dspajic.marketplace.mappers.PostImagesRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PostImagesRepositoryImpl implements PostImagesRepository{

    @Autowired
    JdbcTemplate jdbcTemplate;

    PostImagesRowMapper rowMapper = new PostImagesRowMapper();

    @Override
    public List<PostImages> getAllPostImagess() {
        String sql = """
                SELECT
                post_image_id,
                url,
                post_id
                FROM
                post_images
                """;
        return jdbcTemplate.query(sql, rowMapper);
    }

    @Override
    public PostImages getPostImagesById(Integer id) {
        String sql = """
                SELECT
                post_image_id,
                url,
                post_id
                FROM
                post_images
                WHERE
                post_image_id = ?
                """;
        return jdbcTemplate.queryForObject(sql, rowMapper, id);
    }

    @Override
    public Integer addPostImages(PostImages entity) {
        String sql = """
                INSERT INTO
                post_images
                (
                url,
                post_id
                )
                VALUES
                (?, ?)
                """;
        return jdbcTemplate.update(
                sql,
                entity.getUrl(),
                        entity.getPostId()
        );
    }

    @Override
    public Integer updatePostImages(PostImages entity) {
        String sql = """
                UPDATE
                post_images
                SET
                url = ?,
                post_id = ?
                WHERE
                post_image_id = ?
                """;
        return jdbcTemplate.update(
                sql,
                entity.getUrl(),
                        entity.getPostId(),
                        entity.getId()
        );
    }

    @Override
    public void deletePostImages(Integer id) {
        String sql = """
                DELETE FROM
                post_images
                WHERE
                post_image_id = ?
                """;
        jdbcTemplate.update(sql, id);
    }
}
