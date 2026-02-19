package com.dspajic.marketplace.entities.chat;

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
@Table ( name = "chat_conversation")
public class ChatConversation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column( name = "conversation_id" )
    private Integer id;

    @Column( name = "user1_id" )
    private Integer user1_id;

    @Column( name = "user2_id" )
    private Integer user2_id;

    @CreationTimestamp
    @Column(name = "created_at")
    private LocalDateTime created_at;
}
