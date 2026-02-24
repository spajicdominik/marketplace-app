package com.dspajic.marketplace.controllers;

import com.dspajic.marketplace.entities.PostImages;
import com.dspajic.marketplace.service.PostImagesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PostImagesController {

    @Autowired
    PostImagesService service;

    @GetMapping("/postImages")
    public List<PostImages> getAllPostImagess() {
        return service.getAllPostImages();
    }

    @GetMapping("/postImages/{id}")
    public PostImages getPostImagesById(@PathVariable("id") Integer id) {
        return service.getPostImagesById(id);
    }

    @PostMapping("/postImages")
    public Integer addPostImages(@RequestBody PostImages entity) {
        return service.addPostImages(entity);
    }

    @PutMapping("/postImages")
    public int updatePostImages(@RequestBody PostImages entity) {
        return service.updatePostImages(entity);
    }

    @DeleteMapping("/postImages/{id}")
    public void deletePostImages(@PathVariable("id") Integer id) {
        service.deletePostImages(id);
    }

    @GetMapping("/postImages/post-main/{post_id}")
    public PostImages getMainImage(@PathVariable Integer post_id) {
        return service.getImagesByPost(post_id, true).getFirst();
    }

    @GetMapping("/postImages/post/{post_id}")
    public List<PostImages> getPostImagesByPost(@PathVariable Integer post_id) {
        return service.getImagesByPost(post_id, false);
    }

    @GetMapping("/postImages/post-all/{post_id}")
    public List<PostImages> getAllPostImagesByPost(@PathVariable Integer post_id) {
        return service.getAllPostImagesByPost(post_id);
    }

    @DeleteMapping("/postImages/post-main")
    public void deleteImage(@RequestParam Integer post_image_id) {
         service.deleteImage(post_image_id);
    }

    @DeleteMapping("/postImages/main-image")
    public void deleteMainImage(@RequestParam Integer post_id) {
        service.deleteMainImage(post_id);
    }


}
