-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 21, 2023 at 04:53 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `binari`
--

-- --------------------------------------------------------

--
-- Table structure for table `kontak`
--

CREATE TABLE `kontak` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `message` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kontak`
--

INSERT INTO `kontak` (`id`, `name`, `phone`, `email`, `message`) VALUES
(1, 'Rudi', '0892039238', 'banyunugaspt@gmail.com', 'halo saya ingin bekerjasama');

-- --------------------------------------------------------

--
-- Table structure for table `pklform`
--

CREATE TABLE `pklform` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `jeniskelamin` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pklform`
--

INSERT INTO `pklform` (`id`, `name`, `jeniskelamin`, `phone`, `email`) VALUES
(5, 'zaki', '', '00000', 'ahmad@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `startupform`
--

CREATE TABLE `startupform` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `startupform`
--

INSERT INTO `startupform` (`id`, `name`, `phone`, `email`) VALUES
(2, 'ajo', '1902301', 'ajo@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `trainingform`
--

CREATE TABLE `trainingform` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `trainingform`
--

INSERT INTO `trainingform` (`id`, `name`, `phone`, `email`) VALUES
(2, 'ubyx', '0892039238', 'banyusamuderapt@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `workshopform`
--

CREATE TABLE `workshopform` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `workshopform`
--

INSERT INTO `workshopform` (`id`, `name`, `phone`, `email`) VALUES
(6, 'uya', '019203', 'uya@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kontak`
--
ALTER TABLE `kontak`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pklform`
--
ALTER TABLE `pklform`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `startupform`
--
ALTER TABLE `startupform`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trainingform`
--
ALTER TABLE `trainingform`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `workshopform`
--
ALTER TABLE `workshopform`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kontak`
--
ALTER TABLE `kontak`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `pklform`
--
ALTER TABLE `pklform`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `startupform`
--
ALTER TABLE `startupform`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `trainingform`
--
ALTER TABLE `trainingform`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `workshopform`
--
ALTER TABLE `workshopform`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
