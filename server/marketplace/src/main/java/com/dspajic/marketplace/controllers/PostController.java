package com.dspajic.marketplace.controllers;

import com.dspajic.marketplace.dao.PostRepository;
import com.dspajic.marketplace.entities.Post;
import com.dspajic.marketplace.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PostController {

    @Autowired
    PostService postService;

    @GetMapping("/posts")
    public List<Post> getAllPosts() {return postService.getAllPosts();}

    @GetMapping("/posts/{id}")
    public Post getPostById(@PathVariable("id") int id) {
        return postService.getPostById(id);
    }

    @PostMapping("/posts")
    public int addPost (@RequestBody Post post) {
        return postService.addPost(post);
    }

    @PutMapping("/posts")
    public int updatePost (@RequestBody Post post) {return postService.updatePost(post);}

    @DeleteMapping("/posts/{id}")
    public int deletePost (@PathVariable("id") int id) {
        return postService.deletePost(id);
    }
}
