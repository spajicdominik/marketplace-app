package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.chat.ChatMessage;
import com.dspajic.marketplace.mappers.ChatMessageMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ChatMessageRepositoryImpl implements ChatMessageRepository{

    @Autowired
    NamedParameterJdbcTemplate namedJdbc;

    ChatMessageMapper messageMapper = new ChatMessageMapper();

    @Override
    public List<ChatMessage> getAllMessages(Integer conversation_id) {
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("conversation_id", conversation_id);

        String sql = """
                SELECT *
                FROM chat_message
                WHERE conversation_id = :conversation_id
                ORDER BY created_at ASC;
                """;
        return namedJdbc.query(sql, params, messageMapper);
    }

    @Override
    public Integer addMessage(ChatMessage message) {
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("conversation_id", message.getConversation_id());
        params.addValue("sender_id", message.getSender_id());
        params.addValue("message", message.getMessage());

        String sql = """
                INSERT INTO chat_message (
                    conversation_id,
                    sender_id,
                    message
                )
                VALUES (
                    :conversation_id,
                    :sender_id,
                    :message
                );
                """;
        return namedJdbc.update(sql, params);
    }

    @Override
    public Integer markAsRead(Integer conversation_id, Integer current_user_id) {
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("conversation_id", conversation_id);
        params.addValue("current_user", current_user_id);

        String sql = """
                UPDATE chat_message
                SET is_read = 1
                WHERE conversation_id = :conversation_id
                  AND sender_id != :current_user;
                """;
        return namedJdbc.update(sql, params);
    }
}
