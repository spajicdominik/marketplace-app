package com.dspajic.marketplace.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;

@Setter
@Getter
@Entity
@Table(name = "post_image")
public class PostImages {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "post_image_id")
    private Integer id;

    @Column(name = "image_url")
    private String url;

    @Column(name = "post_id")
    private Integer postId;

    @Column(name="is_main")
    private Boolean isMain;

    public PostImages() {
    }

    public PostImages(Integer id, String url, Integer postId, Boolean isMain) {
        this.id = id;
        this.url = url;
        this.postId = postId;
        this.isMain = isMain;
    }


    @Override
    public String toString() {
        return "PostImages{" +
                "id=" + id +
                ", url='" + url + '\'' +
                ", postId=" + postId +
                ", isMain=" + isMain +
                '}';
    }
}