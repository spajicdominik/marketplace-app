package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dto.newpost.UploadDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface UploadService {
    ResponseEntity<?> uploadImage(List<MultipartFile> files);
}
