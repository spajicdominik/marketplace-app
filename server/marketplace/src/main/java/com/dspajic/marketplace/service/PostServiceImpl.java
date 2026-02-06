package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dao.PostRepository;
import com.dspajic.marketplace.entities.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceImpl implements PostService{

    @Autowired
    PostRepository repository;

    @Override
    public List<Post> getAllPosts() {
        return repository.getAllPosts();
    }

    @Override
    public Post getPostById(Integer id) {
        return repository.getPostById(id);
    }

    @Override
    public Integer addPost(Post entity) {
        return repository.addPost(entity);
    }

    @Override
    public Integer updatePost(Post entity) {
        return repository.updatePost(entity);
    }

    @Override
    public void deletePost(Integer id) {
        repository.deletePost(id);
    }
}
