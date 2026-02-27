package com.dspajic.marketplace.controllers;
import com.dspajic.marketplace.service.UploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@RestController
@RequestMapping("/api/uploads")
public class UploadController {
    @Autowired
    UploadService uploadService;

    @PostMapping("/images")
    public ResponseEntity<?> uploadImage(
            @RequestParam("postId") String postId,
            @RequestParam("file") List<MultipartFile> files
    ) { return uploadService.uploadImage(files, postId);}

    @PostMapping("/profile")
    public ResponseEntity<?> uploadProfileImage(
            @RequestParam("userId") String userId,
            @RequestParam("file") List<MultipartFile> profileImage
    ) {
        return uploadService.uploadProfileImage(profileImage, userId);
    }
}
