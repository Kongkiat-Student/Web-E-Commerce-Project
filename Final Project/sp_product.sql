-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 15, 2024 at 02:38 AM
-- Server version: 10.6.11-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dekcomsh_shoptest`
--

-- --------------------------------------------------------

--
-- Table structure for table `sp_product`
--

CREATE TABLE `sp_product` (
  `id` int(11) NOT NULL,
  `name` text DEFAULT NULL,
  `img` text DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `type` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `sp_product`
--

INSERT INTO `sp_product` (`id`, `name`, `img`, `price`, `description`, `type`) VALUES
(1, 'รองเท้า Nike แดง', '1653718795081.jpg', 7000, 'Nike Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!', 'shoe'),
(2, 'รองเท้า Adidas ', '1653718808515.jpg', 1500, 'Adidas shirt Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!', 'shirt'),
(3, 'Adidas shoe', '1653718816063.jpg', 45000, 'Adidas shoe Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!', 'shoe'),
(4, 'Baebie Biush ', 'b00.jpg', 289, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium optio quo facere alias facilis praesentium quaerat, ullam minima numquam sed rem voluptate quod. Aut tempore odit dignissimos, voluptate eveniet nesciunt.', 'beauty'),
(189, 'Drawing ดินสอเขียนคิ้ว', 'b001.jpg', 199, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium optio quo facere alias facilis praesentium quaerat, ullam minima numquam sed rem voluptate quod. Aut tempore odit dignissimos, voluptate eveniet nesciunt.', 'beauty'),
(190, 'MTI รองพื้น', 'b002.jpg', 179, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium optio quo facere alias facilis praesentium quaerat, ullam minima numquam sed rem voluptate quod. Aut tempore odit dignissimos, voluptate eveniet nesciunt.', 'beauty'),
(191, 'Dr.Pong+ คุชชั่นลด ปกปิด คุมมัน', 'b003.jpg', 199, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium optio quo facere alias facilis praesentium quaerat, ullam minima numquam sed rem voluptate quod. Aut tempore odit dignissimos, voluptate eveniet nesciunt.\r\n', 'beauty'),
(192, 'Wanna Shine Lipstick', 'b005.jpg', 299, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium optio quo facere alias facilis praesentium quaerat, ullam minima numquam sed rem voluptate quod. Aut tempore odit dignissimos, voluptate eveniet nesciunt.\r\n', 'beauty'),
(193, 'TEATREE OIL Vitamin C', 'b006.jpg', 299, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium optio quo facere alias facilis praesentium quaerat, ullam minima numquam sed rem voluptate quod. Aut tempore odit dignissimos, voluptate eveniet nesciunt.\r\n', 'beauty'),
(194, 'Love Potion Sunkiss SPF50 PA+++', 'b007.jpg', 289, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium optio quo facere alias facilis praesentium quaerat, ullam minima numquam sed rem voluptate quod. Aut tempore odit dignissimos, voluptate eveniet nesciunt.\r\n', 'beauty'),
(195, 'ครีมบำรุงผิว Forerunner', 'b008.jpg', 199, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium optio quo facere alias facilis praesentium quaerat, ullam minima numquam sed rem voluptate quod. Aut tempore odit dignissimos, voluptate eveniet nesciunt.\r\n', 'beauty'),
(196, 'Vaseline ครีมกันแดด SPF 50+ PA++++', 'b009.jpg', 79, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At quis eaque aliquam aut sit ea, consequatur soluta iure. Ducimus unde repellat quae tempore sint non earum necessitatibus quam sunt architecto', 'beauty'),
(197, 'Jelly Tint ', 'b010.jpg', 79, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At quis eaque aliquam aut sit ea, consequatur soluta iure. Ducimus unde repellat quae tempore sint non earum necessitatibus quam sunt architecto?', 'beauty'),
(198, 'กางเกงยีนส์ขายาวสีขาว', 'fa001.jpg', 199, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At quis eaque aliquam aut sit ea, consequatur soluta iure. Ducimus unde repellat quae tempore sint non earum necessitatibus quam sunt architecto?', 'fashion'),
(199, 'เสื้อฮูส WHAT PERISCOHO สีดำ', 'fa002.jpg', 599, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At quis eaque aliquam aut sit ea, consequatur soluta iure. Ducimus unde repellat quae tempore sint non earum necessitatibus quam sunt architecto?', 'fashion'),
(200, 'รองเท้า ADIDAS สีแดง', 'fa003.jpg', 599, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquam rerum recusandae beatae laborum earum perferendis, mollitia labore est nemo repellendus, praesentium, sequi inventore. Ratione reiciendis doloribus temporibus beatae aliquid!', 'shoe'),
(201, 'กางเกงยีนส์ขายาว (ชาย)', 'fa004.jpg', 399, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquam rerum recusandae beatae laborum earum perferendis, mollitia labore est nemo repellendus, praesentium, sequi inventore. Ratione reiciendis doloribus temporibus beatae aliquid!\r\n', 'fashion'),
(202, 'เสื้อแขนสั้น (หญิง)', 'fa005.jpg', 199, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquam rerum recusandae beatae laborum earum perferendis, mollitia labore est nemo repellendus, praesentium, sequi inventore. Ratione reiciendis doloribus temporibus beatae aliquid!\r\n', 'fashion'),
(203, 'อาหารเสริม ชนิดแค็ปซูล Simlog', 'fo001.png', 199, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquam rerum recusandae beatae laborum earum perferendis, mollitia labore est nemo repellendus, praesentium, sequi inventore. Ratione reiciendis doloribus temporibus beatae aliquid!\r\n', 'food'),
(204, 'อาหารเสริมชนิดแค็ปซูล FIR ', 'fo002.jpg', 399, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquam rerum recusandae beatae laborum earum perferendis, mollitia labore est nemo repellendus, praesentium, sequi inventore. Ratione reiciendis doloribus temporibus beatae aliquid!\r\n', 'food'),
(205, 'อาหารเสริมสำหรับเด็ก เซ็ท 3 กล่อง', 'fo003.jpg', 269, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquam rerum recusandae beatae laborum earum perferendis, mollitia labore est nemo repellendus, praesentium, sequi inventore. Ratione reiciendis doloribus temporibus beatae aliquid!\r\n', 'food'),
(206, 'อาหารเสริมสำหรับเด็ก TOBY', 'fa004.jpg', 199, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquam rerum recusandae beatae laborum earum perferendis, mollitia labore est nemo repellendus, praesentium, sequi inventore. Ratione reiciendis doloribus temporibus beatae aliquid!\r\n', 'food'),
(207, 'Smoothie สมูทตี้ อาหารเสริมสำหรับเด็ก', 'fo005.jpg', 55, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquam rerum recusandae beatae laborum earum perferendis, mollitia labore est nemo repellendus, praesentium, sequi inventore. Ratione reiciendis doloribus temporibus beatae aliquid!\r\n', 'food'),
(208, 'เสื้อแขนสั้นสำหรับผู้หญิง สีขาว', 'fa006.jpg', 199, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquam rerum recusandae beatae laborum earum perferendis, mollitia labore est nemo repellendus, praesentium, sequi inventore. Ratione reiciendis doloribus temporibus beatae aliquid!\r\n', 'fashion');

-- --------------------------------------------------------

--
-- Table structure for table `sp_transaction`
--

CREATE TABLE `sp_transaction` (
  `id` int(11) NOT NULL,
  `transid` text DEFAULT NULL,
  `orderlist` text DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `shipping` int(11) DEFAULT NULL,
  `vat` int(11) DEFAULT NULL,
  `netamount` int(11) DEFAULT NULL,
  `operation` text DEFAULT NULL,
  `mil` bigint(20) DEFAULT NULL,
  `updated_at` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `sp_transaction`
--

INSERT INTO `sp_transaction` (`id`, `transid`, `orderlist`, `amount`, `shipping`, `vat`, `netamount`, `operation`, `mil`, `updated_at`) VALUES
(1, '1653723836661', '[{\"index\":\"2\",\"id\":\"1\",\"name\":\"Nike\",\"price\":\"1\",\"img\":\"1653718795081.jpg\",\"count\":\"4\"}]', 28000, 28060, 1964, 30024, 'PENDING', 1653723836000, '2022-05-28 02:43:56pm'),
(2, '1653723949893', '[{\"index\":\"0\",\"id\":\"3\",\"name\":\"Adidas shoe\",\"price\":\"1\",\"img\":\"1653718816063.jpg\",\"count\":\"2\"}]', 90000, 90060, 6304, 96364, 'PENDING', 1653723949000, '2022-05-28 02:45:49pm'),
(3, '1653724115073', '[{\"index\":\"1\",\"id\":\"2\",\"name\":\"Adidas shirt\",\"price\":\"1500\",\"img\":\"1653718808515.jpg\",\"count\":\"1\"}]', 1500, 1560, 109, 1669, 'PENDING', 1653724115000, '2022-05-28 02:48:35pm'),
(4, '1653724247660', '[{\"index\":\"2\",\"id\":\"1\",\"name\":\"Nike\",\"price\":\"7000\",\"img\":\"1653718795081.jpg\",\"count\":\"1\"}]', 7000, 7060, 494, 7554, 'PENDING', 1653724247000, '2022-05-28 02:50:47pm'),
(5, '1653724305688', '[{\"index\":\"2\",\"id\":\"1\",\"name\":\"Nike\",\"price\":\"7000\",\"img\":\"1653718795081.jpg\",\"count\":\"1\"}]', 7000, 7060, 494, 7554, 'PENDING', 1653724305000, '2022-05-28 02:51:45pm'),
(6, '1653724342456', '[{\"index\":\"1\",\"id\":\"2\",\"name\":\"Adidas shirt\",\"price\":\"1500\",\"img\":\"1653718808515.jpg\",\"count\":\"2\"}]', 3000, 3060, 214, 3274, 'PENDING', 1653724342000, '2022-05-28 02:52:22pm'),
(7, '1653724849489', '[{\"index\":\"1\",\"id\":\"2\",\"name\":\"Adidas shirt\",\"price\":\"1500\",\"img\":\"1653718808515.jpg\",\"count\":\"1\"}]', 1500, 1560, 109, 1669, 'PENDING', 1653724849000, '2022-05-28 03:00:49pm'),
(8, '1728930188373', '[{\"index\":\"0\",\"id\":\"195\",\"name\":\"\\u0e04\\u0e23\\u0e35\\u0e21\\u0e1a\\u0e33\\u0e23\\u0e38\\u0e07\\u0e1c\\u0e34\\u0e27 Forerunner\",\"price\":\"199\",\"img\":\"b008.jpg\",\"count\":\"2\"}]', 398, 458, 32, 490, 'PENDING', 1728930188000, '2024-10-15 01:23:08am'),
(9, '1728933881008', '[{\"index\":\"1\",\"id\":\"207\",\"name\":\"Smoothie \\u0e2a\\u0e21\\u0e39\\u0e17\\u0e15\\u0e35\\u0e49 \\u0e2d\\u0e32\\u0e2b\\u0e32\\u0e23\\u0e40\\u0e2a\\u0e23\\u0e34\\u0e21\\u0e2a\\u0e33\\u0e2b\\u0e23\\u0e31\\u0e1a\\u0e40\\u0e14\\u0e47\\u0e01\",\"price\":\"55\",\"img\":\"fo005.jpg\",\"count\":\"1\"}]', 55, 115, 8, 123, 'PENDING', 1728933881000, '2024-10-15 02:24:41am');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sp_product`
--
ALTER TABLE `sp_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sp_transaction`
--
ALTER TABLE `sp_transaction`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sp_product`
--
ALTER TABLE `sp_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=209;

--
-- AUTO_INCREMENT for table `sp_transaction`
--
ALTER TABLE `sp_transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
