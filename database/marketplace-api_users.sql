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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` bigint NOT NULL AUTO_INCREMENT,
  `username` varchar(80) NOT NULL,
  `password` varchar(255) NOT NULL,
  `enabled` tinyint(1) DEFAULT '1',
  `user_details_id` bigint NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`),
  KEY `ix_users_details` (`user_details_id`),
  CONSTRAINT `fk_users_details` FOREIGN KEY (`user_details_id`) REFERENCES `user_details` (`user_details_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'marko','$2a$10$sxQKcDFybUMzsHfoyCXJfuLKAamzqRhMXvn7RK4zhDuf0RYxsEoFa',1,1,'2026-02-05 11:22:26'),(2,'ana','$2a$10$hashHashHashExample123',1,2,'2026-02-05 11:22:26'),(3,'john','$2a$10$hashHashHashExample123',1,3,'2026-02-05 11:22:26'),(9,'dspajic','$2a$10$CKQKK4o2eJbyjjK.Nl40/.f.ls5JctTMYlvuXwz7TiUhabcat4OyW',1,10,'2026-02-11 13:39:32'),(10,'user','$2a$10$Gc71aO9Nlvw/x2Fpe0QSJ.IMY5wwXxZDFolIpmSEVv92pmlWONcuS',0,11,'2026-02-11 13:51:03'),(11,'aistva123','$2a$10$EeeU3FPOBTIryUXpfQV9I.DDE4z/u6xC4gpBL4y12ibBQOFCs155W',1,12,'2026-02-16 18:36:22'),(17,'dominik','$2a$10$oogQ.9edfoLfnwA3mYuECuDGGgs0uMRh2BEr2MCxvnWIuUEJk6FR6',1,18,'2026-02-16 21:09:34'),(18,'ojelenic','$2a$10$gACkJ5alYg0KjCSyoNq5RexluBBZnJ.SSgpqOqsk.DAcA8hjpVEEG',0,19,'2026-02-25 11:38:17');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-02-25 14:56:25
