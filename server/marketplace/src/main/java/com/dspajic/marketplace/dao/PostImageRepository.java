package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.PostImage;

import java.util.List;

public interface PostImageRepository {
    List<PostImage> getAllImages();
    PostImage getImageById(int id);
    int addPostImage (PostImage postImage);
    int updatePostImage (PostImage postImage);
    int deletePostImage (int id);
}
