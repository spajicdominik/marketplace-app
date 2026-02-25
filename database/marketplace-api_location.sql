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
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `location` (
  `location_id` bigint NOT NULL AUTO_INCREMENT,
  `address_line1` varchar(150) DEFAULT NULL,
  `address_line2` varchar(150) DEFAULT NULL,
  `postal_code` varchar(20) DEFAULT NULL,
  `city_id` bigint NOT NULL,
  PRIMARY KEY (`location_id`),
  KEY `ix_location_city` (`city_id`),
  CONSTRAINT `fk_location_city` FOREIGN KEY (`city_id`) REFERENCES `city` (`city_id`) ON DELETE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (31,'Savska cesta 160',NULL,'10000',1),(32,'Sendlinger Str. 28',NULL,'80331',2),(33,'Sveti Križ Začretje 16',NULL,'10000',1),(34,'Ulica Random 123',NULL,'12345',80),(35,'California 123',NULL,'12345',3),(36,'Street 123',NULL,'98767',2),(37,'123','123','123',2),(38,'Street 123',NULL,'12345',3),(39,'123','123','123',2),(40,'123','123','123',36),(41,'street','111','111',94),(42,'123','123','123',3),(43,'Streets 123',NULL,'12345',19),(44,'12312','12313','131313',37),(45,'12312','12313','131313',37),(46,'zzzz 123','edited address 2','12345',80),(47,'123',NULL,'123',1),(48,'5515',NULL,'5515',26),(49,'123',NULL,NULL,1),(50,'123',NULL,NULL,1),(51,'ggggg',NULL,'ggggg',4),(52,'123',NULL,NULL,13),(53,'123','123','123',5),(54,'111',NULL,NULL,6),(55,'123',NULL,'123',24),(56,'11',NULL,'11',1),(57,'123','123','123',26),(58,'fffsss',NULL,'ffsfsf',36),(59,'adresa 123',NULL,'12345',6),(60,'123',NULL,'123',19),(61,'1123',NULL,'1231',3),(62,'1123',NULL,'123',36),(63,'131',NULL,'131',12),(64,'313','313','33',2),(65,'123132','13','131',37),(66,'131','131','13',3);
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-02-25 14:56:22
