package com.dspajic.marketplace.service;

import com.dspajic.marketplace.entities.Post;
import com.dspajic.marketplace.entities.PostImage;

import java.util.List;

public interface PostImageService {
    List<PostImage> getAllImages();
    PostImage getImageById(int id);
    int addPostImage (PostImage postImage);
    int updatePostImage (PostImage postImage);
    int deletePostImage (int id);
}
