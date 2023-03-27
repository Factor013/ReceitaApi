-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: receitas
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `receitas`
--

Create database receitas;
use receitas;

DROP TABLE IF EXISTS `receitas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `receitas` (
  `idreceitas` int NOT NULL AUTO_INCREMENT,
  `nome_receita` varchar(45) NOT NULL,
  `ingredientes` longtext NOT NULL,
  `modo_preparo` longtext NOT NULL,
  `usuarios_idusuarios` int NOT NULL,
  `tipo_receita_idtipo_receita` int NOT NULL,
  PRIMARY KEY (`idreceitas`),
  KEY `fk_receitas_usuarios_idx` (`usuarios_idusuarios`),
  KEY `fk_receitas_tipo_receita1_idx` (`tipo_receita_idtipo_receita`),
  CONSTRAINT `fk_receitas_tipo_receita1` FOREIGN KEY (`tipo_receita_idtipo_receita`) REFERENCES `tipo_receita` (`idtipo_receita`),
  CONSTRAINT `fk_receitas_usuarios` FOREIGN KEY (`usuarios_idusuarios`) REFERENCES `usuarios` (`idusuarios`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receitas`
--

LOCK TABLES `receitas` WRITE;
/*!40000 ALTER TABLE `receitas` DISABLE KEYS */;
INSERT INTO `receitas` VALUES (3,'Salada de MANDIOCA','2 bananas 1 maçã 1 laranja 1 kiwi 1 xícara de uvas 1/4 xícara de suco de laranja','Descasque as bananas e corte em rodelas.Corte a maçã em cubinhos.Descasque a laranja e separe os gomos.Descasque o kiwi e corte em rodelas.Lave as uvas e retire os caroços.Coloque todas as frutas em uma tigela grande.Regue com o suco de laranja e misture delicadamente.Leve à geladeira por cerca de 30 minutos antes de servir.',1,2),(4,'Salada de Frutas','2 bananas 1 maçã 1 laranja 1 kiwi 1 xícara de uvas 1/4 xícara de suco de laranja','Descasque as bananas e corte em rodelas.Corte a maçã em cubinhos.Descasque a laranja e separe os gomos.Descasque o kiwi e corte em rodelas.Lave as uvas e retire os caroços.Coloque todas as frutas em uma tigela grande.Regue com o suco de laranja e misture delicadamente.Leve à geladeira por cerca de 30 minutos antes de servir.',3,3),(5,'Salada de Frutas','2 bananas 1 maçã 1 laranja 1 kiwi 1 xícara de uvas 1/4 xícara de suco de laranja','Descasque as bananas e corte em rodelas.Corte a maçã em cubinhos.Descasque a laranja e separe os gomos.Descasque o kiwi e corte em rodelas.Lave as uvas e retire os caroços.Coloque todas as frutas em uma tigela grande.Regue com o suco de laranja e misture delicadamente.Leve à geladeira por cerca de 30 minutos antes de servir.',2,2),(6,'Salada de Frutas','2 bananas 1 maçã 1 laranja 1 kiwi 1 xícara de uvas 1/4 xícara de suco de laranja','Descasque as bananas e corte em rodelas.Corte a maçã em cubinhos.Descasque a laranja e separe os gomos.Descasque o kiwi e corte em rodelas.Lave as uvas e retire os caroços.Coloque todas as frutas em uma tigela grande.Regue com o suco de laranja e misture delicadamente.Leve à geladeira por cerca de 30 minutos antes de servir.',2,3),(7,'Salada de Frutas','2 bananas 1 maçã 1 laranja 1 kiwi 1 xícara de uvas 1/4 xícara de suco de laranja','Descasque as bananas e corte em rodelas.Corte a maçã em cubinhos.Descasque a laranja e separe os gomos.Descasque o kiwi e corte em rodelas.Lave as uvas e retire os caroços.Coloque todas as frutas em uma tigela grande.Regue com o suco de laranja e misture delicadamente.Leve à geladeira por cerca de 30 minutos antes de servir.',3,2);
/*!40000 ALTER TABLE `receitas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_receita`
--

DROP TABLE IF EXISTS `tipo_receita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_receita` (
  `idtipo_receita` int NOT NULL AUTO_INCREMENT,
  `tipo_receita` varchar(255) NOT NULL,
  PRIMARY KEY (`idtipo_receita`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_receita`
--

LOCK TABLES `tipo_receita` WRITE;
/*!40000 ALTER TABLE `tipo_receita` DISABLE KEYS */;
INSERT INTO `tipo_receita` VALUES (2,'Rapida'),(3,'Lenta');
/*!40000 ALTER TABLE `tipo_receita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idusuarios` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(45) NOT NULL,
  PRIMARY KEY (`idusuarios`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Factor013','$2a$10$Ew34Gg3mSMZt..6KN.wazuMKKqEc10vwJKneXMsue006dgpf2XOVe','factor@gmail.com'),(2,'Rafael','$2a$10$QLDNVS9tZBcDoR2nPjEDU.rhDKOodgRBlAKkiuJaTw6ESp1ZsWT1C','rafael@gmail.com'),(3,'Rene GAY','$2a$10$J8A08kAvBorK3sVqoVkoN.ZE./fh4O5bCfqHmS1Fw8ra2s1QmG31q','rene@gmail.com'),(4,'Rene GAYZOLA','$2a$10$twBAgpVbYGafhPE/pLRTyOY2woY8utoVOPAh4bgqkWRTqdrzIRecC','rene@gmaiçl.com'),(5,'DANTE GAYZOLA','$2a$10$h2a608fpPOCLy9X3JazPrOXnYC/s4aOw1gih44dGkKIp4yCbj/Mge','TESTE@gmail.com'),(6,'DANTE gGAYZ','$2a$10$Hy08g/DU.9l9k4/TQXU/ru8LlXVboAafCiQrRDSlDpaE88gT1Djli','TESTANDO@gmail.com');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'receitas'
--

--
-- Dumping routines for database 'receitas'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-27 11:38:07
