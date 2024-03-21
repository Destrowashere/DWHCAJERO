-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 21-03-2024 a las 23:32:38
-- Versión del servidor: 8.0.31
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `market`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cajero`
--

CREATE TABLE `cajero` (
  `id` int NOT NULL,
  `nombre` text COLLATE utf8mb4_general_ci NOT NULL,
  `carnet` varchar(10) COLLATE utf8mb4_general_ci NOT NULL,
  `fecharegistro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cajero`
--

INSERT INTO `cajero` (`id`, `nombre`, `carnet`, `fecharegistro`) VALUES
(1, 'Enrique', '4378545433', '2024-03-21 21:45:36'),
(2, 'Francisco', '8483875451', '2024-03-21 21:45:36'),
(3, 'Pedro', '9163547485', '2024-03-21 21:45:36'),
(4, 'Paño', '5437891243', '2024-03-21 21:59:35'),
(5, 'Paño', '5437891243', '2024-03-21 21:59:36'),
(6, 'Javier', '4868454546', '2024-03-21 22:00:32'),
(7, 'Julian', '7674644555', '2024-03-21 22:02:08');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id` int NOT NULL,
  `cajero` int NOT NULL,
  `cliente` text COLLATE utf8mb4_general_ci NOT NULL,
  `valor` decimal(10,0) NOT NULL,
  `fecha` date NOT NULL,
  `factura` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`id`, `cajero`, `cliente`, `valor`, `fecha`, `factura`) VALUES
(1, 1, '', 56700, '2024-03-19', 45635),
(2, 2, '', 7300, '2024-03-18', 94875),
(3, 1, '', 4990, '2024-03-14', 42242),
(4, 1, 'Juan Crlos', 666666, '2024-03-21', 56789876),
(5, 1, 'Pirobo3000', 4990, '2024-03-14', 11635),
(6, 3, 'SapoHijueouta', 113600, '2024-03-21', 23852);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cajero`
--
ALTER TABLE `cajero`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cliente` (`cajero`),
  ADD KEY `cliente_2` (`cajero`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cajero`
--
ALTER TABLE `cajero`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD CONSTRAINT `cajerofk` FOREIGN KEY (`cajero`) REFERENCES `cajero` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
