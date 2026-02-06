package com.dspajic.marketplace.service;

import com.dspajic.marketplace.entities.PostImages;

import java.util.List;

public interface PostImagesService {
    List<PostImages> getAllPostImagess();
    PostImages getPostImagesById(Integer id);
    Integer addPostImages(PostImages entity);
    Integer updatePostImages(PostImages entity);
    void deletePostImages(Integer id);
}
