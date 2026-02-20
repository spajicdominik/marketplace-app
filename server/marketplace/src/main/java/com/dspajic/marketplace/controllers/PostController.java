package com.dspajic.marketplace.controllers;

import com.dspajic.marketplace.dto.favourite.FavouriteDto;
import com.dspajic.marketplace.dto.filter.PriceRangeDto;
import com.dspajic.marketplace.dto.newpost.NewPostDto;
import com.dspajic.marketplace.entities.Post;
import com.dspajic.marketplace.entities.PostDetails;
import com.dspajic.marketplace.service.PostDetailsService;
import com.dspajic.marketplace.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PostController {

    @Autowired
    PostService service;

    @Autowired
    PostDetailsService postDetailsService;
    @Autowired
    private PostService postService;

    @GetMapping("/posts")
    public List<Post> getAllPosts() {
        return service.getAllPosts();
    }

    @GetMapping("/posts/{id}")
    public Post getPostById(@PathVariable("id") Integer id) {
        return service.getPostById(id);
    }

    @PostMapping("/posts")
    public Integer addPost(@RequestBody Post entity) {
        return service.addPost(entity);
    }

    @PutMapping("/posts")
    public int updatePost(@RequestBody Post entity) {
        return service.updatePost(entity);
    }

    @DeleteMapping("/posts/{id}")
    public void deletePost(@PathVariable("id") Integer id) {
        service.deletePost(id);
    }

    @GetMapping("/posts/category/{id}")
    public List<Post> getPostsByCategory(@PathVariable("id") Integer id) {
        return service.getPostsByCategory(id);
    }

    @PostMapping("/newPost")
    public Integer addNewPost(@RequestBody NewPostDto newPostDto) { return postDetailsService.addNewPost(newPostDto);}

    @GetMapping("/postDetails/{id}")
    public PostDetails getPostDetailsById(@PathVariable("id") Integer id) {
        return postDetailsService.get(id);
    }

    @PutMapping("/postDetails/{post_id}")
    public Integer editPostDetailsById(@RequestBody NewPostDto editedPost, @PathVariable Integer post_id) { return postDetailsService.editPostDetails(editedPost, post_id); }

    @GetMapping("/posts/recently-added")
    public List<Post> getRecentPosts() {
        return service.getRecentPosts();
    }

    @GetMapping("/posts/user/{user_id}")
    public List<Post> getPostsByUser(@PathVariable Integer user_id) { return service.getPostsByUser(user_id); }

    @GetMapping("/posts-filter")
    public List<Post> getFilteredPosts(
            @RequestParam(required = false) Integer category_id,
            @RequestParam(required = false) Integer subcategory_id,
            @RequestParam(required = false) Integer subcategory_item_id,
            @RequestParam(required = false) Integer product_id,
            @RequestParam(required = false) Integer country_id,
            @RequestParam(required = false) Integer county_id,
            @RequestParam(required = false) Integer city_id,
            @RequestParam(required = false) Integer min_price,
            @RequestParam(required = false) Integer max_price,
            @RequestParam(required = false) Boolean sortPriceDesc,
            @RequestParam(required = false) Boolean sortPriceAsc,
            @RequestParam(required = false) Boolean sortDateDesc,
            @RequestParam(required = false) Boolean sortDateAsc
    ) {
        return service.filterPosts(
                category_id,
                subcategory_id,
                subcategory_item_id,
                product_id,
                country_id,
                county_id,
                city_id,
                min_price,
                max_price,
                sortPriceDesc,
                sortPriceAsc,
                sortDateDesc,
                sortDateAsc
        );
    }

    @GetMapping("/posts-price-range")
    public PriceRangeDto getPriceRange() {
        return service.getPriceRange();
    }

    @PostMapping("/posts/favourites")
    public Integer addFavourite(@RequestBody FavouriteDto favouriteDto) { return service.addFavourite(favouriteDto); }

    @DeleteMapping("/posts/favourites")
    public void deleteFavourite(@RequestBody FavouriteDto favouriteDto) { service.deleteFavourite(favouriteDto); }

    @GetMapping("/posts/is-favourite")
    public Boolean isFavourite(
            @RequestParam(required = true) Integer post_id,
            @RequestParam(required = true) Integer user_id
    )
    {
        FavouriteDto dto = FavouriteDto
                .builder()
                .post_id(post_id)
                .user_id(user_id)
                .build();
        return service.isFavourited(dto);
    }

    @GetMapping("/posts/favourites/{user_id}")
    public List<Post> getAllFavourites(@PathVariable Integer user_id) {
        return service.favouritePosts(user_id);
    }
}
