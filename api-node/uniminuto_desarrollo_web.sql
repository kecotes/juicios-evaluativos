-- -------------------------------------------------------------
-- TablePlus 5.9.0(538)
--
-- https://tableplus.com/
--
-- Database: uniminuto_desarrollo_web
-- Generation Time: 2024-04-06 17:45:52.9390
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


CREATE TABLE `actividad` (
  `id_actividad` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `fecha` date DEFAULT NULL,
  `tiempo_inicio` time DEFAULT NULL,
  `tiempo_final` time DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_actividad`),
  KEY `fk_actividad_usuario1_idx` (`usuario_id`),
  CONSTRAINT `fk_actividad_usuario1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

CREATE TABLE `actividad_item` (
  `id_actividad_item` int NOT NULL AUTO_INCREMENT,
  `actividad_id` int NOT NULL,
  `nombre` text COLLATE utf8mb3_spanish_ci,
  PRIMARY KEY (`id_actividad_item`),
  KEY `fk_actividad_item_actividad1_idx` (`actividad_id`),
  CONSTRAINT `fk_actividad_item_actividad1` FOREIGN KEY (`actividad_id`) REFERENCES `actividad` (`id_actividad`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

CREATE TABLE `usuario` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(90) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `nombre_usuario` text COLLATE utf8mb3_spanish_ci,
  `email` text COLLATE utf8mb3_spanish_ci,
  `contrasena` text COLLATE utf8mb3_spanish_ci,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

CREATE TABLE `usuario_token` (
  `id_usuario_token` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `token` text COLLATE utf8mb3_spanish_ci,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_usuario_token`),
  KEY `fk_usuario_token_usuario_idx` (`usuario_id`),
  CONSTRAINT `fk_usuario_token_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

INSERT INTO `actividad` (`id_actividad`, `usuario_id`, `fecha`, `tiempo_inicio`, `tiempo_final`, `created_at`, `updated_at`) VALUES
(1, 1, '2024-04-06', '08:00:00', '12:00:00', '2024-04-06 17:37:51', NULL);

INSERT INTO `actividad_item` (`id_actividad_item`, `actividad_id`, `nombre`) VALUES
(1, 1, 'Crear Backend'),
(2, 1, 'Crear DB'),
(3, 1, 'Mapear DB');

INSERT INTO `usuario` (`id_usuario`, `nombre`, `nombre_usuario`, `email`, `contrasena`, `created_at`, `updated_at`) VALUES
(1, 'Nelson Hernández', 'nelson.hernandez', 'nelson.hernandez-g@uniminuto.edu.co', 'e10adc3949ba59abbe56e057f20f883e', '2024-04-06 17:06:55', '2024-04-06 17:07:48');

INSERT INTO `usuario_token` (`id_usuario_token`, `usuario_id`, `token`, `created_at`, `updated_at`) VALUES
(1, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzEyNDQyMjA5LCJleHAiOjE3MTI1Mjg2MDl9.VwhRP7XKyN0Dk4eqi_dlgH2FqdR7Ih__Zssu57vYtw4', '2024-04-06 17:23:29', '2024-04-06 17:23:29');



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;