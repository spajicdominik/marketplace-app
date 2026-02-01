package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dao.PostImageRepository;
import com.dspajic.marketplace.entities.PostImage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostImageServiceImpl implements PostImageService{

    @Autowired
    PostImageRepository postImageRepository;

    @Override
    public List<PostImage> getAllImages() {
        return postImageRepository.getAllImages();
    }

    @Override
    public PostImage getImageById(int id) {
        return postImageRepository.getImageById(id);
    }

    @Override
    public int addPostImage(PostImage postImage) {
        return postImageRepository.addPostImage(postImage);
    }

    @Override
    public int updatePostImage(PostImage postImage) {
        return postImageRepository.updatePostImage(postImage);
    }

    @Override
    public int deletePostImage(int id) {
        return postImageRepository.deletePostImage(id);
    }
}
