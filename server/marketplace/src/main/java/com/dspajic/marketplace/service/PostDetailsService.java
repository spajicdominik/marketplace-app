package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dto.newpost.NewPostDto;
import com.dspajic.marketplace.entities.PostDetails;

public interface PostDetailsService {
    PostDetails get(Integer id);
    Integer addNewPost(NewPostDto newPostDto);
}
