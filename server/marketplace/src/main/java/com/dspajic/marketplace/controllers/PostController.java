package com.dspajic.marketplace.controllers;

import com.dspajic.marketplace.entities.Post;
import com.dspajic.marketplace.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PostController {

    @Autowired
    PostService service;

    @GetMapping("/posts")
    public List<Post> getAllPosts() {
        return service.getAllPosts();
    }

    @GetMapping("/posts/{id}")
    public Post getPostById(@PathVariable("id") Integer id) {
        return service.getPostById(id);
    }

    @PostMapping("/posts")
    public Integer addPost(@RequestBody Post entity) {
        return service.addPost(entity);
    }

    @PutMapping("/posts")
    public int updatePost(@RequestBody Post entity) {
        return service.updatePost(entity);
    }

    @DeleteMapping("/posts/{id}")
    public void deletePost(@PathVariable("id") Integer id) {
        service.deletePost(id);
    }
}
