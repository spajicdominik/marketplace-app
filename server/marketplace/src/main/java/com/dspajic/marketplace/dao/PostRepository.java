package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.Post;

import java.util.List;

public interface PostRepository {
    List<Post> getAllPosts();
    Post getPostById(int id);
    int addPost (Post post);
    int updatePost (Post post);
    int deletePost (Post post);
}
