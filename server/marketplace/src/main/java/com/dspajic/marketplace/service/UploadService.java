package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dto.newpost.UploadDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface UploadService {
    ResponseEntity<?> uploadImage(List<MultipartFile> files, String postId);
    ResponseEntity<?> archiveImage(Integer postId, String imageUrl);

    ResponseEntity<?> uploadProfileImage(List<MultipartFile> profileImage, String userId);
    ResponseEntity<?> archiveProfileImage(Integer userId, String imageUrl);
}
