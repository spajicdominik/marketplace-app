package com.dspajic.marketplace.service;

import com.dspajic.marketplace.entities.chat.ChatConversation;

import java.util.List;

public interface ChatConversationService {
    Integer addConversation(ChatConversation chat);
    ChatConversation findChat(Integer user1_id, Integer user2_id);
    List<ChatConversation> getChatConversations(Integer user_id);
}
