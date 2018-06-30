-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Июн 30 2018 г., 13:54
-- Версия сервера: 5.7.19
-- Версия PHP: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `arturapi`
--

-- --------------------------------------------------------

--
-- Структура таблицы `consults`
--

CREATE TABLE `consults` (
  `id` int(10) UNSIGNED NOT NULL,
  `starttime` bigint(20) NOT NULL,
  `state` tinyint(4) DEFAULT '0',
  `user_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `consults`
--

INSERT INTO `consults` (`id`, `starttime`, `state`, `user_id`) VALUES
(18, 1530275515373, 0, 5);

-- --------------------------------------------------------

--
-- Структура таблицы `groups`
--

CREATE TABLE `groups` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `groups`
--

INSERT INTO `groups` (`id`, `name`) VALUES
(3, 'gr-3'),
(4, 'gr4'),
(5, 'gr5'),
(1, 'group1'),
(2, 'group2');

-- --------------------------------------------------------

--
-- Структура таблицы `students`
--

CREATE TABLE `students` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `group_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `students`
--

INSERT INTO `students` (`id`, `name`, `surname`, `group_id`) VALUES
(1, 'john', 'Smith', 2),
(2, 're', 're', 3),
(3, 're2', 're2', 3),
(4, 're3', 're3', 3),
(5, 're', 're', 4),
(6, 're2', 're2', 4),
(7, 're', 're', 5),
(8, 're6re', 're6', 3);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `login` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `pass`) VALUES
(5, 'foma', '28a80965d1d513f60f5ebd9ba847afb7bc5a1ec5aa2786e3b983b48be1978ab7'),
(6, 'fomenkoyegor', '98c68b16f22fbd46f4d36e7d1305da797f2d6b1642ee0caf3eb7809d4be99bf2');

-- --------------------------------------------------------

--
-- Структура таблицы `user_tokens`
--

CREATE TABLE `user_tokens` (
  `id` int(10) UNSIGNED NOT NULL,
  `token` varchar(255) NOT NULL,
  `user_agent` varchar(255) NOT NULL,
  `user_ip` varchar(255) NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `expires` bigint(20) NOT NULL,
  `created` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `user_tokens`
--

INSERT INTO `user_tokens` (`id`, `token`, `user_agent`, `user_ip`, `user_id`, `expires`, `created`) VALUES
(1, '20316d51684b59caaf705332bbab28804a936b1d550b397fc54f514667c38239', '738b29bf319b1a5fa82c2ed1df8199ac', 'f528764d624db129b32c21fbca0cb8d6', 5, 1530201031, 1530197431),
(2, '7cb589353111eba97bb9106e41737e92d3508d4ef33032e7e0c603641341805a', '738b29bf319b1a5fa82c2ed1df8199ac', 'f528764d624db129b32c21fbca0cb8d6', 6, 1530201099, 1530197499),
(3, '9219cbb94455271289492ae200fd8de6362df26199296b18431b24090ab6bb6d', '738b29bf319b1a5fa82c2ed1df8199ac', 'f528764d624db129b32c21fbca0cb8d6', 5, 1530201178, 1530197578),
(4, '1b8c4f27c80e220c48527e404a375c562f3ba9cd3f0ad8761cec493dc8f6ca4d', '738b29bf319b1a5fa82c2ed1df8199ac', 'f528764d624db129b32c21fbca0cb8d6', 5, 1530202083, 1530198483),
(5, '5fb7212ecb57559e0062af90434c1d12127b9694623658807a3bac8ae8e52dbb', '738b29bf319b1a5fa82c2ed1df8199ac', 'f528764d624db129b32c21fbca0cb8d6', 5, 1530206327, 1530202727),
(6, 'fcc12cf5fbb4ac62b316056d234264ced6ca410986b3697529fc9d0261d462e0', '738b29bf319b1a5fa82c2ed1df8199ac', 'f528764d624db129b32c21fbca0cb8d6', 6, 1530206555, 1530202955),
(7, '1c267e8a5d105dc2d52c0eec2c51bf8ec16a4db16f9ccc38b63ae21bd085f087', '738b29bf319b1a5fa82c2ed1df8199ac', 'f528764d624db129b32c21fbca0cb8d6', 5, 1530212898, 1530209298),
(13, 'f39440c77bbe596302beb83dc715a20b6b3be19fbd0267da11b00253d804d2cd', '738b29bf319b1a5fa82c2ed1df8199ac', 'f528764d624db129b32c21fbca0cb8d6', 5, 1530218382, 1530214782),
(17, '46e3c6fda28c55d2c1c05b31096a8b0d96cfb5dc548f7a993bc3fec33e0661cd', '738b29bf319b1a5fa82c2ed1df8199ac', 'f528764d624db129b32c21fbca0cb8d6', 5, 1530224295, 1530220695),
(18, 'eb071e65426dfd0b2b4194eec6d4b13939c5843aeb2342a9244f737182177aa2', '738b29bf319b1a5fa82c2ed1df8199ac', 'f528764d624db129b32c21fbca0cb8d6', 5, 1530224321, 1530220721),
(23, 'cff80a96b9d84aaa3b1aed3d061bb759d6d11ada5ed5c93bc14aa18d22e064dc', '738b29bf319b1a5fa82c2ed1df8199ac', 'f528764d624db129b32c21fbca0cb8d6', 5, 1530228257, 1530224657),
(26, '2d4172f31a5853343d2d8c848fc26814a63e1d9818ebb17f0fe8847beac16179', '738b29bf319b1a5fa82c2ed1df8199ac', 'f528764d624db129b32c21fbca0cb8d6', 5, 1530235983, 1530232383),
(27, '7653cf808734f532ec04efc9b91879d725d39ea55875a02b785866c68be840ab', '738b29bf319b1a5fa82c2ed1df8199ac', 'f528764d624db129b32c21fbca0cb8d6', 5, 1530236086, 1530232486),
(32, '4f12ca3a8c77cbcdc72ab12c247be4c3085a1596f3053847f0e552b25917f8d0', '738b29bf319b1a5fa82c2ed1df8199ac', 'f528764d624db129b32c21fbca0cb8d6', 5, 1530304847, 1530301247),
(33, '7a4ea98d4d73da63cf97d343571087c4f64b8086c1604a6058f2c6b1193c69b2', '738b29bf319b1a5fa82c2ed1df8199ac', 'f528764d624db129b32c21fbca0cb8d6', 5, 1530313707, 1530310107),
(34, '516700a023688c538d5a35461f8ff003610798a994ec5efde63a7b7adbee66c0', '738b29bf319b1a5fa82c2ed1df8199ac', 'f528764d624db129b32c21fbca0cb8d6', 5, 1530317444, 1530313844),
(35, 'a056da834a6da148ab22bd9370069f86eff4218fafeb349bdde73e4f3ea2f681', '738b29bf319b1a5fa82c2ed1df8199ac', 'f528764d624db129b32c21fbca0cb8d6', 5, 1530318033, 1530314433),
(37, '3cacc710c90c92362a5e58eff8f782cf78361694fab9ffa12a9fd3d417eba116', '738b29bf319b1a5fa82c2ed1df8199ac', 'f528764d624db129b32c21fbca0cb8d6', 5, 1530318287, 1530314687),
(38, '5035b915894c23eb76fc56ec5ca3145637739f21f6a0f9c712a4123526f178bb', '738b29bf319b1a5fa82c2ed1df8199ac', 'f528764d624db129b32c21fbca0cb8d6', 5, 1530318317, 1530314717),
(39, '5e0c6ae680ae2180d080f6b024153ce12457585f50062014f638aed3a99e4a86', '738b29bf319b1a5fa82c2ed1df8199ac', 'f528764d624db129b32c21fbca0cb8d6', 5, 1530320179, 1530316579),
(43, '56847d401fa7b7b0d1e3d577ae80ad416cf0b9d4f3b42cf8d90eba28419a6ef4', '738b29bf319b1a5fa82c2ed1df8199ac', 'f528764d624db129b32c21fbca0cb8d6', 5, 1530359610, 1530356010),
(45, '3e44b3fd2aa2e34f56a72b0fc7c9d5cd0d5ea764c049e630a558f5d2e1d9ad86', '738b29bf319b1a5fa82c2ed1df8199ac', 'f528764d624db129b32c21fbca0cb8d6', 5, 1530363150, 1530359550),
(52, '547031096f0dde197ed54ab23378afdb1b6974d81958ed8df3ba11873a88783d', '738b29bf319b1a5fa82c2ed1df8199ac', 'f528764d624db129b32c21fbca0cb8d6', 5, 1530368718, 1530365118);

-- --------------------------------------------------------

--
-- Структура таблицы `visitors`
--

CREATE TABLE `visitors` (
  `consult_id` int(10) UNSIGNED NOT NULL,
  `student_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `visitors`
--

INSERT INTO `visitors` (`consult_id`, `student_id`) VALUES
(18, 1),
(18, 2),
(18, 3),
(18, 4),
(18, 5),
(18, 6),
(18, 7),
(18, 8);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `consults`
--
ALTER TABLE `consults`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Индексы таблицы `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Индексы таблицы `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD KEY `group_id` (`group_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `login` (`login`);

--
-- Индексы таблицы `user_tokens`
--
ALTER TABLE `user_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `token` (`token`),
  ADD KEY `user_id` (`user_id`);

--
-- Индексы таблицы `visitors`
--
ALTER TABLE `visitors`
  ADD PRIMARY KEY (`consult_id`,`student_id`),
  ADD KEY `student_id` (`student_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `consults`
--
ALTER TABLE `consults`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT для таблицы `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `students`
--
ALTER TABLE `students`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `user_tokens`
--
ALTER TABLE `user_tokens`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `consults`
--
ALTER TABLE `consults`
  ADD CONSTRAINT `consults_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `students_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `user_tokens`
--
ALTER TABLE `user_tokens`
  ADD CONSTRAINT `user_tokens_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `visitors`
--
ALTER TABLE `visitors`
  ADD CONSTRAINT `visitors_ibfk_1` FOREIGN KEY (`consult_id`) REFERENCES `consults` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `visitors_ibfk_2` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
