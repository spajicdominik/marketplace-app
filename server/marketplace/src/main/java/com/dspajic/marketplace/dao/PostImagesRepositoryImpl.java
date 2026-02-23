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
                post_id,
                image_url,
                is_main
                FROM
                post_image
                """;
        return jdbcTemplate.query(sql, rowMapper);
    }

    @Override
    public PostImages getPostImagesById(Integer id) {
        String sql = """
                SELECT
                post_image_id,
                post_id,
                image_url,
                is_main
                FROM
                post_image
                WHERE
                post_image_id = ?
                """;
        return jdbcTemplate.queryForObject(sql, rowMapper, id);
    }

    @Override
    public Integer addPostImages(PostImages entity) {
        String sql = """
                INSERT INTO
                post_image
                (
                post_id,
                image_url,
                is_main
                )
                VALUES
                (?, ?, ?)
                """;
        return jdbcTemplate.update(
                sql,
                entity.getPostId(),
                entity.getUrl(),
                entity.getIsMain()
        );
    }

    @Override
    public Integer updatePostImages(PostImages entity) {
        String sql = """
                UPDATE
                post_image
                SET
                post_id = ?,
                image_url = ?,
                is_main = ?
                WHERE
                post_image_id = ?
                """;
        return jdbcTemplate.update(
                sql,
                entity.getPostId(),
                entity.getUrl(),
                entity.getIsMain()
        );
    }

    @Override
    public void deletePostImages(Integer id) {
        String sql = """
                DELETE FROM
                post_image
                WHERE
                post_image_id = ?
                """;
        jdbcTemplate.update(sql, id);
    }

    @Override
    public List<PostImages> getImagesByPost(Integer post_id, Boolean isMain) {
        String sql = """
                SELECT *
                FROM
                post_image t
                WHERE
                t.post_id = ?
                AND
                t.is_main = ?;
                """;
        return jdbcTemplate.query(sql, rowMapper, post_id, isMain);
    }

    @Override
    public List<PostImages> getAllImagesByPost(Integer postId) {
        String sql = """
                SELECT *
                FROM
                post_image t
                where
                t.post_id = ?;
                """;
        return jdbcTemplate.query(sql, rowMapper, postId);
    }

    @Override
    public void deleteMainImage(Integer postId, Boolean isMain) {
        String sql = """
                DELETE
                FROM
                post_image t
                WHERE
                t.post_id = ?
                AND
                t.is_main = ?;
                """;
        jdbcTemplate.update(sql, postId, isMain);
    }


}
