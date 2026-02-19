package com.dspajic.marketplace.controllers;

import com.dspajic.marketplace.entities.chat.ChatMessage;
import com.dspajic.marketplace.service.ChatMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ChatMessageController {

    @Autowired
    ChatMessageService service;

    @GetMapping("/messages")
    public List<ChatMessage> getAllMessages(@RequestParam Integer conversation_id){
        return service.getAllMessages(conversation_id);
    }

    @PostMapping("/messages")
    public Integer addMesage(@RequestBody ChatMessage message){
        return service.addMessage(message);
    }

    @PutMapping("messages/conversation")
    public Integer markAsRead(
            @RequestParam Integer conversation_id,
            @RequestParam Integer current_user_id
    ){
        return service.markAsRead(conversation_id, current_user_id);
    }

}
