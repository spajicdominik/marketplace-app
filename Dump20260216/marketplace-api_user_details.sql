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
-- Table structure for table `user_details`
--

DROP TABLE IF EXISTS `user_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_details` (
  `user_details_id` bigint NOT NULL AUTO_INCREMENT,
  `first_name` varchar(120) DEFAULT NULL,
  `last_name` varchar(120) DEFAULT NULL,
  `gender` enum('M','F','O') DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `email` varchar(320) DEFAULT NULL,
  `city_id` bigint DEFAULT NULL,
  PRIMARY KEY (`user_details_id`),
  UNIQUE KEY `email` (`email`),
  KEY `fk_user_details_city` (`city_id`),
  CONSTRAINT `fk_user_details_city` FOREIGN KEY (`city_id`) REFERENCES `city` (`city_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_details`
--

LOCK TABLES `user_details` WRITE;
/*!40000 ALTER TABLE `user_details` DISABLE KEYS */;
INSERT INTO `user_details` VALUES (1,'Marko','Marić','M','1990-05-15','+385911234567','marko.maric@example.com',77),(2,'Ana','Horvat','F','1988-09-10','+38598111222','ana.horvat@example.com',77),(3,'John','Doe','M','1992-03-21','+14155550100','john.doe@example.com',77),(10,'Dominik','Spajic','M','2001-07-30','+385914488601','dominikspajic7@gmail.com',77),(11,'adadad','adadad','F','2026-02-10','914488601','dad123@gmail.com',77),(12,'Antonio','Ištvanović','M','2001-06-24','+385915638899','dspajic8@gmail.com',77),(18,'Dinko','Dinkić','M','2010-02-08','+385915638899','dspajic@mathos.hr',84);
/*!40000 ALTER TABLE `user_details` ENABLE KEYS */;
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
