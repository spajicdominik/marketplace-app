package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dto.favourite.FavouriteDto;
import com.dspajic.marketplace.dto.filter.PriceRangeDto;
import com.dspajic.marketplace.dto.newpost.NewPostDto;
import com.dspajic.marketplace.entities.Post;

import java.util.List;

public interface PostService {
    List<Post> getAllPosts();
    Post getPostById(Integer id);
    Integer addPost(Post entity);
    Integer updatePost(Post entity);
    void deletePost(Integer id);

    List<Post> getPostsByCategory(Integer id);

    List<Post> getRecentPosts();

    List<Post> getPostsByUser(Integer userId);

    List<Post> getPostsByProduct(Integer productId);

    List<Post> getPostsBySubcategoryItem(Integer subcategoryItemId);

    List<Post> getPostsBySubcategory(Integer subcategoryId);

    List<Post> filterPosts(
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
    );

    PriceRangeDto getPriceRange();

    Integer addFavourite(FavouriteDto favouriteDto);

    void deleteFavourite(FavouriteDto favouriteDto);

    Boolean isFavourited(FavouriteDto favouriteDto);

    List<Post> favouritePosts(Integer user_id);

    void deletePostById(Integer postId);
}
