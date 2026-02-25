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
  `status` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`post_id`),
  KEY `ix_post_location` (`location_id`),
  KEY `ix_post_user` (`user_id`),
  KEY `ix_post_product` (`product_id`),
  KEY `ix_post_price` (`price`),
  CONSTRAINT `fk_post_location` FOREIGN KEY (`location_id`) REFERENCES `location` (`location_id`) ON DELETE SET NULL,
  CONSTRAINT `fk_post_product` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE SET NULL,
  CONSTRAINT `fk_post_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (34,'EDITED Iphone','Prodajem Apple iPhone 15 Pro s 256GB memorije u crnoj boji. Mobitel je u odličnom stanju i potpuno ispravan. Od prvog dana korišten sa zaštitnom maskom i staklom. Dolazi s originalnom kutijom i USB-C kabelom za punjenje. Zdravlje baterije 88%.',550.00,'EUR',31,9,4,'2026-02-16 18:21:35','2026-02-25 13:38:35',0),(35,'Sony WH-1000XM5 slušalice','Prodajem Sony WH-1000XM5 bežične slušalice (crne).\nAktivna eliminacija šuma.\nDo 30h baterije, brzo punjenje (3min = 3h).\nHi-Res audio (LDAC), 40mm drajveri, EQ prilagodba preko appa.\nStanje: Jako dobro (jastučići čisti, bez tragova).\nUključeno: Slušalice i kutija.\n',210.00,'EUR',32,9,3,'2026-02-16 18:32:45','2026-02-25 13:38:46',0),(36,'SAMSUNG Neo QLED TV QE65QN90C','tv u stanju novog\nprodaje se radi prelaska na OLED\n\nhttps://www.samsung.com/hr/tvs/qled-tv/qn90c-65-inch-neo-qled-4k-smart-tv-qe65qn90catxxh/\n\nDijagonala zaslona: 165cm, 65\"\nRezolucija: 4K UHD TV (3840 X 2160)\nDigitalni prijamnik: DVB-T2/C/S2x2\nVrsta pozadinskog osvjetljenja: Mini LED\nProcesor: Neo Quantum processor 4K\nPQI (Picture Quality Index): 4600\nHDR (High Dynamic Range): Quantum HDR 2000\nHDR10+\nHLG\nQuantum Matrix Technology\nWide Viewing Angle Ultra\n100% color volume\nUltimate UHD Dimming\nContrast Enhancer\nFilm Mode\nAnti Reflective Screen\nDolby Digital Plus\n\nIzlazna snaga zvuka (RMS): 60W\nVrsta zvučnika: 4.2.2.\nBluetooth Audio\nAdaptive Sound\nSmart TV: Tizen 5.0\nInternet preglednik\nEco sensor\nGame mode\nAmbient Mode\n\nCI+ (1.4)\nHDMI: 4\nUSB: 2\nEthernet (LAN)\nDigital Audio Out (Optical)\nWifi\neARC\nBluetooth\n\nsamsung galaxy s23 s24 s25 iphone samsung neo qled samsung oled sony bravia oled hisense lg c4 c5 g4 g5',690.00,'EUR',33,11,1,'2026-02-16 18:39:21','2026-02-25 13:39:41',0),(37,'Random post','random post description random post description random post description random post description random post description random post description\nrandom post description random post description random post description random post description',1450.99,'EUR',34,9,6,'2026-02-19 07:10:58','2026-02-19 07:10:58',1),(38,'Random post 2','Random post 2 Random post 2\nRandom post 2 Random post 2\nRandom post 2 Random post 2',1234.00,'EUR',35,9,5,NULL,'2026-02-25 13:40:18',0),(39,'EDITED','EDITED',530.00,'EUR',36,9,4,NULL,'2026-02-24 09:06:14',0),(49,'zzzzzzzzzzzzzzzzzzz','Editing still work needed',450.00,'EUR',46,9,4,NULL,'2026-02-24 09:00:10',0),(50,'Testing post','POST POST ',12345.00,'EUR',47,9,3,NULL,'2026-02-24 09:05:40',0),(59,'zz','zz',1.00,'EUR',56,9,3,NULL,'2026-02-24 09:08:55',0),(60,'Testing new post','1234',123.00,'EUR',57,9,4,'2026-02-24 08:47:32','2026-02-24 09:01:11',0),(61,'aaaaaaaaaaaaaa','aaaaaaaaaaaaaaaaaaaa',500.00,'EUR',58,9,5,'2026-02-24 09:13:54','2026-02-24 09:22:15',1),(62,'zzz','zzz',145.00,'EUR',59,9,3,'2026-02-25 11:44:44','2026-02-25 11:46:13',0),(63,'zzz','zzz',123.00,'EUR',60,9,4,'2026-02-25 13:33:07','2026-02-25 13:33:07',1),(64,'post post edited','post post ',667.00,'EUR',61,9,2,'2026-02-25 13:33:55','2026-02-25 13:38:10',1),(65,'zzz','zzz',3333.00,'EUR',62,9,4,'2026-02-25 13:41:02','2026-02-25 13:41:02',1),(66,'test','test',333.00,'EUR',63,9,3,'2026-02-25 13:41:41','2026-02-25 13:47:12',1),(67,'adad','asdasd',33.00,'EUR',64,9,4,'2026-02-25 13:42:11','2026-02-25 13:48:50',1),(68,'different user post','asdasd',5600.00,'EUR',65,11,4,'2026-02-25 13:51:27','2026-02-25 13:51:27',1),(69,'different user cant edit','asdasd',131.00,'EUR',66,11,5,'2026-02-25 13:52:51','2026-02-25 13:52:51',1);
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
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
