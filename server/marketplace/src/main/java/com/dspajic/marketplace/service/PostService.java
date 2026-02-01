package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dto.PostDto;
import com.dspajic.marketplace.entities.Post;

import java.util.List;

public interface PostService {

    List<Post> getAllPosts();
    Post getPostById(int id);
    int addPost (Post post);
    int updatePost (Post post);
    int deletePost (int id);
    List<PostDto> getAllPostsWImages();
}
