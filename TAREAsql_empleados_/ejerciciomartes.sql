-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 02-11-2021 a las 13:45:19
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `ejerciciomartes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE IF NOT EXISTS `alumnos` (
  `nro legajo` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `domicilio` varchar(80) NOT NULL,
  `edad` int(3) NOT NULL,
  `celular` varchar(40) NOT NULL,
  PRIMARY KEY (`nro legajo`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`nro legajo`, `nombre`, `apellido`, `email`, `domicilio`, `edad`, `celular`) VALUES
(1, 'carlos', 'lopez', 'cl@gmail.com', '', 34, '11-1234-5690'),
(2, 'valentino', 'terranova', 'vt@gmail.com', '', 25, '11-4321-5609'),
(3, 'maria', 'sanchez', 'ms@gmail.com', '', 30, '11-1254-4698');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE IF NOT EXISTS `empleados` (
  `id_emp` int(11) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `apellido` varchar(60) NOT NULL,
  `trabajo` varchar(60) NOT NULL,
  `edad` int(3) NOT NULL,
  `salario` int(8) NOT NULL,
  `mail` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id_emp`, `nombre`, `apellido`, `trabajo`, `edad`, `salario`, `mail`) VALUES
(1, 'Juan', 'Hagan', 'Programador Senior', 32, 120000, 'juan_hagan@bignet.com'),
(2, 'Gonzalo', 'Pillai', 'Programador Senior', 32, 110000, 'g_pillai@bignet.com'),
(3, 'Ana', 'Dharma', 'Desarrollador Web', 27, 90000, 'ana@bignet.com'),
(4, 'Maria', 'Anchor', 'Desarrollador Web', 26, 85000, 'mary@bignet.com'),
(5, 'Alfredo', 'Fernandez', 'Programador', 31, 75000, 'af@bignet.com'),
(6, 'Juan', 'Aguero', 'Programador', 34, 80000, 'juan@bignet.com'),
(7, 'Eduardo', 'Sacan', 'Programador', 25, 75000, 'eddie@bignet.com'),
(8, 'Alejandro', 'Nanda', 'Programador', 32, 70000, 'alenanda@bignet.com'),
(10, 'Paublo', 'Simon', 'Especialista Multimedia', 43, 85000, 'ps@bignet.com'),
(11, 'Arturo', 'Hernandez', 'Especialista Multimedia', 32, 75000, 'arturo@bignet.com'),
(12, 'Jimena', 'Cazado', 'Diseñador Web Senior', 32, 110000, 'jimena@bignet.com'),
(13, 'Roberto', 'Luis', 'Administrador de Sistemas', 35, 100000, 'roberto@bignet.com'),
(14, 'Daniel', 'Gutierrez', 'Administrador de Sistemas', 34, 900000, 'daniel@bignet.com'),
(15, 'Miguel', 'Harper', 'Ejecutivo de Ventas Senior', 36, 120000, 'miguel@bignet.com'),
(16, 'Monica', 'Sanchez', 'Ejecutivo de Ventas', 30, 90000, 'monica@bignet.com'),
(17, 'Alicia', 'Simlai', 'Ejecutivo de Ventas', 27, 70000, 'alicia@bignet.com'),
(18, 'Jose', 'Iriarte', 'Ejecutivo de Ventas', 27, 72000, 'jose@bignet.com'),
(19, 'Sabrina', 'Allende', 'Gerente de Soporte Tecnico', 32, 200000, 'sabrina@bignet.com'),
(20, 'Pedro', 'Campion', 'Gerente de Finanzas', 36, 220000, 'pedro@bignet.com'),
(21, 'Mariano', 'Dharma', 'Presidente', 28, 300000, 'mariano@bignet.com');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
