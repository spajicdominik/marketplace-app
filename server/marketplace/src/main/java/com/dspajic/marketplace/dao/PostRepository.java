package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.dto.favourite.FavouriteDto;
import com.dspajic.marketplace.dto.filter.PriceRangeDto;
import com.dspajic.marketplace.entities.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface PostRepository {
    List<Post> getAllPosts();
    Post getPostById(Integer id);
    Integer addPost(Post entity);
    Integer updatePost(Post entity);
    void deletePost(Integer id);

    Page<Post> filterPosts(
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
            Boolean sortDateAsc,
            Pageable pageable
    );

    List<Post> getPostsByCategory(Integer id);
    List<Post> getPostsBySubcategory(Integer id);
    List<Post> getPostsBySubcategoryItem(Integer id);
    List<Post> getPostsByProduct(Integer id);

    List<Post> getRecentPosts();

    List<Post> getPostsByUser(Integer userId);

    PriceRangeDto getPriceRange();

    Integer addFavourite(FavouriteDto favouriteDto);
    void removeFavourite(FavouriteDto favouriteDto);
    Boolean isFavourited(FavouriteDto favouriteDto);
    List<Post> favouritePosts(Integer user_id);

}
