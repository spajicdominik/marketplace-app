package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dao.CategoryRepository;
import com.dspajic.marketplace.dao.PostImageRepository;
import com.dspajic.marketplace.dao.PostRepository;
import com.dspajic.marketplace.dto.PostDto;
import com.dspajic.marketplace.entities.Category;
import com.dspajic.marketplace.entities.Post;
import com.dspajic.marketplace.entities.PostImage;
import com.dspajic.marketplace.entities.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.logging.Filter;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    PostRepository postRepository;

    @Autowired
    PostImageRepository postImageRepository;

    @Autowired
    CategoryService categoryService;

    @Autowired
    ProductService productService;

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

    @Override
    public List<PostDto> filterPostByCategory(Integer category_id) {
        List<PostDto> allPosts = getAllPostsWImages();
        List<PostDto> filteredPosts = new ArrayList<>();

        for (PostDto post : allPosts) {
            Product postProduct = productService.getProductById(post.getProductID());
            Integer postProductCategoryId = postProduct.getCategory_id();
            if (Objects.equals(postProductCategoryId, category_id)){
                filteredPosts.add(post);
            }
            else {
                while (!Objects.equals(postProductCategoryId, category_id)){
                    if(postProductCategoryId == 0){
                        break;
                    }
                    Category childCategory = categoryService.getCategoryById(postProductCategoryId);
                    postProductCategoryId = childCategory.getParent_id();
                }
                if (Objects.equals(postProductCategoryId, category_id)){
                    filteredPosts.add(post);
                }
            }
        }
        return filteredPosts;
    }

    @Override
    public List<PostDto> filterPostByProduct(Integer product_id) {
        List<PostDto> allPosts = getAllPostsWImages();
        List<PostDto> filteredPosts = new ArrayList<>();

        for (PostDto post : allPosts) {
            if (post.getProductID() == product_id) {
                filteredPosts.add(post);
            }
        }
        return filteredPosts;
    }

    public List<PostDto> filterPostByPrice(List<PostDto> filteredList,Integer minPrice, Integer maxPrice) {
        List<PostDto> filteredByPrice = new ArrayList<>();

        for (PostDto post : filteredList) {
            if (post.getPrice() >= minPrice && post.getPrice() <= maxPrice) {
                filteredByPrice.add(post);
            }
        }
        return filteredByPrice;
    }


    @Override
    public List<PostDto> filterPostByParams(Integer product_id, Integer category_id, Integer minPrice, Integer maxPrice) {
        if ((product_id == 0) && category_id != 0){
            List<PostDto> filteredListCategory = filterPostByCategory(category_id);
            return filterPostByPrice(filteredListCategory, minPrice, maxPrice);
        } else if (product_id !=0 && category_id ==0) {
            List<PostDto> filteredListProduct = filterPostByProduct(product_id);
            return filterPostByPrice(filteredListProduct, minPrice, maxPrice);
        }
        else {
            return filterPostByPrice(getAllPostsWImages(), minPrice, maxPrice);
        }
    }


}
