package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.chat.ChatConversation;
import com.dspajic.marketplace.entities.chat.ChatMessage;

import java.util.List;

public interface ChatConversationRepository {
    Integer addConversation(ChatConversation chat);
    ChatConversation findChat(Integer user1_id, Integer user2_id);
    List<ChatConversation> getChatConversations(Integer user_id);
}
