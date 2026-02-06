package com.dspajic.marketplace.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "post_images")
public class PostImages {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "post_image_id")
    private Integer id;

    @Column(name = "url")
    private String url;

    @Column(name = "post_id")
    private Integer postId;

    public PostImages() {
    }

    public PostImages(Integer id, String url, Integer postId) {
        this.id = id;
        this.url = url;
        this.postId = postId;
    }

    @Override
    public String toString() {
        return "PostImages{" +
                "id=" + id +
                ", url='" + url + '\'' +
                ", postId=" + postId +
                '}';
    }
}