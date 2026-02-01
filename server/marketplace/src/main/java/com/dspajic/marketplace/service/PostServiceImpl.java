package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dao.PostImageRepository;
import com.dspajic.marketplace.dao.PostRepository;
import com.dspajic.marketplace.dto.PostDto;
import com.dspajic.marketplace.entities.Post;
import com.dspajic.marketplace.entities.PostImage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    PostRepository postRepository;

    @Autowired
    PostImageRepository postImageRepository;

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

    @Override
    public List<PostDto> getAllPostsWImages() {
        List<Post> allPosts = postRepository.getAllPosts();
        List<PostImage> allPostImages = postImageRepository.getAllImages();
        List<PostDto> allPostsWImages = new ArrayList<>();

        for (Post p : allPosts){
            List<String> postImagesList = new ArrayList<>();
            for (PostImage pi : allPostImages){
                if (pi.getPost_id() == p.getId()){
                    postImagesList.add(pi.getUrl());
                }
            }
            PostDto newDto = PostDto.builder()
                    .id(p.getId())
                    .title(p.getTitle())
                    .description(p.getDescription())
                    .price(p.getPrice())
                    .currency(p.getCurrency())
                    .userID(p.getUserID())
                    .productID(p.getProductID())
                    .img_url(postImagesList)
                    .build();
            allPostsWImages.add(newDto);
        }
        return allPostsWImages;
    }
}
