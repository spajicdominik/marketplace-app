package com.dspajic.marketplace.mappers;

import com.dspajic.marketplace.entities.chat.ChatConversation;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDateTime;

public class ChatMapper implements RowMapper<ChatConversation> {
    @Override
    public ChatConversation mapRow(ResultSet rs, int rowNum) throws SQLException {
        ChatConversation chat = new ChatConversation();
        chat.setId(rs.getInt("conversation_id"));
        chat.setUser1_id(rs.getInt("user1_id"));
        chat.setUser2_id(rs.getInt("user2_id"));
        chat.setCreated_at(rs.getObject("created_at", LocalDateTime.class));
        return chat;
    }
}
