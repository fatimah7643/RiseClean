-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 03, 2026 at 02:38 PM
-- Server version: 8.4.3
-- PHP Version: 8.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `riseclean_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `activity_logs`
--

CREATE TABLE `activity_logs` (
  `id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `activity_type` varchar(50) NOT NULL,
  `description` text,
  `ip_address` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `activity_logs`
--

INSERT INTO `activity_logs` (`id`, `user_id`, `activity_type`, `description`, `ip_address`, `created_at`) VALUES
(1, 1, 'user_registered', 'New user registered to RiseClean platform', '::1', '2026-01-15 14:55:09'),
(2, 1, 'login', 'User logged in', '::1', '2026-01-15 15:18:23'),
(3, 1, 'logout', 'User logged out', '::1', '2026-01-15 15:18:41'),
(4, 1, 'login', 'User logged in', '::1', '2026-01-15 15:19:18'),
(5, 1, 'logout', 'User logged out', '::1', '2026-01-15 15:22:01'),
(6, 2, 'login', 'User logged in', '::1', '2026-01-15 15:22:25'),
(7, 2, 'logout', 'User logged out', '::1', '2026-01-15 15:49:32'),
(8, 1, 'login', 'User logged in', '::1', '2026-01-15 15:49:57'),
(9, 1, 'login', 'User logged in', '::1', '2026-01-16 02:09:13'),
(10, 1, 'logout', 'User logged out', '::1', '2026-01-16 02:45:10'),
(11, 2, 'login', 'User logged in', '::1', '2026-01-16 02:45:19'),
(12, 2, 'logout', 'User logged out', '::1', '2026-01-16 02:52:27'),
(13, 1, 'login', 'User logged in', '::1', '2026-01-16 02:52:35'),
(14, 2, 'login', 'User logged in', '::1', '2026-01-16 02:58:06'),
(15, 2, 'create_quiz_question', 'Created new quiz question for module: Memilah Sampah sebagai Kebiasaan Peduli Lingkungan', '::1', '2026-01-16 04:47:59'),
(16, 1, 'login', 'User logged in', '::1', '2026-01-17 06:53:50'),
(17, 2, 'login', 'User logged in', '::1', '2026-01-17 06:55:36'),
(18, 1, 'login', 'User logged in', '::1', '2026-01-18 09:08:17'),
(19, 2, 'login', 'User logged in', '::1', '2026-01-18 09:09:08'),
(20, 2, 'logout', 'User logged out', '::1', '2026-01-18 10:15:48'),
(21, 2, 'login', 'User logged in', '::1', '2026-01-18 10:16:05'),
(22, 1, 'login', 'User logged in', '::1', '2026-01-24 14:50:33'),
(23, 1, 'login', 'User logged in', '::1', '2026-01-25 06:47:03'),
(24, 1, 'logout', 'User logged out', '::1', '2026-01-25 07:02:21'),
(25, 1, 'login', 'User logged in', '::1', '2026-01-25 07:11:53'),
(26, 2, 'login', 'User logged in', '::1', '2026-01-25 07:19:30'),
(27, 2, 'create_quiz_question', 'Created new quiz question for module: Ayo Jaga Kebersihan', '::1', '2026-01-25 07:29:16'),
(28, 2, 'create_quiz_question', 'Created new quiz question for module: Ayo Jaga Kebersihan', '::1', '2026-01-25 07:30:05'),
(29, 2, 'create_quiz_question', 'Created new quiz question for module: Ayo Jaga Kebersihan', '::1', '2026-01-25 07:30:58'),
(30, 1, 'login', 'User logged in', '::1', '2026-01-29 03:01:58'),
(31, 1, 'login', 'User logged in', '::1', '2026-01-31 14:58:35'),
(32, 1, 'logout', 'User logged out', '::1', '2026-01-31 15:15:02'),
(33, NULL, 'login', 'User logged in', '::1', '2026-01-31 15:15:21');

-- --------------------------------------------------------

--
-- Table structure for table `challenges`
--

CREATE TABLE `challenges` (
  `challenge_id` int NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` text,
  `xp_reward` int DEFAULT '20',
  `point_reward` int DEFAULT '10',
  `difficulty` enum('easy','medium','hard') DEFAULT 'medium',
  `challenge_type` enum('daily','special','weekly') DEFAULT 'daily',
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `challenges`
--

INSERT INTO `challenges` (`challenge_id`, `title`, `description`, `xp_reward`, `point_reward`, `difficulty`, `challenge_type`, `start_date`, `end_date`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Kumpulkan Minyak Goreng Bekas', 'Kumpulkan Minyak Goreng Bekas Sebanyak 5 Liter Kemudian anda bisa menukarkan dan Klaim Poin Besar Untuk akun RiseClean anda dengan begitu anda akan semakin banyak mendapatkan Reward Menarik dari RiseClean!', 50, 80, 'medium', 'weekly', '2026-01-25', '2026-02-01', 1, '2026-01-25 07:39:41', '2026-01-25 07:39:41'),
(2, 'Pilah Pilih Do IT 3R', 'Pilih Sampah berdasarkan Jenis nya', 20, 10, 'easy', 'weekly', '2026-01-25', '2026-02-01', 1, '2026-01-25 07:43:38', '2026-01-25 07:43:38');

-- --------------------------------------------------------

--
-- Table structure for table `education_modules`
--

CREATE TABLE `education_modules` (
  `module_id` int NOT NULL,
  `title` varchar(100) NOT NULL,
  `content` text,
  `xp_reward` int DEFAULT '10',
  `point_reward` int DEFAULT '5',
  `difficulty` enum('easy','medium','hard') DEFAULT 'medium',
  `category` varchar(50) DEFAULT NULL,
  `duration_minutes` int DEFAULT '10',
  `is_active` tinyint(1) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `education_modules`
--

INSERT INTO `education_modules` (`module_id`, `title`, `content`, `xp_reward`, `point_reward`, `difficulty`, `category`, `duration_minutes`, `is_active`, `created_at`, `updated_at`) VALUES
(5, 'Ayo Jaga Kebersihan', 'Kebersihan Diri\r\n\r\nKebersihan diri adalah langkah awal menjaga kesehatan tubuh dan lingkungan sekitar. Kebiasaan sederhana seperti mandi teratur, mencuci tangan dengan sabun, memotong kuku, dan mengganti pakaian bersih dapat mencegah penyebaran kuman dan penyakit.\r\n\r\nContoh penerapan:\r\n\r\n1. Mencuci tangan sebelum dan sesudah makan\r\n2. Menjaga kebersihan gigi dan mulut\r\n3. Tidak membuang sampah sembarangan setelah beraktivitas\r\n\r\n Kebersihan Lingkungan\r\n\r\nLingkungan yang bersih menciptakan suasana nyaman, sehat, dan aman. Lingkungan kotor dapat menjadi sumber penyakit, bau tidak sedap, serta merusak keindahan sekitar.\r\n\r\nContoh penerapan\r\n\r\n1. Menyapu dan membersihkan rumah secara rutin\r\n2. Membersihkan selokan agar tidak tersumbat\r\n3. Ikut kerja bakti membersihkan lingkungan\r\n\r\n\r\nSampah dan Permasalahannya\r\n\r\nSampah adalah sisa aktivitas manusia yang sudah tidak digunakan. Jika tidak dikelola dengan baik, sampah dapat mencemari tanah, air, dan udara.\r\n\r\nDampak sampah yang tidak terkelola\r\n\r\n1. Menyebabkan banjir\r\n2. Menjadi sarang penyakit\r\n3. Merusak ekosistem\r\n\r\n\r\n\r\nJenis-Jenis Sampah\r\n\r\n1. Sampah Organik\r\n   Sampah yang mudah terurai secara alami, seperti sisa makanan, daun kering, dan kulit buah.\r\n\r\n2. Sampah Anorganik\r\n   Sampah yang sulit terurai, seperti plastik, kaca, dan kaleng.\r\n\r\n3. Sampah B3 (Berbahaya dan Beracun)\r\n   Sampah yang mengandung zat berbahaya, seperti baterai, obat kadaluarsa, dan limbah kimia.\r\n\r\n\r\nCara Mengelola Sampah dengan Baik\r\n\r\nPengelolaan sampah dapat dilakukan dengan prinsip 3R\r\n\r\n1. Reduce (Mengurangi): Mengurangi penggunaan barang sekali pakai\r\n2. Reuse (Menggunakan kembali): Memanfaatkan barang yang masih bisa digunakan\r\n3. Recycle (Mendaur ulang): Mengolah sampah menjadi barang baru\r\n\r\nContoh penerapan:\r\n\r\n1. Membawa botol minum sendiri\r\n2. Menggunakan tas belanja kain\r\n3. Memilah sampah sesuai jenisnya\r\n\r\n\r\n\r\nPeran Individu dalam Menjaga Kebersihan\r\n\r\nSetiap individu memiliki peran penting dalam menjaga kebersihan. Perubahan kecil yang dilakukan secara konsisten dapat memberikan dampak besar bagi lingkungan.\r\n\r\nAksi sederhana\r\n\r\n1. Tidak membuang sampah sembarangan\r\n2. Mengingatkan orang lain untuk menjaga kebersihan\r\n3. Ikut serta dalam kegiatan peduli lingkungan\r\n\r\n\r\nPenutup\r\n\r\nMenjaga kebersihan bukan hanya tanggung jawab satu pihak, tetapi kewajiban bersama. Dengan kebiasaan hidup bersih dan pengelolaan sampah yang baik, kita dapat menciptakan lingkungan yang sehat, nyaman, dan berkelanjutan.\r\n', 5, 5, 'easy', 'General', 10, 1, '2026-01-25 07:27:10', '2026-01-25 07:27:10');

-- --------------------------------------------------------

--
-- Table structure for table `failed_login_attempts`
--

CREATE TABLE `failed_login_attempts` (
  `id` int NOT NULL,
  `username` varchar(50) NOT NULL,
  `ip_address` varchar(45) NOT NULL,
  `attempts` int DEFAULT '1',
  `last_attempt` datetime DEFAULT CURRENT_TIMESTAMP,
  `blocked_until` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `failed_login_attempts`
--

INSERT INTO `failed_login_attempts` (`id`, `username`, `ip_address`, `attempts`, `last_attempt`, `blocked_until`) VALUES
(2, 'Fatimah123', '::1', 1, '2026-01-15 23:49:42', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `levels`
--

CREATE TABLE `levels` (
  `level_id` int NOT NULL,
  `level_name` varchar(50) NOT NULL,
  `min_xp` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `levels`
--

INSERT INTO `levels` (`level_id`, `level_name`, `min_xp`) VALUES
(1, 'Newbie', 0),
(2, 'Eco-Friend', 100),
(3, 'Green Apprentice', 300),
(4, 'Eco-Warrior', 600),
(5, 'Green Master', 1000),
(6, 'Eco-Champion', 1500),
(7, 'Sustainability Hero', 2100),
(8, 'Planet Protector', 3000);

-- --------------------------------------------------------

--
-- Table structure for table `login_attempts`
--

CREATE TABLE `login_attempts` (
  `attempt_id` int NOT NULL,
  `ip_address` varchar(45) NOT NULL,
  `attempt_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_success` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `quiz_choices`
--

CREATE TABLE `quiz_choices` (
  `choice_id` int NOT NULL,
  `question_id` int DEFAULT NULL,
  `choice_text` text NOT NULL,
  `is_correct` tinyint(1) DEFAULT '0',
  `choice_order` int DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `quiz_choices`
--

INSERT INTO `quiz_choices` (`choice_id`, `question_id`, `choice_text`, `is_correct`, `choice_order`) VALUES
(93, 24, 'Agar terlihat lebih rapi saja', 0, 1),
(94, 24, 'Untuk mencegah penyebaran penyakit dan menjaga kesehatan', 0, 2),
(95, 24, 'Supaya lingkungan terlihat ramai', 0, 3),
(96, 24, 'Karena kewajiban pemerintah semata', 0, 4),
(97, 25, 'Botol plastik', 0, 1),
(98, 25, 'Kaleng minuman', 0, 2),
(99, 25, 'Sisa makanan dan daun kering', 0, 3),
(100, 25, 'Pecahan kaca', 0, 4),
(101, 26, 'Mengumpulkan sampah sebanyak mungkin', 0, 1),
(102, 26, 'Membakar semua jenis sampah', 0, 2),
(103, 26, 'Mengurangi dampak sampah terhadap lingkungan', 0, 3),
(104, 26, 'Membuang sampah ke tempat terbuka', 0, 4);

-- --------------------------------------------------------

--
-- Table structure for table `quiz_questions`
--

CREATE TABLE `quiz_questions` (
  `question_id` int NOT NULL,
  `module_id` int DEFAULT NULL,
  `question_text` text NOT NULL,
  `question_type` enum('multiple_choice','true_false') DEFAULT 'multiple_choice',
  `xp_reward` int DEFAULT '10',
  `point_reward` int DEFAULT '5',
  `difficulty` enum('easy','medium','hard') DEFAULT 'easy',
  `is_active` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `quiz_questions`
--

INSERT INTO `quiz_questions` (`question_id`, `module_id`, `question_text`, `question_type`, `xp_reward`, `point_reward`, `difficulty`, `is_active`) VALUES
(24, 5, 'Mengapa menjaga kebersihan diri dan lingkungan penting bagi kesehatan manusia?', 'multiple_choice', 5, 0, 'easy', 1),
(25, 5, 'Manakah yang termasuk contoh sampah organik?', 'multiple_choice', 5, 0, 'easy', 1),
(26, 5, 'Prinsip 3R dalam pengelolaan sampah bertujuan untuk…', 'multiple_choice', 5, 0, 'easy', 1);

-- --------------------------------------------------------

--
-- Table structure for table `rewards`
--

CREATE TABLE `rewards` (
  `reward_id` int NOT NULL,
  `reward_name` varchar(100) NOT NULL,
  `point_cost` int NOT NULL,
  `description` text,
  `image` varchar(255) DEFAULT NULL,
  `stock` int DEFAULT '0',
  `is_active` tinyint(1) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `rewards`
--

INSERT INTO `rewards` (`reward_id`, `reward_name`, `point_cost`, `description`, `image`, `stock`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'T-Shirt Polos', 300, 'Kamu bisa mendapatkan T-Shirt, dengan Mengumpulkan Poin', 'tmp_1769326592_6975c800d5056.jpg', 5, 1, '2026-01-25 07:36:32', '2026-01-25 07:36:32');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int NOT NULL,
  `role_name` varchar(50) NOT NULL,
  `description` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `role_name`, `description`, `created_at`) VALUES
(1, 'admin', 'Full system access with all permissions', '2025-12-30 10:31:45'),
(2, 'manager', 'Management level access with limited permissions', '2025-12-30 10:31:45'),
(3, 'staff', 'Basic staff access for daily operations', '2025-12-30 10:31:45'),
(4, 'user', 'Regular user access for educational modules and challenges', '2025-12-30 10:31:45');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT 'default-avatar.png',
  `role_id` int NOT NULL DEFAULT '4',
  `total_xp` int DEFAULT '0',
  `total_points` int DEFAULT '0',
  `current_level` int DEFAULT '1',
  `is_active` tinyint(1) DEFAULT '1',
  `last_login` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `first_name`, `last_name`, `phone`, `avatar`, `role_id`, `total_xp`, `total_points`, `current_level`, `is_active`, `last_login`, `created_at`, `updated_at`) VALUES
(1, 'Fatimah', 'Fatimah@gmail.com', '$2y$10$JbBx6PLaU1o8eWyT85Zx0eeJzbeNIHoLRUlJ8zi3R5sRezxoiO0wa', 'admin', '1', '083131183955', 'default-avatar.png', 4, 45, 100, 2, 1, '2026-01-31 22:58:35', '2026-01-15 14:55:09', '2026-01-31 14:58:35'),
(2, 'newadmin', 'admin12@gmail.com', '$2y$10$POpIKKSuxV39VJtPpaBy5ukqrkxO5wM5BcfGwAi1O3F2x..4UzpT2', 'New', 'Admin', '+62 895-1234-5678', 'default-avatar.png', 1, 0, 20, 1, 1, '2026-01-25 15:19:30', '2026-01-15 15:21:24', '2026-01-31 14:51:59');

-- --------------------------------------------------------

--
-- Table structure for table `user_progress`
--

CREATE TABLE `user_progress` (
  `progress_id` int NOT NULL,
  `user_id` int NOT NULL,
  `item_id` int NOT NULL,
  `item_type` enum('module','challenge') NOT NULL,
  `completed_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `verified_at` timestamp NULL DEFAULT NULL,
  `is_verified` tinyint(1) DEFAULT '0',
  `submission_text` text,
  `submission_image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user_progress`
--

INSERT INTO `user_progress` (`progress_id`, `user_id`, `item_id`, `item_type`, `completed_at`, `verified_at`, `is_verified`, `submission_text`, `submission_image`) VALUES
(1, 1, 2, 'module', '2026-01-16 02:52:51', NULL, 1, NULL, NULL),
(2, 1, 3, 'module', '2026-01-16 04:50:39', NULL, 1, NULL, NULL),
(3, 1, 1, 'module', '2026-01-18 09:26:50', NULL, 1, NULL, NULL),
(4, 1, 4, 'module', '2026-01-18 09:28:20', NULL, 1, NULL, NULL),
(5, 1, 1, 'challenge', '2026-01-25 07:39:54', NULL, 0, '', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_quiz_answers`
--

CREATE TABLE `user_quiz_answers` (
  `answer_id` int NOT NULL,
  `user_id` int NOT NULL,
  `module_id` int NOT NULL,
  `question_id` int NOT NULL,
  `selected_choice_id` int DEFAULT NULL,
  `answer_text` text,
  `is_correct` tinyint(1) DEFAULT NULL,
  `points_earned` int DEFAULT '0',
  `xp_earned` int DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user_quiz_answers`
--

INSERT INTO `user_quiz_answers` (`answer_id`, `user_id`, `module_id`, `question_id`, `selected_choice_id`, `answer_text`, `is_correct`, `points_earned`, `xp_earned`, `created_at`) VALUES
(15, 1, 5, 25, 99, NULL, 0, 0, 0, '2026-01-25 07:33:17'),
(16, 1, 5, 24, 94, NULL, 0, 0, 0, '2026-01-25 07:33:17'),
(17, 1, 5, 26, 103, NULL, 0, 0, 0, '2026-01-25 07:33:17');

-- --------------------------------------------------------

--
-- Table structure for table `user_rewards`
--

CREATE TABLE `user_rewards` (
  `user_reward_id` int NOT NULL,
  `user_id` int NOT NULL,
  `reward_id` int NOT NULL,
  `quantity` int DEFAULT '1',
  `claimed_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity_logs`
--
ALTER TABLE `activity_logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_user_id` (`user_id`),
  ADD KEY `idx_activity_type` (`activity_type`),
  ADD KEY `idx_created_at` (`created_at`);

--
-- Indexes for table `challenges`
--
ALTER TABLE `challenges`
  ADD PRIMARY KEY (`challenge_id`);

--
-- Indexes for table `education_modules`
--
ALTER TABLE `education_modules`
  ADD PRIMARY KEY (`module_id`);

--
-- Indexes for table `failed_login_attempts`
--
ALTER TABLE `failed_login_attempts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_username` (`username`),
  ADD KEY `idx_ip` (`ip_address`);

--
-- Indexes for table `levels`
--
ALTER TABLE `levels`
  ADD PRIMARY KEY (`level_id`);

--
-- Indexes for table `login_attempts`
--
ALTER TABLE `login_attempts`
  ADD PRIMARY KEY (`attempt_id`);

--
-- Indexes for table `quiz_choices`
--
ALTER TABLE `quiz_choices`
  ADD PRIMARY KEY (`choice_id`),
  ADD KEY `fk_quiz_choices_question` (`question_id`);

--
-- Indexes for table `quiz_questions`
--
ALTER TABLE `quiz_questions`
  ADD PRIMARY KEY (`question_id`),
  ADD KEY `module_id` (`module_id`);

--
-- Indexes for table `rewards`
--
ALTER TABLE `rewards`
  ADD PRIMARY KEY (`reward_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `role_name` (`role_name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `idx_username` (`username`),
  ADD KEY `idx_email` (`email`),
  ADD KEY `idx_role_id` (`role_id`),
  ADD KEY `idx_total_xp` (`total_xp`),
  ADD KEY `idx_total_points` (`total_points`),
  ADD KEY `idx_current_level` (`current_level`);

--
-- Indexes for table `user_progress`
--
ALTER TABLE `user_progress`
  ADD PRIMARY KEY (`progress_id`),
  ADD KEY `idx_user_item` (`user_id`,`item_id`,`item_type`),
  ADD KEY `idx_item_type` (`item_type`,`item_id`),
  ADD KEY `idx_completed_at` (`completed_at`),
  ADD KEY `idx_is_verified` (`is_verified`);

--
-- Indexes for table `user_quiz_answers`
--
ALTER TABLE `user_quiz_answers`
  ADD PRIMARY KEY (`answer_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `module_id` (`module_id`),
  ADD KEY `question_id` (`question_id`);

--
-- Indexes for table `user_rewards`
--
ALTER TABLE `user_rewards`
  ADD PRIMARY KEY (`user_reward_id`),
  ADD KEY `reward_id` (`reward_id`),
  ADD KEY `idx_user_reward` (`user_id`,`reward_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity_logs`
--
ALTER TABLE `activity_logs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `challenges`
--
ALTER TABLE `challenges`
  MODIFY `challenge_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `education_modules`
--
ALTER TABLE `education_modules`
  MODIFY `module_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `failed_login_attempts`
--
ALTER TABLE `failed_login_attempts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `login_attempts`
--
ALTER TABLE `login_attempts`
  MODIFY `attempt_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `quiz_choices`
--
ALTER TABLE `quiz_choices`
  MODIFY `choice_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT for table `quiz_questions`
--
ALTER TABLE `quiz_questions`
  MODIFY `question_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `rewards`
--
ALTER TABLE `rewards`
  MODIFY `reward_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user_progress`
--
ALTER TABLE `user_progress`
  MODIFY `progress_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user_quiz_answers`
--
ALTER TABLE `user_quiz_answers`
  MODIFY `answer_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `user_rewards`
--
ALTER TABLE `user_rewards`
  MODIFY `user_reward_id` int NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `activity_logs`
--
ALTER TABLE `activity_logs`
  ADD CONSTRAINT `activity_logs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `quiz_choices`
--
ALTER TABLE `quiz_choices`
  ADD CONSTRAINT `fk_quiz_choices_question` FOREIGN KEY (`question_id`) REFERENCES `quiz_questions` (`question_id`) ON DELETE CASCADE;

--
-- Constraints for table `quiz_questions`
--
ALTER TABLE `quiz_questions`
  ADD CONSTRAINT `quiz_questions_ibfk_1` FOREIGN KEY (`module_id`) REFERENCES `education_modules` (`module_id`) ON DELETE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE RESTRICT;

--
-- Constraints for table `user_progress`
--
ALTER TABLE `user_progress`
  ADD CONSTRAINT `user_progress_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_quiz_answers`
--
ALTER TABLE `user_quiz_answers`
  ADD CONSTRAINT `user_quiz_answers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_quiz_answers_ibfk_2` FOREIGN KEY (`module_id`) REFERENCES `education_modules` (`module_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_quiz_answers_ibfk_3` FOREIGN KEY (`question_id`) REFERENCES `quiz_questions` (`question_id`) ON DELETE CASCADE;

--
-- Constraints for table `user_rewards`
--
ALTER TABLE `user_rewards`
  ADD CONSTRAINT `user_rewards_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_rewards_ibfk_2` FOREIGN KEY (`reward_id`) REFERENCES `rewards` (`reward_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
