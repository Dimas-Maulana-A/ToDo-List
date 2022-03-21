-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 21 Mar 2022 pada 02.51
-- Versi server: 10.4.22-MariaDB
-- Versi PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_praktikum3`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `praktikum3`
--

CREATE TABLE `praktikum3` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `deadline` date NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `praktikum3`
--

INSERT INTO `praktikum3` (`id`, `title`, `deadline`, `createdAt`, `updatedAt`) VALUES
(1, 'plan 4', '2022-10-03', '2022-03-19', '2022-03-21'),
(9, 'plan 3', '2022-03-10', '2022-03-20', '2022-03-20'),
(19, 'plan 1', '2022-03-21', '2022-03-21', '2022-03-21'),
(20, 'Hallo', '2022-04-01', '2022-03-21', '2022-03-21');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `praktikum3`
--
ALTER TABLE `praktikum3`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `praktikum3`
--
ALTER TABLE `praktikum3`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
