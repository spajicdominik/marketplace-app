package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.Post;
import com.dspajic.marketplace.mappers.PostRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PostRepositoryImpl implements PostRepository{

    @Autowired
    JdbcTemplate jdbcTemplate;

    PostRowMapper rowMapper = new PostRowMapper();

    @Override
    public List<Post> getAllPosts() {
        String sql = """
                SELECT
                post_id,
                title,
                description,
                price,
                currency,
                user_id,
                product_id,
                location_id,
                created_at,
                updated_at
                FROM
                post
                """;
        return jdbcTemplate.query(sql, rowMapper);
    }

    @Override
    public Post getPostById(Integer id) {
        String sql = """
                SELECT
                post_id,
                title,
                description,
                price,
                currency,
                user_id,
                product_id,
                location_id,
                created_at,
                updated_at
                FROM
                post
                WHERE
                post_id = ?
                """;
        return jdbcTemplate.queryForObject(sql, rowMapper, id);
    }

    @Override
    public Integer addPost(Post entity) {
        String sql = """
                INSERT INTO
                post
                (
                title,
                description,
                price,
                currency,
                user_id,
                product_id,
                location_id,
                created_at,
                updated_at
                )
                VALUES
                (?, ?, ?, ?, ?, ?, ?, ?, ?)
                """;
        return jdbcTemplate.update(
                sql,
                entity.getTitle(),
                        entity.getDescription(),
                        entity.getPrice(),
                        entity.getCurrency(),
                        entity.getUserId(),
                        entity.getProductId(),
                        entity.getLocationId(),
                entity.getCreatedAt(),
                entity.getUpdatedAt()
        );
    }

    @Override
    public Integer updatePost(Post entity) {
        String sql = """
                UPDATE
                post
                SET
                title = ?,
                description = ?,
                price = ?,
                currency = ?,
                user_id = ?,
                product_id = ?,
                location_id = ?,
                created_at = ?,
                updated_at = ?
                WHERE
                post_id = ?
                """;
        return jdbcTemplate.update(
                sql,
                entity.getTitle(),
                        entity.getDescription(),
                        entity.getPrice(),
                        entity.getCurrency(),
                        entity.getUserId(),
                        entity.getProductId(),
                        entity.getLocationId(),
                        entity.getCreatedAt(),
                        entity.getUpdatedAt(),
                        entity.getId()
        );
    }

    @Override
    public void deletePost(Integer id) {
        String sql = """
                DELETE FROM
                post
                WHERE
                post_id = ?
                """;
        jdbcTemplate.update(sql, id);
    }
}
