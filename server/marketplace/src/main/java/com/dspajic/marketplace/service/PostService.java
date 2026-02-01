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
    List<PostDto> filterPostByCategory(Category c);
    List<PostDto> filterPostByProduct(Integer product_id);
}
