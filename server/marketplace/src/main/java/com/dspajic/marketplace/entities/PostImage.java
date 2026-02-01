package com.dspajic.marketplace.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "post_images")
public class PostImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "url")
    private String url;

    @Column(name = "post_id")
    private int post_id;

    public PostImage() {
    }

    public PostImage(Integer id, String url, int post_id) {
        this.id = id;
        this.url = url;
        this.post_id = post_id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public int getPost_id() {
        return post_id;
    }

    public void setPost_id(int post_id) {
        this.post_id = post_id;
    }

    @Override
    public String toString() {
        return "PostImage{" +
                "id=" + id +
                ", url='" + url + '\'' +
                ", post_id=" + post_id +
                '}';
    }
}
