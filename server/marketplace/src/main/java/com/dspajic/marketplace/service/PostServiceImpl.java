package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dao.PostRepository;
import com.dspajic.marketplace.dto.newpost.NewPostDto;
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

    @Override
    public List<Post> getPostsByCategory(Integer id) {
        return repository.getPostsByCategory(id);
    }

    @Override
    public List<Post> getRecentPosts() {
        return repository.getRecentPosts();
    }

    @Override
    public List<Post> getPostsByUser(Integer userId) {
        return repository.getPostsByUser(userId);
    }

    @Override
    public List<Post> getPostsByProduct(Integer productId) {
        return repository.getPostsByProduct(productId);
    }

    @Override
    public List<Post> getPostsBySubcategoryItem(Integer subcategoryItemId) {
        return repository.getPostsBySubcategoryItem(subcategoryItemId);
    }

    @Override
    public List<Post> getPostsBySubcategory(Integer subcategoryId) {
        return repository.getPostsBySubcategory(subcategoryId);
    }

    @Override
    public List<Post> filterPosts(
            Integer category_id,
            Integer subcategory_id,
            Integer subcategory_item_id,
            Integer product_id,
            Integer country_id,
            Integer county_id,
            Integer city_id,
            Integer min_price,
            Integer max_price,
            Boolean sortPriceDesc,
            Boolean sortPriceAsc,
            Boolean sortDateDesc,
            Boolean sortDateAsc)
    {
        return repository.filterPosts(
                category_id,
                subcategory_id,
                subcategory_item_id,
                product_id,
                country_id,
                county_id,
                city_id,
                min_price,
                max_price,
                sortPriceDesc,
                sortPriceAsc,
                sortDateDesc,
                sortDateAsc
        );
    }


}
