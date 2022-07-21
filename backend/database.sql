-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: guitares.com
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.20.04.3

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
-- Table structure for table `guitar`
--

DROP TABLE IF EXISTS `guitar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `guitar` (
  `id` int NOT NULL AUTO_INCREMENT,
  `picture` varchar(512) NOT NULL,
  `label` varchar(32) NOT NULL,
  `brand` varchar(64) NOT NULL,
  `price` int NOT NULL,
  `style` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guitar`
--

LOCK TABLES `guitar` WRITE;
/*!40000 ALTER TABLE `guitar` DISABLE KEYS */;
INSERT INTO `guitar` VALUES (1,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/334572.webp','Santos Series C-40SCE BK','Harley Benton',169,'Classic'),(2,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/459355.webp','Classic 4/4 Guitar','Thomann',120,'Classic'),(3,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/462511.webp','Les Paul Standard 60s UB','Gibson',2290,'Electric'),(5,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/544035.webp','Affinity Strat HSS SVB FSR','Squier',269,'Electric'),(6,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/521102.webp','Fusion-III HSH EB FBLB','Harley Benton',298,'Electric'),(7,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/515179.webp','ML1 Modern Rainstorm Blue','Chapmans Guitar',759,'Electric'),(8,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/536886.webp','Exile X Floyd Black Satin','Dean',473,'Electric'),(9,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/405978.webp','Guthrie Govan HSH Cooked Ash','Charvel',3698,'Electric'),(10,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/533083.webp','Hernandez 2-Ovangkol','Alberto',364,'Classic'),(11,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/494055.webp','Kodaira AST-100','Asturias',1529,'Classic'),(12,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/457725.webp','CC-60SCE Nat WN','Fender',259,'Folk'),(13,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/462334.webp','Roadhouse Faded Black A/E','Art & Lutherie',819,'Folk'),(14,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/460211.webp','L-00 Deluxe Rosewood Burst','Gibson',3290,'Folk'),(15,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/483250.webp','GS Mini-e Koa Plus','Taylor',1099,'Folk'),(16,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/444422.webp','GN51CE-NAT','Takamine',459,'Folk'),(17,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/459703.webp','Kanilea AS-4 Soprano','Islander',126,'Ukulele'),(18,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/457322.webp','CV 70s Jazz Bass MN BK','Squier',399,'Electric Bass'),(19,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/437403.webp','CB-60SCE A-Bass Black 2018','Fender',266,'Acoustic Bass'),(20,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/400266.webp','Baby Taylor BTe Koa','Taylor',649,'Travel Guitar'),(21,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/545681.webp','G9500 Ltd Edition Jim Dandy','Gretch',199,'Folk'),(22,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/483932.webp','LTD F-204 BLKS','ESP',579,'Electric Bass'),(23,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/419217.webp','Thunderbird 60´s Bass TS','Epiphone',645,'Electric Bass'),(24,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/340705.webp','TB-70VS Deluxe Series','Harley Benton',198,'Electric Bass'),(25,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/468520.webp','CN-140SCE Thinline Nat B-Stock','Fender',299,'Classic'),(26,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/248589.webp','C40M','Yamaha',149,'Classic'),(27,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/483208.webp','NCX5 NAT','Yamaha',1769,'Classic'),(28,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/469086.webp','TSP148NCNS Thinline','Takamine',1233,'Classic'),(29,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/165297.webp','CG300CE NT B-Stock','Harley Benton',81,'Classic'),(30,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/479177.webp','ESC110 Educational 4/4 WN','Fender',119,'Classic'),(31,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/518121.webp','G-00 Natural Generation','Gibson',988,'Folk'),(32,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/482827.webp','L-00 Original Ebony','Gibson',2544,'Folk'),(33,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/478658.webp','Little CJ Light Burst','Cort',298,'Folk'),(34,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/539512.webp','Luce 100C Natural Satin','Cort',228,'Folk'),(35,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/443702.webp','Grace VanderWaal Signature Uke','Fender',175,'Ukulele'),(36,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/482919.webp','Fullerton Jazzmaster Uku OW','Fender',149,'Ukulele'),(37,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/290730.webp','DC-Ukulele CH','Harley Benton',59,'Ukulele'),(38,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/468311.webp','Alien Deluxe 4 Hybrid Thinline','Warwick',899,'Acoustic Bass'),(39,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/444416.webp','GB30CE-N2 Natural','Takamine',529,'Acoustic Bass'),(40,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/469015.webp','Jumbo Junior Bass E ACB','Guild',498,'Acoustic Bass'),(41,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/439173.webp','Player Series Tele MN BTB','Fender',745,'Electric'),(42,'https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/410797.webp','GS-Travel-E Mahogany','Harley Benton',129,'Travel Guitar');
/*!40000 ALTER TABLE `guitar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logo`
--

DROP TABLE IF EXISTS `logo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `label` varchar(512) NOT NULL,
  `picture` varchar(512) NOT NULL,
  `link` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logo`
--

LOCK TABLES `logo` WRITE;
/*!40000 ALTER TABLE `logo` DISABLE KEYS */;
INSERT INTO `logo` VALUES (1,'Fender','https://thumbs.static-thomann.de/thumb//thumb270x160/pics/herstlogos/fender.webp','https://www.fender.com/fr-FR/start'),(3,'Gibson','https://thumbs.static-thomann.de/thumb//thumb270x160/pics/herstlogos/gibson.webp','https://www.gibson.com/en-US/'),(4,'Yamaha','https://thumbs.static-thomann.de/thumb//thumb270x160/pics/herstlogos/yamaha.webp','https://fr.yamaha.com/fr/products/musical_instruments/index.html'),(5,'Harley Benton','https://thumbs.static-thomann.de/thumb//thumb270x160/pics/herstlogos/harley_benton.webp','https://harleybenton.com/'),(6,'Thomann','https://thumbs.static-thomann.de/thumb//thumb270x160/pics/herstlogos/thomann.webp','https://www.thomann.de/fr/index.html'),(7,'Squier','https://thumbs.static-thomann.de/thumb//thumb270x160/pics/herstlogos/squier.webp','https://www.fender.com/fr-FR/start?rl=fr'),(8,'ESP','https://thumbs.static-thomann.de/thumb//thumb270x160/pics/herstlogos/esp.webp','https://www.espguitars.com/main'),(9,'Epiphone','https://thumbs.static-thomann.de/thumb//thumb270x160/pics/herstlogos/epiphone.webp','https://www.epiphone.com/en-US/');
/*!40000 ALTER TABLE `logo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-21 21:16:28