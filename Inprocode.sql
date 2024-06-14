-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-06-2024 a las 17:26:14
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE DATABASE IF NOT EXISTS inprocode;
USE inprocode;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `inprocode`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `title` varchar(45) NOT NULL,
  `date` date NOT NULL,
  `color` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `events`
--

INSERT INTO `events` (`id`, `title`, `date`, `color`, `type`) VALUES
(1, 'Inauguration', '2024-06-22', '#37d889', 'Gallery'),
(2, 'Inauguration', '2024-07-07', '#d8a537', 'Hotel'),
(5, 'Inauguration', '2024-07-06', '#d8a537', 'Gallery'),
(6, 'Inauguration', '2024-07-01', '#d8a537', 'Bar'),
(7, 'Inauguration', '2024-06-20', '#d8a537', 'Bar'),
(8, 'Conference', '2024-06-24', '#3788d8', 'Gallery'),
(9, 'Conference', '2024-06-22', '#3788d8', 'Offices'),
(10, 'Conference', '2024-06-27', '#3788d8', 'Offices'),
(11, 'Conference', '2024-07-04', '#3788d8', 'Remote'),
(12, 'Conference test', '2024-06-11', '#37d889', 'fgdjjdj'),
(13, 'Conference', '2024-06-28', '#3788d8', 'Gallery'),
(14, 'Meeting', '2024-06-24', '#37d889', 'Offices'),
(15, 'Meeting', '2024-06-26', '#37d889', 'Offices'),
(16, 'Meeting', '2024-07-02', '#37d889', 'Remote'),
(17, 'Meeting', '2024-06-28', '#37d889', 'Offices'),
(19, 'Guest', '2024-06-17', '#3788d8', 'Artist guest'),
(20, 'Conference', '2024-06-06', '#37d889', 'guio');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `markers`
--

CREATE TABLE `markers` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `longitude` float NOT NULL,
  `latitude` float NOT NULL,
  `category` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `markers`
--

INSERT INTO `markers` (`id`, `name`, `longitude`, `latitude`, `category`) VALUES
(1, 'Bar Exposicion', 2.18866, 41.3943, 'Bar'),
(2, 'El Pintor', 2.17596, 41.3832, 'Restaurant'),
(3, 'La Mostra', 2.15731, 41.3974, 'Restaurant'),
(4, 'El Cercle', 2.17439, 41.3848, 'Restaurant'),
(5, 'Musiu', 2.1685, 41.3922, 'Restaurant'),
(6, 'Antic Cafè', 2.1693, 41.3753, 'Restaurant'),
(7, 'Museum bar', 2.14509, 41.3958, 'Bar'),
(8, 'La Vietnamita', 2.18172, 41.3876, 'Restaurant'),
(9, 'La Federica', 2.16678, 41.3747, 'Bar'),
(10, 'Candy Darling', 2.16305, 41.3851, 'Bar'),
(11, 'Cinemateca', 2.16782, 41.3925, 'Bar'),
(12, 'Taber Cafe', 2.16205, 41.3818, 'Bar'),
(13, 'Sala Parés', 2.17295, 41.3829, 'Gallery'),
(14, 'BCM Art Gallery', 2.17751, 41.405, 'Gallery'),
(15, 'Cafetería Cometa', 2.16218, 41.3762, 'Bar'),
(16, 'The One Barcelona', 2.16318, 41.3963, 'Hotel'),
(17, 'Hotel Balmes', 2.15928, 41.3914, 'Hotel'),
(18, 'Claris Hotel & Spa', 2.16518, 41.3945, 'Hotel'),
(19, 'Granados 83', 2.15688, 41.392, 'Hotel'),
(20, 'Galeria SENDA', 2.17627, 41.3896, 'Gallery'),
(21, 'Bombon projects', 2.17917, 41.3909, 'Gallery'),
(22, 'Krucopia', 2.18376, 41.3864, 'Gallery'),
(23, 'Centro Cívico Casa Golferichs', 2.15668, 41.3815, 'Community center'),
(24, 'Centro Cultural Albareda', 2.17321, 41.3748, 'Community center'),
(25, 'Convento de San Agustín', 2.1817, 41.3887, 'Community center');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `type`, `location`) VALUES
(1, 'Pepe', 'test@test.com', 'admin', 'Barcelona'),
(2, 'Maria', 'test@test.com', 'admin', 'Barcelona'),
(3, 'Nuria', 'test@test.com', 'admin', 'Barcelona'),
(5, 'Enrique', 'test@test.com', 'admin', 'Barcelona'),
(6, 'David', 'test@test.com', 'user', 'Barcelona'),
(7, 'Alex', 'test@test.com', 'user', 'Barcelona'),
(8, 'Alba', 'test@test.com', 'user', 'Barcelona'),
(9, 'Ana', 'test@test.com', 'user', 'Madrid'),
(10, 'Lidia', 'test@test.com', 'user', 'Madrid'),
(11, 'Pau', 'test@test.com', 'user', 'Barcelona'),
(12, 'Elias', 'test@test.com', 'user', 'Barcelona'),
(13, 'Oscar', 'test@test.com', 'user', 'Madrid'),
(14, 'Joan', 'test@test.com', 'user', 'Madrid'),
(15, 'Juan', 'test@test.com', 'user', 'Madrid'),
(16, 'Illo', 'test@test.com', 'user', 'Sevilla'),
(17, 'Carlos', 'test@test.com', 'user', 'Sevilla'),
(27, 'alessandro', 'fffff@gggg.it', 'admin', 'espana');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `markers`
--
ALTER TABLE `markers`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `markers`
--
ALTER TABLE `markers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
