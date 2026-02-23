package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dao.PostImagesRepository;
import com.dspajic.marketplace.entities.PostImages;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostImagesServiceImpl implements PostImagesService{

    @Autowired
    PostImagesRepository repository;

    @Override
    public List<PostImages> getAllPostImages() {
        return repository.getAllPostImagess();
    }

    @Override
    public PostImages getPostImagesById(Integer id) {
        return repository.getPostImagesById(id);
    }

    @Override
    public Integer addPostImages(PostImages entity) {
        return repository.addPostImages(entity);
    }

    @Override
    public Integer updatePostImages(PostImages entity) {
        return repository.updatePostImages(entity);
    }

    @Override
    public void deletePostImages(Integer id) {
        repository.deletePostImages(id);
    }

    @Override
    public List<PostImages> getImagesByPost(Integer post_id, Boolean isMain) {
        return repository.getImagesByPost(post_id, isMain);
    }

    @Override
    public List<PostImages> getAllPostImagesByPost(Integer postId) {
        return repository.getAllImagesByPost(postId);
    }

    @Override
    public void deleteMainImage(Integer postId, Boolean isMain) {
        repository.deleteMainImage(postId, isMain);
    }

}
