package com.dspajic.marketplace.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Setter
@Getter
@Entity
@Table(name = "users")
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Integer id;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "enabled")
    private Boolean enabled;

    @Column(name = "user_details_id")
    private Integer userDetailsId;

    @CreationTimestamp
    @Column(name = "created_at")
    private LocalDateTime createdAt;

    public Users() {
    }

    public Users(Integer id, String username, String password, Boolean enabled, Integer userDetailsId, LocalDateTime createdAt) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.enabled = enabled;
        this.userDetailsId = userDetailsId;
        this.createdAt = createdAt;
    }

    @Override
    public String toString() {
        return "Users{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", enabled=" + enabled +
                ", userDetailsId=" + userDetailsId +
                ", createdAt=" + createdAt +
                '}';
    }
}