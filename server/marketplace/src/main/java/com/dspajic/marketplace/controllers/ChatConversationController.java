package com.dspajic.marketplace.controllers;

import com.dspajic.marketplace.entities.chat.ChatConversation;
import com.dspajic.marketplace.service.ChatConversationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ChatConversationController {

    @Autowired
    ChatConversationService service;

    @GetMapping("/chat/conversations")
    public ChatConversation findChat(@RequestParam Integer user1_id,
                              @RequestParam Integer user2_id)
    {
        return service.findChat(user1_id,user2_id);
    }

    @PostMapping("/chat/conversations")
    public Integer addConversation(@RequestBody ChatConversation chat){
        return service.addConversation(chat);
    }

    @GetMapping("/chat/conversations/user")
    public List<ChatConversation> getChatConversations(@RequestParam Integer user_id){
        return service.getChatConversations(user_id);
    }
}
