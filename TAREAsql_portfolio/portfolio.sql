-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 04-11-2021 a las 01:07:09
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `portfolio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `portfolio_colecciones`
--

CREATE TABLE IF NOT EXISTS `portfolio_colecciones` (
  `id_coleccion` int(3) NOT NULL,
  `nombre_coleccion` varchar(60) NOT NULL,
  `cantidad_diseños` int(3) NOT NULL,
  `carta_de_colores` int(3) NOT NULL,
  `cliente` varchar(60) NOT NULL,
  `direccion` varchar(60) NOT NULL,
  `celular` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `portfolio_colecciones`
--

INSERT INTO `portfolio_colecciones` (`id_coleccion`, `nombre_coleccion`, `cantidad_diseños`, `carta_de_colores`, `cliente`, `direccion`, `celular`) VALUES
(1, 'Colección de FLORES', 1, 5, 'transfer Daniel', 'Yapeyú', '11-1234-5690'),
(2, 'Colección PAMPA', 4, 5, 'Norflex S.A.', 'Catamarca 1438', '11-1254-4698'),
(3, 'Colección HOTELERIA', 5, 4, 'Surtex S.A.', 'Cochabamba 1107 ', '11-4590-0021'),
(4, 'Colección TANGO', 6, 5, 'Ruben Sublimados S.A.', 'Azcuenaga 9001', '11-1268-6130'),
(5, 'Colección URBANA', 3, 5, 'transfer Daniel', 'Yapeyú', '11-1234-5690'),
(6, 'Colección MARINO', 4, 5, 'Estampados rotativos S.A.', 'Saavedra 3825', '11- 4483-3688');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'vanesa', 'd93591bdf7860e1e4ee2fca799911215'),
(3, 'carlos', 'd93591bdf7860e1e4ee2fca799911215');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
