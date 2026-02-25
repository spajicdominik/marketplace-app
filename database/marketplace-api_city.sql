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
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city` (
  `city_id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(120) NOT NULL,
  `county_id` bigint DEFAULT NULL,
  PRIMARY KEY (`city_id`),
  KEY `ix_city_county` (`county_id`),
  CONSTRAINT `fk_city_county` FOREIGN KEY (`county_id`) REFERENCES `county` (`county_id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=127 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (1,'Zagreb',1),(2,'Munich',2),(3,'San Francisco',3),(4,'Velika Gorica',4),(5,'Samobor',4),(6,'Zaprešić',4),(7,'Jastrebarsko',4),(8,'Dugo Selo',4),(9,'Ivanić-Grad',4),(10,'Sveti Ivan Zelina',4),(11,'Vrbovec',4),(12,'Krapina',5),(13,'Zabok',5),(14,'Pregrada',5),(15,'Donja Stubica',5),(16,'Oroslavje',5),(17,'Zlatar',5),(18,'Sisak',6),(19,'Petrinja',6),(20,'Kutina',6),(21,'Novska',6),(22,'Glina',6),(23,'Hrvatska Kostajnica',6),(24,'Karlovac',7),(25,'Duga Resa',7),(26,'Ogulin',7),(27,'Ozalj',7),(28,'Slunj',7),(29,'Varaždin',8),(30,'Ivanec',8),(31,'Lepoglava',8),(32,'Ludbreg',8),(33,'Novi Marof',8),(34,'Varaždinske Toplice',8),(35,'Koprivnica',9),(36,'Križevci',9),(37,'Đurđevac',9),(38,'Bjelovar',10),(39,'Daruvar',10),(40,'Čazma',10),(41,'Garešnica',10),(42,'Grubišno Polje',10),(43,'Rijeka',11),(44,'Opatija',11),(45,'Crikvenica',11),(46,'Delnice',11),(47,'Krk',11),(48,'Mali Lošinj',11),(49,'Novi Vinodolski',11),(50,'Rab',11),(51,'Vrbovsko',11),(52,'Bakar',11),(53,'Cres',11),(54,'Čabar',11),(55,'Kastav',11),(56,'Kraljevica',11),(57,'Gospić',12),(58,'Novalja',12),(59,'Otočac',12),(60,'Senj',12),(61,'Virovitica',13),(62,'Orahovica',13),(63,'Slatina',13),(64,'Požega',14),(65,'Kutjevo',14),(66,'Lipik',14),(67,'Pakrac',14),(68,'Pleternica',14),(69,'Slavonski Brod',15),(70,'Nova Gradiška',15),(71,'Zadar',16),(72,'Benkovac',16),(73,'Biograd na Moru',16),(74,'Nin',16),(75,'Obrovac',16),(76,'Pag',16),(77,'Osijek',17),(78,'Beli Manastir',17),(79,'Belišće',17),(80,'Donji Miholjac',17),(81,'Đakovo',17),(82,'Našice',17),(83,'Valpovo',17),(84,'Šibenik',18),(85,'Drniš',18),(86,'Knin',18),(87,'Skradin',18),(88,'Vodice',18),(89,'Vukovar',19),(90,'Vinkovci',19),(91,'Županja',19),(92,'Ilok',19),(93,'Otok',19),(94,'Split',20),(95,'Solin',20),(96,'Kaštela',20),(97,'Makarska',20),(98,'Omiš',20),(99,'Sinj',20),(100,'Supetar',20),(101,'Trilj',20),(102,'Trogir',20),(103,'Vis',20),(104,'Vrgorac',20),(105,'Imotski',20),(106,'Hvar',20),(107,'Komiža',20),(108,'Stari Grad',20),(109,'Pula',21),(110,'Pazin',21),(111,'Poreč',21),(112,'Rovinj',21),(113,'Umag',21),(114,'Buje',21),(115,'Buzet',21),(116,'Labin',21),(117,'Novigrad',21),(118,'Vodnjan',21),(119,'Dubrovnik',22),(120,'Korčula',22),(121,'Metković',22),(122,'Opuzen',22),(123,'Ploče',22),(124,'Čakovec',23),(125,'Mursko Središće',23),(126,'Prelog',23);
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-02-25 14:56:24
