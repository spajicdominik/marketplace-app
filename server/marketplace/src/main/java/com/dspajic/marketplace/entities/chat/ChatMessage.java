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
@Table( name = "chat_message")
public class ChatMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column( name = "message_id" )
    private Integer id;

    @Column( name = "conversation_id" )
    private Integer conversation_id;

    @Column( name = "sender_id" )
    private Integer sender_id;

    @Column( name = "message" )
    private String message;

    @CreationTimestamp
    @Column( name = "created_at" )
    private LocalDateTime created_at;

    @Column( name = "is_read" )
    private Boolean is_read;
}
