-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: localhost    Database: marketplace-api
-- ------------------------------------------------------
-- Server version	8.0.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `post_image`
--

DROP TABLE IF EXISTS `post_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post_image` (
  `post_image_id` int NOT NULL AUTO_INCREMENT,
  `post_id` bigint NOT NULL,
  `image_url` varchar(256) NOT NULL,
  `is_main` tinyint(1) DEFAULT '0',
  `status` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`post_image_id`),
  KEY `fk_post` (`post_id`),
  CONSTRAINT `fk_post` FOREIGN KEY (`post_id`) REFERENCES `post` (`post_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=125 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_image`
--

LOCK TABLES `post_image` WRITE;
/*!40000 ALTER TABLE `post_image` DISABLE KEYS */;
INSERT INTO `post_image` VALUES (18,34,'http://localhost:8080/uploads/e2de9be8-1be3-452e-b0ad-4cf010250d1a.jpg',1,1),(19,34,'http://localhost:8080/uploads/23f37318-5cfd-46cb-aeae-222e54e9a095.jpg',0,1),(20,34,'http://localhost:8080/uploads/558923b3-6cc8-4a94-8a37-5f28bfd95527.jpg',0,1),(21,35,'http://localhost:8080/uploads/f45801bf-e447-4a7f-ad7a-d7fc467ab666.jpg',1,1),(22,35,'http://localhost:8080/uploads/e193d8cd-f2db-4e48-a79b-8eeb8e38f55b.jpg',0,1),(23,35,'http://localhost:8080/uploads/86e4474d-45f5-408b-a5ca-e77bae5ab0ff.jpg',0,1),(24,36,'http://localhost:8080/uploads/2b047be5-f72b-443a-9fa2-d40f1f7d8d6a.jpg',1,1),(25,36,'http://localhost:8080/uploads/5558eb0c-7a0b-4d68-9335-fdabe66a3454.jpg',0,1),(26,36,'http://localhost:8080/uploads/dc44b347-811e-43a5-9d64-cc2e84eeea43.jpg',0,1),(27,37,'http://localhost:8080/uploads/c9c3fbc5-50f1-40d0-89a9-fa7ae94fb95e.webp',1,1),(28,37,'http://localhost:8080/uploads/a6213532-cab1-4cd1-a58a-6b512d80e223.webp',0,1),(29,37,'http://localhost:8080/uploads/f16448b0-4d0b-4eab-abfe-c3d054dd0eb3.webp',0,1),(34,39,'http://localhost:8080/uploads/568179ae-8243-4f5c-9122-d00e52fa5528.webp',1,1),(55,49,'http://localhost:8080/uploads/19efe764-a6ef-4dc3-8014-6029f228f3a7.webp',1,1),(61,50,'http://localhost:8080/uploads/4b09144b-eb10-4f5d-a58d-bc286e495aef.webp',0,1),(64,50,'http://localhost:8080/uploads/6ed027c7-ebad-4f95-9456-63cddd8da946.png',1,1),(65,38,'http://localhost:8080/uploads/81549ad6-a753-4853-9875-40a3a907276f.png',1,1),(66,38,'http://localhost:8080/uploads/2620820f-0f16-4309-a3b5-81b3c2caa078.png',0,1),(67,38,'http://localhost:8080/uploads/cafd2fe3-b815-4b11-920d-fe27b29d5c4f.png',0,1),(68,38,'http://localhost:8080/uploads/13f92c21-778e-42d1-98bb-790f0e8348f7.png',0,1),(69,38,'http://localhost:8080/uploads/5d1c2c57-f1eb-40a7-86ef-a68f3de2e094.png',0,1),(93,59,'http://localhost:8080/uploads/posts/59/active/6c4509b9-690b-4a5e-9d95-899aefd46bb1.png',1,0),(94,59,'http://localhost:8080/uploads/posts/59/active/a2bd8d40-9fdc-4f18-a267-eb14626c15d9.png',0,0),(95,59,'http://localhost:8080/uploads/posts/59/active/dd81f008-cb94-4b36-861d-c0b4c2e6f81c.png',0,0),(96,59,'http://localhost:8080/uploads/posts/59/active/7cce10d1-9e36-45d3-baab-bd05d9122d62.png',0,0),(97,59,'http://localhost:8080/uploads/posts/59/active/a2a63692-9e48-4f85-b50b-44de51343b73.jpg',1,0),(98,59,'http://localhost:8080/uploads/posts/59/active/f36486a9-29ab-42d9-86c9-9af259edae6d.webp',1,1),(99,59,'http://localhost:8080/uploads/posts/59/active/1b881d65-fca2-4e69-82c9-a23f34ef3de4.jpg',0,1),(100,60,'http://localhost:8080/uploads/posts/60/active/a4ad4581-80ab-4e78-aa9e-8166b6251699.png',1,1),(101,60,'http://localhost:8080/uploads/posts/60/active/b0823647-7524-4bbd-ab2f-b2ddb87d4fb1.jpg',0,1),(102,61,'http://localhost:8080/uploads/posts/61/active/2dde01e9-a6aa-438b-b238-fa97bd5440b3.png',1,0),(103,61,'http://localhost:8080/uploads/posts/61/active/bb04e5ab-25f8-4227-a064-7e663186bf30.png',0,0),(104,61,'http://localhost:8080/uploads/posts/61/active/8cecc8ef-22c5-44b0-b330-1d542a100c1b.jpg',0,0),(105,61,'http://localhost:8080/uploads/posts/61/active/8fd2e15f-0f56-436f-9f8c-369e56cf685d.jpg',1,1),(106,62,'http://localhost:8080/uploads/posts/62/active/3dce9a82-2dca-451e-8edf-3e6384d6b857.jpg',1,1),(107,62,'http://localhost:8080/uploads/posts/62/active/1a2aaf76-b1a6-46e9-8524-524a1f62814b.jpg',0,1),(108,62,'http://localhost:8080/uploads/posts/62/active/176700ae-fe52-4be4-a261-a01ffc3e41f7.webp',0,1),(109,63,'http://localhost:8080/uploads/posts/63/active/00e2f079-2baa-438a-bd23-e5e68ecace79.jpg',1,1),(110,63,'http://localhost:8080/uploads/posts/63/active/e8c716f5-6f75-4b94-985c-ab548aaabf76.webp',0,1),(111,63,'http://localhost:8080/uploads/posts/63/active/e6035573-06fc-4038-887e-0cb486a82edd.png',0,1),(112,64,'http://localhost:8080/uploads/posts/64/active/dd0e035d-8d96-4a16-bc14-dc5c61876d24.webp',1,0),(113,64,'http://localhost:8080/uploads/posts/64/active/cee5d1cb-27f0-447b-847e-c2ca3afb3465.webp',1,1),(114,64,'http://localhost:8080/uploads/posts/64/active/b54e1158-36fe-4ff8-9cd4-166694d3e82e.png',0,0),(115,65,'http://localhost:8080/uploads/posts/65/active/7eb87e31-7165-431e-a619-88f3593b4f28.png',1,1),(116,65,'http://localhost:8080/uploads/posts/65/active/de38a6e0-c13c-4e2a-868d-118fa42dce79.png',0,1),(117,65,'http://localhost:8080/uploads/posts/65/active/98f10043-431e-49a0-a37b-8a3c865a327c.png',0,1),(118,66,'http://localhost:8080/uploads/posts/66/active/3004cc27-dc66-4d36-a137-2954322393ec.jpg',1,1),(119,66,'http://localhost:8080/uploads/posts/66/active/0acf16d7-38aa-43a0-9883-2a89a23dc6f1.png',0,1),(120,66,'http://localhost:8080/uploads/posts/66/active/02e41f81-4551-40d8-9841-2ade26f9cfcf.webp',0,0),(121,67,'http://localhost:8080/uploads/posts/67/active/f9fc6a84-af5c-4f58-ac7f-465a8fb9ff47.jpg',1,1),(122,66,'http://localhost:8080/uploads/posts/66/active/1e931141-de05-4326-b4ab-4bdb1fc08af1.png',0,1),(123,68,'http://localhost:8080/uploads/posts/68/active/747fd1bd-fe2c-485c-95a2-3125aeccaf66.jpg',1,1),(124,69,'http://localhost:8080/uploads/posts/69/active/5ffbb963-7066-4ba3-a392-a6caad9a153d.jpg',1,1);
/*!40000 ALTER TABLE `post_image` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-02-25 14:56:26
