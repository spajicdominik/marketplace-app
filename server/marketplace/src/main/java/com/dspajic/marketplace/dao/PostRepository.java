package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.Post;

import java.util.List;

public interface PostRepository {
    List<Post> getAllPosts();
    Post getPostById(Integer id);
    Integer addPost(Post entity);
    Integer updatePost(Post entity);
    void deletePost(Integer id);

    List<Post> getPostsByCategory(Integer id);

    List<Post> getRecentPosts();
}
