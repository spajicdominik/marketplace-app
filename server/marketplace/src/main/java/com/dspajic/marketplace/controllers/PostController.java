package com.dspajic.marketplace.controllers;

import com.dspajic.marketplace.dao.PostRepository;
import com.dspajic.marketplace.entities.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PostController {

    @Autowired
    PostRepository postRepository;

    @GetMapping("/posts")
    public List<Post> getAllPosts() {return postRepository.getAllPosts();}

    @GetMapping("/posts/{id}")
    public Post getPostById(@PathVariable("id") int id) {
        return postRepository.getPostById(id);
    }

    @PostMapping("/posts")
    public int addPost (@RequestBody Post post) {
        return postRepository.addPost(post);
    }

    @PutMapping("/posts")
    public int updatePost (@RequestBody Post post) {return postRepository.updatePost(post);}

    @DeleteMapping
    public int deletePost (@PathVariable("id") int id) {
        return postRepository.deletePost(id);
    }
}
