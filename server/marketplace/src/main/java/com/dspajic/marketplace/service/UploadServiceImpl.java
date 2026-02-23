package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dto.newpost.UploadDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.*;

@Service
public class UploadServiceImpl implements UploadService {
    @Value("${file.upload-dir}")
    private String uploadDir;
    private final static String BASE_URL = "http://localhost:8080/uploads/";

    @Override
    public ResponseEntity<?> uploadImage(List<MultipartFile> files) {
        if (files == null || files.isEmpty()) {
            return ResponseEntity.badRequest().body("No files provided");
        }
        try {
            Path root = Paths.get(uploadDir);
            List<UploadDto> out = new ArrayList<>();

            for (MultipartFile file : files) {
                if (file.isEmpty()) {
                    continue;
                }
                String contentType = file.getContentType();
                if (contentType == null || !contentType.toLowerCase().startsWith("image/")) {
                    continue;
                }

                String originalName = StringUtils.cleanPath(
                        Optional.ofNullable(file.getOriginalFilename()).orElse("image")
                );
                String ext = "";
                int dot = originalName.lastIndexOf('.');
                if (dot >= 0) {
                    ext = originalName.substring(dot);
                }

                String storedName = UUID.randomUUID().toString() + ext;
                Path target = root.resolve(storedName);
                Files.copy(file.getInputStream(), target, StandardCopyOption.REPLACE_EXISTING);

                String baseUrl = BASE_URL + storedName;
                out.add(new UploadDto(storedName, baseUrl));
            }
            return ResponseEntity.ok(out);
        } catch (IOException ex) {
            return ResponseEntity.internalServerError().body(Map.of("error", "Error uploading image(s)"));
        }
    }
}
