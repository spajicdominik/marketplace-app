package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.chat.ChatConversation;
import com.dspajic.marketplace.entities.chat.ChatMessage;
import com.dspajic.marketplace.mappers.ChatMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ChatConversationRepositoryImpl implements ChatConversationRepository{

    @Autowired
    NamedParameterJdbcTemplate namedJdbc;

    ChatMapper chatMapper = new ChatMapper();

    @Override
    public ChatConversation findChat(Integer user1_id, Integer user2_id) {
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("user1", user1_id);
        params.addValue("user2", user2_id);

        String sql = """
                SELECT *
                FROM chat_conversation
                WHERE
                        (user1_id = :user1 AND user2_id = :user2)
                     OR (user1_id = :user2 AND user2_id = :user1)
                LIMIT 1;
                """;
        List<ChatConversation> result = namedJdbc.query(sql, params, chatMapper);
        return result.isEmpty() ? null : result.getFirst();
    }

    @Override
    public Integer addConversation(ChatConversation chat) {
        ChatConversation existing = findChat(chat.getUser1_id(), chat.getUser2_id());

        if (existing != null){
            return existing.getId();
        }

        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("user1", chat.getUser1_id());
        params.addValue("user2", chat.getUser2_id());

        String sql = """
                INSERT INTO
                chat_conversation
                (
                user1_id,
                user2_id
                )
                VALUES
                (
                :user1,
                :user2
                );
                """;
        try {
            KeyHolder keyHolder = new GeneratedKeyHolder();
            namedJdbc.update(sql,params, keyHolder, new String[]{"conversation_id"});
            return keyHolder.getKey() != null ? keyHolder.getKey().intValue() : null;

        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }

    }

    @Override
    public List<ChatConversation> getChatConversations(Integer user_id) {
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("user_id", user_id);

        String sql = """
                SELECT *
                FROM chat_conversation
                WHERE user1_id = :user_id
                   OR user2_id = :user_id
                ORDER BY created_at DESC;
                """;
        return namedJdbc.query(sql, params, chatMapper);
    }

}
