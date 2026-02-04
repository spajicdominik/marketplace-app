package com.dspajic.marketplace.aws;

import com.amazonaws.services.kafka.model.S3;
import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "aws")
@Data
public class AWSConfiguration {
    private String accessKeyId;
    private String secretKey;
    private S3 s3 = new S3();

    public static class S3 {
        private String bucketName;
        private String region;
    }
}
