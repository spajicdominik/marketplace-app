package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dto.newpost.NewPostDto;
import com.dspajic.marketplace.entities.Location;
import com.dspajic.marketplace.entities.Post;
import com.dspajic.marketplace.entities.PostDetails;
import com.dspajic.marketplace.entities.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostDetailsServiceImpl implements PostDetailsService {

    @Autowired
    PostService postService;

    @Autowired
    LocationService locationService;

    @Autowired
    ProductService productService;

    @Override
    public PostDetails get(Integer id) {
        Post post = postService.getPostById(id);
        Location location = locationService.getLocationById(post.getLocationId());
        Product product = productService.getProductById(post.getProductId());

        return PostDetails
                .builder()
                .id(post.getId())
                .title(post.getTitle())
                .description(post.getDescription())
                .price(post.getPrice())
                .currency(post.getCurrency())
                .userId(post.getUserId())
                .product(product)
                .location(location)
                .build();
    }

    @Override
    public Integer addNewPost(NewPostDto newPostDto) {
        Long locationId = locationService.addLocation(mapLocationFromDto(newPostDto));
        return postService.addPost(mapPostFromDto(newPostDto, locationId));
    }

    public Post mapPostFromDto(NewPostDto newPostDto, Long locationId) {
        Post post = new Post();
        post.setTitle(newPostDto.getTitle());
        post.setDescription(newPostDto.getDescription());
        post.setPrice(newPostDto.getPrice());
        post.setCurrency(newPostDto.getCurrency());
        post.setLocationId(locationId);
        post.setProductId(newPostDto.getProduct_id());
        post.setUserId(newPostDto.getUser_id());
        return post;
    }

    public Location mapLocationFromDto(NewPostDto newPostDto) {
        Location location = new Location();
        location.setPostalCode(newPostDto.getPostal_code());
        location.setAddressLine2(newPostDto.getAddress_line2());
        location.setAddressLine1(newPostDto.getAddress_line1());
        location.setCityId(newPostDto.getCity_id());
        return location;
    }
}
