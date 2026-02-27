package com.dspajic.marketplace.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

@Entity
@Table(name = "user_image")
public class UserImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_image_id")
    private Integer user_image_id;

    @Column(name = "user_details_id")
    private Integer user_details_id;

    @Column(name = "image_url")
    private String image_url;

    @Column(name = "status")
    private Boolean status;

    @CreationTimestamp
    @Column(name = "created_at")
    private LocalDateTime createdAt;
}
