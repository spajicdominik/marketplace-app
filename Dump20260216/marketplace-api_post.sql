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
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `post_id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(250) NOT NULL,
  `description` text,
  `price` decimal(12,2) DEFAULT NULL,
  `currency` char(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'EUR',
  `location_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `product_id` bigint DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`post_id`),
  KEY `ix_post_location` (`location_id`),
  KEY `ix_post_user` (`user_id`),
  KEY `ix_post_product` (`product_id`),
  KEY `ix_post_price` (`price`),
  CONSTRAINT `fk_post_location` FOREIGN KEY (`location_id`) REFERENCES `location` (`location_id`) ON DELETE SET NULL,
  CONSTRAINT `fk_post_product` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE SET NULL,
  CONSTRAINT `fk_post_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (34,'Apple iPhone 15 Pro 256GB crni','Prodajem Apple iPhone 15 Pro s 256GB memorije u crnoj boji. Mobitel je u odličnom stanju i potpuno ispravan. Od prvog dana korišten sa zaštitnom maskom i staklom. Dolazi s originalnom kutijom i USB-C kabelom za punjenje. Zdravlje baterije 88%.',550.00,'EUR',31,9,4,'2026-02-16 19:21:35','2026-02-16 19:21:35'),(35,'Sony WH-1000XM5 slušalice','Prodajem Sony WH-1000XM5 bežične slušalice (crne).\nAktivna eliminacija šuma.\nDo 30h baterije, brzo punjenje (3min = 3h).\nHi-Res audio (LDAC), 40mm drajveri, EQ prilagodba preko appa.\nStanje: Jako dobro (jastučići čisti, bez tragova).\nUključeno: Slušalice i kutija.\n',210.00,'EUR',32,9,3,'2026-02-16 19:32:45','2026-02-16 19:32:45'),(36,'SAMSUNG Neo QLED TV QE65QN90C','tv u stanju novog\nprodaje se radi prelaska na OLED\n\nhttps://www.samsung.com/hr/tvs/qled-tv/qn90c-65-inch-neo-qled-4k-smart-tv-qe65qn90catxxh/\n\nDijagonala zaslona: 165cm, 65\"\nRezolucija: 4K UHD TV (3840 X 2160)\nDigitalni prijamnik: DVB-T2/C/S2x2\nVrsta pozadinskog osvjetljenja: Mini LED\nProcesor: Neo Quantum processor 4K\nPQI (Picture Quality Index): 4600\nHDR (High Dynamic Range): Quantum HDR 2000\nHDR10+\nHLG\nQuantum Matrix Technology\nWide Viewing Angle Ultra\n100% color volume\nUltimate UHD Dimming\nContrast Enhancer\nFilm Mode\nAnti Reflective Screen\nDolby Digital Plus\n\nIzlazna snaga zvuka (RMS): 60W\nVrsta zvučnika: 4.2.2.\nBluetooth Audio\nAdaptive Sound\nSmart TV: Tizen 5.0\nInternet preglednik\nEco sensor\nGame mode\nAmbient Mode\n\nCI+ (1.4)\nHDMI: 4\nUSB: 2\nEthernet (LAN)\nDigital Audio Out (Optical)\nWifi\neARC\nBluetooth\n\nsamsung galaxy s23 s24 s25 iphone samsung neo qled samsung oled sony bravia oled hisense lg c4 c5 g4 g5',690.00,'EUR',33,11,1,'2026-02-16 19:39:21','2026-02-16 19:39:21');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
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
