package com.dspajic.marketplace.controllers;

import com.dspajic.marketplace.dto.newpost.UploadDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/uploads")
public class UploadController {

    @Value("${file.upload-dir}")
    private String uploadDir;

    @PostMapping("/images")
    public ResponseEntity<?> uploadImage(@RequestParam("file") List<MultipartFile> files) {
        if (files == null || files.isEmpty()){
            return ResponseEntity.badRequest().body("No files provided");
        }
        try{
            Path root = Paths.get(uploadDir);
            List<UploadDto> out = new ArrayList<>();

            for (MultipartFile file : files) {
                if (file.isEmpty()) {
                    continue;
                }
                String contentType = file.getContentType();
                if (contentType == null || !contentType.toLowerCase().startsWith("image/")){
                    continue;
                }
                String storedName = UUID.randomUUID().toString();
                Path target = root.resolve(storedName);
                Files.copy(file.getInputStream(), target, StandardCopyOption.REPLACE_EXISTING);

                String baseUrl = "http://localhost:8080/api/uploads/images" + storedName;
                out.add(new UploadDto(storedName, baseUrl));
            }
            return ResponseEntity.ok(out);
        }
        catch (IOException ex) {
            return ResponseEntity.internalServerError().body(Map.of("error", "Error uploading image(s)"));
        }
    }
    }
