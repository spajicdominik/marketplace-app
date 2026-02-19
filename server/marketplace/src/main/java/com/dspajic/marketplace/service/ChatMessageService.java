package com.dspajic.marketplace.service;

import com.dspajic.marketplace.entities.chat.ChatMessage;

import java.util.List;

public interface ChatMessageService {
    List<ChatMessage> getAllMessages(Integer conversation_id);
    Integer addMessage (ChatMessage message);
    Integer markAsRead(Integer conversation_id, Integer current_user_id);
}
