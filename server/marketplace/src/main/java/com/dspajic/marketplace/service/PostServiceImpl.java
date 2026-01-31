package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dao.PostRepository;
import com.dspajic.marketplace.entities.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    PostRepository postRepository;

    @Override
    public List<Post> getAllPosts() {
        return postRepository.getAllPosts();
    }

    @Override
    public Post getPostById(int id) {
        return postRepository.getPostById(id);
    }

    @Override
    public int addPost(Post post) {
        return postRepository.addPost(post);
    }

    @Override
    public int updatePost(Post post) {
        return postRepository.updatePost(post);
    }

    @Override
    public int deletePost(int id) {
        return postRepository.deletePost(id);
    }
}
