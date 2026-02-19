package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dao.ChatMessageRepository;
import com.dspajic.marketplace.entities.chat.ChatMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatMessageServiceImpl implements ChatMessageService{

    @Autowired
    ChatMessageRepository repository;

    @Override
    public List<ChatMessage> getAllMessages(Integer conversation_id) {
        return repository.getAllMessages(conversation_id);
    }

    @Override
    public Integer addMessage(ChatMessage message) {
        return repository.addMessage(message);
    }

    @Override
    public Integer markAsRead(Integer conversation_id, Integer current_user_id) {
        return repository.markAsRead(conversation_id, current_user_id);
    }
}
