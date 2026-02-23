package com.dspajic.marketplace.service;

import com.dspajic.marketplace.entities.PostImages;

import java.util.List;

public interface PostImagesService {
    List<PostImages> getAllPostImages();
    PostImages getPostImagesById(Integer id);
    Integer addPostImages(PostImages entity);
    Integer updatePostImages(PostImages entity);
    void deletePostImages(Integer id);
    List<PostImages> getImagesByPost(Integer post_id, Boolean isMain);

    List<PostImages> getAllPostImagesByPost(Integer postId);

    void deleteMainImage(Integer postId, Boolean isMain);
}
