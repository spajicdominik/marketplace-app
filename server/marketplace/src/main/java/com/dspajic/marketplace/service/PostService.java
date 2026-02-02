package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dto.PostDto;
import com.dspajic.marketplace.entities.Category;
import com.dspajic.marketplace.entities.Post;
import com.dspajic.marketplace.entities.Product;

import java.util.List;

public interface PostService {

    List<Post> getAllPosts();
    Post getPostById(int id);
    int addPost (Post post);
    int updatePost (Post post);
    int deletePost (int id);
    List<PostDto> getAllPostsWImages();
    List<PostDto> filterPostByCategory(Integer category_id);
    List<PostDto> filterPostByProduct(Integer product_id);
    List<PostDto> filterPostByParams(Integer product_id, Integer category_id, Integer minPrice, Integer maxPrice);
    List<PostDto> filterPostByPrice(List<PostDto> filteredList,Integer minPrice, Integer maxPrice );
}
