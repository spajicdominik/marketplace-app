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
        return service.getAllPostImagess();
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
}
