package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.Post;
import com.dspajic.marketplace.mappers.PostRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PostRepositoryImpl implements PostRepository{

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    NamedParameterJdbcTemplate namedJdbc;

    PostRowMapper postRowMapper = new PostRowMapper();

    @Override
    public List<Post> getAllPosts() {
        String selectAllQuery = """
                SELECT
                id,
                title,
                description,
                price,
                currency,
                user_id,
                product_id
                FROM
                post
                """;
        return jdbcTemplate
                .query(selectAllQuery, postRowMapper);
    }

    @Override
    public Post getPostById(int id) {
        String selectByIdQuery = """
                SELECT
                id,
                title,
                description,
                price,
                currency,
                user_id,
                product_id
                FROM
                post
                WHERE
                id = ?
                """;
        return jdbcTemplate.
                queryForObject(
                        selectByIdQuery,
                        postRowMapper,
                        id
                );
    }

    @Override
    public int addPost(Post post) {
        String addPostQuery = """
                INSERT INTO
                post
                (
                title,
                description
                price,
                currency,
                user_id,
                product_id
                )
                VALUES
                (?,?,?,?,?,?)
                """;
        return jdbcTemplate.update(
                addPostQuery,
                post.getTitle(),
                post.getDescription(),
                post.getPrice(),
                post.getCurrency(),
                post.getUserID(),
                post.getProductID()
        );
    }

    @Override
    public int updatePost(Post post) {
        String updatePostQuery = """
                UPDATE
                post
                SET
                title = ?,
                description = ?,
                price = ?,
                currency = ?,
                user_id = ?,
                product_id = ?
                """;
        return jdbcTemplate.update(
                updatePostQuery,
                post.getTitle(),
                post.getDescription(),
                post.getPrice(),
                post.getCurrency(),
                post.getUserID(),
                post.getProductID()
        );
    }

    @Override
    public int deletePost(int id) {
        String deletePostQuery = """
                DELETE FROM
                post
                WHERE
                id = ?
                """;
        return jdbcTemplate
                .update(
                        deletePostQuery,
                        id
                );
    }
}
