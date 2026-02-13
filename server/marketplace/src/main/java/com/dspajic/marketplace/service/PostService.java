package com.dspajic.marketplace.service;

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

}
