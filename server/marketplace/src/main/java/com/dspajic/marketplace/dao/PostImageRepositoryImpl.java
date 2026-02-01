package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.PostImage;
import com.dspajic.marketplace.mappers.PostImageRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PostImageRepositoryImpl implements PostImageRepository{

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    NamedParameterJdbcTemplate namedJdbc;

    PostImageRowMapper postImageRowMapper = new PostImageRowMapper();

    @Override
    public List<PostImage> getAllImages() {
        String selectAllQuery = """
                SELECT
                id,
                url,
                post_id
                FROM
                post_images
                """;
        return jdbcTemplate
                .query(
                        selectAllQuery,
                        postImageRowMapper
                );
    }

    @Override
    public PostImage getImageById(int id) {
        String selectByIdQuery = """
                SELECT
                id,
                url,
                post_id
                FROM
                post_images
                WHERE
                id = ?
                """;
        return jdbcTemplate
                .queryForObject(
                        selectByIdQuery,
                        postImageRowMapper,
                        id
                );
    }

    @Override
    public int addPostImage(PostImage postImage) {
        String addPostImageQuery = """
                INSERT INTO
                post_images
                (
                url,
                post_id
                )
                VALUES
                (?, ?)
                """;
        return jdbcTemplate
                .update(
                        addPostImageQuery,
                        postImage.getUrl(),
                        postImage.getPost_id()
                );
    }

    @Override
    public int updatePostImage(PostImage postImage) {

        String updatePostImageQuery = """
                UPDATE
                post_images
                SET
                url = ?,
                post_id = ?
                """;
        return jdbcTemplate.update(
                updatePostImageQuery,
                postImage.getUrl(),
                postImage.getPost_id(),
                postImage.getId()
        );
    }

    @Override
    public int deletePostImage(int id) {
        String deletePostImageQuery = """
                DELETE FROM
                post_images
                WHERE
                id = ?
                """;
        return jdbcTemplate
                .update(
                        deletePostImageQuery,
                        id
                );
    }
}
