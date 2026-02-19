package com.dspajic.marketplace.controllers;

import com.dspajic.marketplace.entities.chat.ChatMessage;
import com.dspajic.marketplace.service.ChatMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class WebSocketChatController {

    @Autowired
    ChatMessageService service;

    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/chat")
    public ChatMessage sendMessage(ChatMessage message) {
        service.addMessage(message);
        return message;
    }
}
