package com.dspajic.marketplace.mappers;

import com.dspajic.marketplace.entities.chat.ChatMessage;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDateTime;

public class ChatMessageMapper implements RowMapper<ChatMessage> {
    @Override
    public ChatMessage mapRow(ResultSet rs, int rowNum) throws SQLException {
        ChatMessage message = new ChatMessage();
        message.setId(rs.getInt("message_id"));
        message.setConversation_id(rs.getInt("conversation_id"));
        message.setSender_id(rs.getInt("sender_id"));
        message.setMessage(rs.getString("message"));
        message.setCreated_at(rs.getObject("created_at", LocalDateTime.class));
        message.setIs_read(rs.getBoolean("is_read"));
        return message;
    }
}
