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
    private static final String ACTIVE = "active";
    private static final String ARCHIVE = "archive";

    @Override
    public ResponseEntity<?> uploadImage(List<MultipartFile> files, String postId) {
        if (postId == null) {
            return ResponseEntity.badRequest().body("Post ID is required");
        }
        if (files == null || files.isEmpty()) {
            return ResponseEntity.badRequest().body("No files provided");
        }
        try {
            Path root = Paths.get(uploadDir).resolve("posts").resolve(postId);
            Path activeDir = root.resolve(ACTIVE);
            Path archiveDir = root.resolve(ARCHIVE);
            Files.createDirectories(activeDir);
            Files.createDirectories(archiveDir);

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
                Path target = activeDir.resolve(storedName);
                Files.copy(file.getInputStream(), target, StandardCopyOption.REPLACE_EXISTING);

                String baseUrl = BASE_URL + "posts/" + postId + "/" + ACTIVE + "/" + storedName;
                out.add(new UploadDto(storedName, baseUrl));
            }
            return ResponseEntity.ok(out);
        } catch (IOException ex) {
            return ResponseEntity.internalServerError().body(Map.of("error", "Error uploading image(s)"));
        }
    }

    @Override
    public ResponseEntity<?> archiveImage(Integer postId, String imageUrl) {
        try {
            if (imageUrl == null || imageUrl.isBlank()) {
                return ResponseEntity.badRequest().body(Map.of("error", "Image URL is required"));
            }

            String relativePath = imageUrl.replace(BASE_URL, "");
            String[] segments = relativePath.split("/");
            String storedName = segments[3];

            Path root = Paths.get(uploadDir).resolve("posts").resolve(String.valueOf(postId));
            Path activeDir = root.resolve(ACTIVE);
            Path archiveDir = root.resolve(ARCHIVE);
            Files.createDirectories(archiveDir);

            Path source = activeDir.resolve(storedName);
            Path target = archiveDir.resolve(storedName);

            if (!Files.exists(source)) {
                return ResponseEntity.notFound().build();
            }

            Files.move(source, target, StandardCopyOption.REPLACE_EXISTING);

            String archivedUrl = BASE_URL + "posts/" + postId + "/" + ARCHIVE + "/" + storedName;
            return ResponseEntity.ok(new UploadDto(storedName, archivedUrl));

        } catch (IOException e) {
            return ResponseEntity.internalServerError().body(Map.of("error", "Archive move failed"));
        }
    }

    @Override
    public ResponseEntity<?> uploadProfileImage(List<MultipartFile> profileImage, String userId) {
        if (userId == null) {
            return ResponseEntity.badRequest().body("User ID is required");
        }
        if (profileImage == null || profileImage.isEmpty()) {
            return ResponseEntity.badRequest().body("No files provided");
        }
        try {
            Path root = Paths.get(uploadDir).resolve("users").resolve(userId);
            Path activeDir = root.resolve(ACTIVE);
            Path archiveDir = root.resolve(ARCHIVE);
            Files.createDirectories(activeDir);
            Files.createDirectories(archiveDir);

            List<UploadDto> out = new ArrayList<>();

            for (MultipartFile file : profileImage) {
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
                Path target = activeDir.resolve(storedName);
                Files.copy(file.getInputStream(), target, StandardCopyOption.REPLACE_EXISTING);

                String baseUrl = BASE_URL + "users/" + userId + "/" + ACTIVE + "/" + storedName;
                out.add(new UploadDto(storedName, baseUrl));
            }
            return ResponseEntity.ok(out);
        } catch (IOException ex) {
            return ResponseEntity.internalServerError().body(Map.of("error", "Error uploading image(s)"));
        }
    }

    @Override
    public ResponseEntity<?> archiveProfileImage(Integer userId, String imageUrl) {
        try {
            if (imageUrl == null || imageUrl.isBlank()) {
                return ResponseEntity.badRequest().body(Map.of("error", "Image URL is required"));
            }

            String relativePath = imageUrl.replace(BASE_URL, "");
            String[] segments = relativePath.split("/");
            String storedName = segments[3];

            Path root = Paths.get(uploadDir).resolve("users").resolve(String.valueOf(userId));
            Path activeDir = root.resolve(ACTIVE);
            Path archiveDir = root.resolve(ARCHIVE);
            Files.createDirectories(archiveDir);

            Path source = activeDir.resolve(storedName);
            Path target = archiveDir.resolve(storedName);

            if (!Files.exists(source)) {
                return ResponseEntity.notFound().build();
            }

            Files.move(source, target, StandardCopyOption.REPLACE_EXISTING);

            String archivedUrl = BASE_URL + "users/" + userId + "/" + ARCHIVE + "/" + storedName;
            return ResponseEntity.ok(new UploadDto(storedName, archivedUrl));

        } catch (IOException e) {
            return ResponseEntity.internalServerError().body(Map.of("error", "Archive move failed"));
        }
    }
}
