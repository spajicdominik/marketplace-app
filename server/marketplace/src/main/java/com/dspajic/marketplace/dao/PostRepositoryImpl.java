package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.Post;
import com.dspajic.marketplace.mappers.PostRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PostRepositoryImpl implements PostRepository{

    @Autowired
    JdbcTemplate jdbcTemplate;

    PostRowMapper rowMapper = new PostRowMapper();

    @Autowired
    NamedParameterJdbcTemplate namedJdbc;

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
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("title", entity.getTitle());
        params.addValue("description", entity.getDescription());
        params.addValue("price", entity.getPrice());
        params.addValue("currency", entity.getCurrency());
        params.addValue("user_id", entity.getUserId());
        params.addValue("product_id", entity.getProductId());
        params.addValue("location_id", entity.getLocationId());
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
                location_id
                )
                VALUES
                (:title, :description, :price, :currency, :user_id, :product_id, :location_id)
                """;
        try {
            KeyHolder keyHolder = new GeneratedKeyHolder();
            namedJdbc.update(sql, params, keyHolder, new String[]{"post_id"});
            return keyHolder.getKey() != null ? keyHolder.getKey().intValue() : null;
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
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

    @Override
    public List<Post> getPostsByCategory(Integer id) {
        String sql = """
                SELECT p.*
                FROM post p
                JOIN product pr
                  ON p.product_id = pr.product_id
                JOIN subcategory_item sci
                  ON pr.subcategory_item_id = sci.subcategory_item_id
                JOIN subcategory sc
                  ON sci.subcategory_id = sc.subcategory_id
                JOIN category c
                  ON sc.category_id = c.category_id
                WHERE c.category_id = ?;
                """;
        return jdbcTemplate.query(sql, rowMapper, id);
    }
}
