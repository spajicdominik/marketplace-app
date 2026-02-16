-- MySQL dump 10.13  Distrib 8.0.44, for macos15 (arm64)
--
-- Host: localhost    Database: marketplace-api
-- ------------------------------------------------------
-- Server version	9.5.0

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
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ 'e0ef7cfe-f07b-11f0-9ee5-de01690d05f1:1-599';

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
  PRIMARY KEY (`post_image_id`),
  KEY `fk_post` (`post_id`),
  CONSTRAINT `fk_post` FOREIGN KEY (`post_id`) REFERENCES `post` (`post_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_image`
--

LOCK TABLES `post_image` WRITE;
/*!40000 ALTER TABLE `post_image` DISABLE KEYS */;
INSERT INTO `post_image` VALUES (18,34,'http://localhost:8080/uploads/e2de9be8-1be3-452e-b0ad-4cf010250d1a.jpg',1),(19,34,'http://localhost:8080/uploads/23f37318-5cfd-46cb-aeae-222e54e9a095.jpg',0),(20,34,'http://localhost:8080/uploads/558923b3-6cc8-4a94-8a37-5f28bfd95527.jpg',0),(21,35,'http://localhost:8080/uploads/f45801bf-e447-4a7f-ad7a-d7fc467ab666.jpg',1),(22,35,'http://localhost:8080/uploads/e193d8cd-f2db-4e48-a79b-8eeb8e38f55b.jpg',0),(23,35,'http://localhost:8080/uploads/86e4474d-45f5-408b-a5ca-e77bae5ab0ff.jpg',0),(24,36,'http://localhost:8080/uploads/2b047be5-f72b-443a-9fa2-d40f1f7d8d6a.jpg',1),(25,36,'http://localhost:8080/uploads/5558eb0c-7a0b-4d68-9335-fdabe66a3454.jpg',0),(26,36,'http://localhost:8080/uploads/dc44b347-811e-43a5-9d64-cc2e84eeea43.jpg',0);
/*!40000 ALTER TABLE `post_image` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-02-16 23:16:13
