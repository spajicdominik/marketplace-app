package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dao.ChatConversationRepository;
import com.dspajic.marketplace.entities.chat.ChatConversation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatConversationServiceImpl implements ChatConversationService{

    @Autowired
    ChatConversationRepository repository;

    @Override
    public ChatConversation findChat(Integer user1_id, Integer user2_id) {
        return repository.findChat(user1_id, user2_id);
    }

    @Override
    public Integer addConversation(ChatConversation chat) {
        return repository.addConversation(chat);
    }

    @Override
    public List<ChatConversation> getChatConversations(Integer user_id) {
        return repository.getChatConversations(user_id);
    }
}
