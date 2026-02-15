package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.PostImages;

import java.util.List;

public interface PostImagesRepository {
    List<PostImages> getAllPostImagess();
    PostImages getPostImagesById(Integer id);
    Integer addPostImages(PostImages entity);
    Integer updatePostImages(PostImages entity);
    void deletePostImages(Integer id);

    List<PostImages> getImagesByPost(Integer post_id, Boolean isMain);
}
