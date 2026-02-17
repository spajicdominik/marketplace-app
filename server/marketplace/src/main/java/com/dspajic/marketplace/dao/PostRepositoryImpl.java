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
    public List<Post> filterPosts(
            Integer category_id,
            Integer subcategory_id,
            Integer subcategory_item_id,
            Integer product_id,
            Integer country_id,
            Integer county_id,
            Integer city_id,
            Integer min_price,
            Integer max_price,
            Boolean sortPriceDesc,
            Boolean sortPriceAsc,
            Boolean sortDateDesc,
            Boolean sortDateAsc
    )
    {
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("category_id", category_id);
        String sql = """
                SELECT
                p.post_id,
                p.title,
                p.description,
                p.price,
                p.currency,
                p.user_id,
                p.product_id,
                p.location_id,
                p.created_at,
                p.updated_at
                    FROM post p
                    JOIN product pr ON pr.product_id = p.product_id
                    JOIN subcategory_item si ON si.subcategory_item_id = pr.subcategory_item_id
                    JOIN subcategory s ON s.subcategory_id = si.subcategory_id
                    JOIN category c ON c.category_id = s.category_id
                    JOIN location l ON l.location_id = p.location_id
                    JOIN city ci ON ci.city_id = l.city_id
                    JOIN county co ON co.county_id = ci.county_id
                    JOIN country cr ON cr.country_id = co.country_id
                
                WHERE c.category_id = :category_id
                """;

        if (subcategory_id != null) {
            sql += " AND s.subcategory_id = :subcategory_id";
            params.addValue("subcategory_id", subcategory_id);
        }
        if(subcategory_item_id != null) {
            sql += " AND si.subcategory_item_id = :subcategory_item_id";
            params.addValue("subcategory_item_id", subcategory_item_id);
        }
        if (product_id != null) {
            sql += " AND pr.product_id = :product_id";
            params.addValue("product_id", product_id);
        }
        if (city_id != null) {
            sql+=" AND ci.city_id = :city_id";
            params.addValue("city_id", city_id);
        }
        if (county_id != null) {
            sql += " AND co.county_id = :county_id";
            params.addValue("county_id", county_id);
        }
        if (country_id != null) {
            sql+= " AND cr.country_id = :country_id";
            params.addValue("country_id", country_id);
        }
        if (min_price != null) {
            sql += " AND p.price >= :min_price";
            params.addValue("min_price", min_price);
        }
        if (max_price != null) {
            sql+= " AND p.price <= :max_price";
            params.addValue("max_price", max_price);
        }

        String orderBy = "";

        if (Boolean.TRUE.equals(sortPriceAsc)) {
            orderBy = " ORDER BY p.price ASC";
        }

        if (Boolean.TRUE.equals(sortPriceDesc)) {
            orderBy = " ORDER BY p.price DESC";
        }

        if (Boolean.TRUE.equals(sortDateAsc)) {
            orderBy = " ORDER BY p.created_at ASC";
        }

        if (Boolean.TRUE.equals(sortDateDesc)) {
            orderBy = " ORDER BY p.created_at DESC";
        }

        sql += orderBy;

        return namedJdbc.query(sql, params, rowMapper);
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

    @Override
    public List<Post> getPostsBySubcategory(Integer id) {
        String sql = """
                SELECT p.*
                                FROM post p
                                JOIN product pr
                                  ON p.product_id = pr.product_id
                                JOIN subcategory_item sci
                                  ON pr.subcategory_item_id = sci.subcategory_item_id
                                JOIN subcategory sc
                                  ON sci.subcategory_id = sc.subcategory_id
                                WHERE sc.subcategory_id  = ?;
                """;
        return jdbcTemplate.query(sql, rowMapper, id);

    }

    @Override
    public List<Post> getPostsBySubcategoryItem(Integer id) {
        String sql = """
                SELECT p.*
                                FROM post p
                                JOIN product pr
                                  ON p.product_id  = pr.product_id\s
                                JOIN subcategory_item sci
                                  ON pr.subcategory_item_id = sci.subcategory_item_id
                                where sci.subcategory_item_id = ?;
                """;
        return jdbcTemplate.query(sql, rowMapper, id);

    }

    @Override
    public List<Post> getPostsByProduct(Integer id) {
        return jdbcTemplate.query(
                "SELECT * FROM post WHERE product_id = ?",
                rowMapper,
                id
        );

    }

    @Override
    public List<Post> getRecentPosts() {
        String sql = """
                SELECT
                p.*
                FROM
                post p
                ORDER BY
                p.created_at DESC, p.post_id DESC
                LIMIT 4;
                """;
        return jdbcTemplate.query(sql, rowMapper);
    }

    @Override
    public List<Post> getPostsByUser(Integer userId) {
        String sql = """
                SELECT
                    p.post_id,
                    p.title,
                    p.description,
                    p.price,
                    p.currency,
                    p.user_id,
                    p.product_id,
                    p.location_id,
                    p.created_at,
                    p.updated_at
                FROM post p
                WHERE p.user_id = ?
                ORDER BY p.created_at DESC;
                """;
        return jdbcTemplate.query(sql, rowMapper, userId);
    }
}
