package com.dspajic.marketplace.controllers;

import com.dspajic.marketplace.entities.UserImage;
import com.dspajic.marketplace.service.UserImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserImageController {

    @Autowired
    UserImageService service;

    @GetMapping("/user-image/{user_id}")
    public UserImage getUserImage(@PathVariable Integer user_id) {
        return service.getUserImage(user_id);
    }

    @PostMapping("/user-image/{user_id}")
    public Integer addUserImage(@PathVariable Integer user_id, @RequestBody UserImage image) {
        return service.addUserImage(user_id, image);
    }

    @DeleteMapping("/user-image/{user_id}")
    public void deleteUserImage(@PathVariable Integer user_id) {
        service.deleteUserImage(user_id);
    }
}
