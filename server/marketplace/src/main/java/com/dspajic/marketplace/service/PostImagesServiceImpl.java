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

    @Autowired
    UploadService uploadService;

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
    public void deleteImage(Integer post_image_id) {
        PostImages image = getPostImagesById(post_image_id);
        uploadService.archiveImage(image.getPostId(), image.getUrl());
        repository.deleteImage(post_image_id);
    }

    @Override
    public void deleteMainImage(Integer postId) {
        String mainImageUrl = getImagesByPost(postId, true).getFirst().getUrl();
        uploadService.archiveImage(postId, mainImageUrl);
        repository.deleteMainImage(postId);
    }

}
