-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1:3306
-- Üretim Zamanı: 28 Nis 2025, 02:03:01
-- Sunucu sürümü: 8.3.0
-- PHP Sürümü: 8.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `mys__sap_common`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_address`
--

DROP TABLE IF EXISTS `_address`;
CREATE TABLE IF NOT EXISTS `_address` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `district_id` bigint DEFAULT NULL,
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci NOT NULL,
  `contact_person` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `phone_number` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci NOT NULL,
  `postal_code` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `address_line_1` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci NOT NULL,
  `address_line_2` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `_address`
--

INSERT INTO `_address` (`id`, `district_id`, `title`, `contact_person`, `email`, `phone_number`, `postal_code`, `address_line_1`, `address_line_2`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Adresim', 'Okan', 'testokn@mail.com', '05554446666', '34788', 'Çekmeköy - İstanbul', NULL, '2025-04-27 18:26:45', '2025-04-27 19:10:46'),
(2, NULL, 'Ev Adresim', 'Müjdat', 'testmujd@mail.com', '05564446686', '34764', 'Ümraniye - İstanbul', NULL, '2025-04-27 18:26:45', '2025-04-27 20:55:19'),
(3, NULL, 'Firma Adresi', 'Mustafa Tosun', 'tgatic@mail.com', '05462145687', '34330', 'Levent - İstanbul', NULL, '2025-04-27 20:00:19', '2025-04-27 20:55:05'),
(4, NULL, 'Depo Adresi', 'Arif Karadeniz', 'tgadepo1@mail.com', '05427267895', '34940', 'Tuzla - İstanbul', NULL, '2025-04-27 20:54:40', '2025-04-27 20:54:40'),
(5, NULL, 'Evim', 'Kaan Demirci', 'kaandem332@mail.com', '05527967281', NULL, 'Sarıyer - İstanbul', NULL, '2025-04-27 20:54:40', '2025-04-27 20:54:40'),
(6, NULL, 'İş Yerim', 'Hakan Şanlı', 'hakansanli124@mail.com', '05464391704', NULL, 'Sarıyer - İstanbul', NULL, '2025-04-27 20:54:40', '2025-04-27 20:54:40');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_brand`
--

DROP TABLE IF EXISTS `_brand`;
CREATE TABLE IF NOT EXISTS `_brand` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(75) CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci NOT NULL,
  `summary` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `_brand`
--

INSERT INTO `_brand` (`id`, `title`, `summary`, `content`, `created_at`, `updated_at`) VALUES
(1, 'Monster', NULL, NULL, '2025-04-27 20:41:58', '2025-04-27 20:41:58'),
(2, 'Eyüp Sabri Tuncer', NULL, NULL, '2025-04-27 20:41:58', '2025-04-27 20:41:58');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_cart`
--

DROP TABLE IF EXISTS `_cart`;
CREATE TABLE IF NOT EXISTS `_cart` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `customer_id` bigint NOT NULL,
  `sessionId` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_cart_customer` (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_cart_market_item`
--

DROP TABLE IF EXISTS `_cart_market_item`;
CREATE TABLE IF NOT EXISTS `_cart_market_item` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `cart_id` bigint NOT NULL,
  `market_item_id` bigint NOT NULL,
  `quantity` int NOT NULL DEFAULT '1',
  `unit_price` decimal(15,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `cart_id` (`cart_id`),
  KEY `idx_cart_item` (`market_item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_category`
--

DROP TABLE IF EXISTS `_category`;
CREATE TABLE IF NOT EXISTS `_category` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `parent_id` bigint DEFAULT NULL,
  `title` varchar(75) CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_category_parent` (`parent_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `_category`
--

INSERT INTO `_category` (`id`, `parent_id`, `title`, `created_at`, `updated_at`) VALUES
(1, NULL, 'products', '2025-04-27 18:09:42', '2025-04-27 18:09:42'),
(2, 1, 'electronics', '2025-04-27 18:53:16', '2025-04-27 18:53:58'),
(3, 1, 'cosmetics', '2025-04-27 18:53:16', '2025-04-27 18:54:00');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_company`
--

DROP TABLE IF EXISTS `_company`;
CREATE TABLE IF NOT EXISTS `_company` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `address_id` bigint DEFAULT NULL,
  `name` varchar(100) COLLATE utf8mb4_turkish_ci NOT NULL,
  `tax_number` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci NOT NULL,
  `tax_office` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `_company`
--

INSERT INTO `_company` (`id`, `address_id`, `name`, `tax_number`, `tax_office`, `created_at`, `updated_at`) VALUES
(1, 3, 'TGA Dış Ticaret A.Ş', '174922', 'İstanbul Anadolu Vergi Dairesi', '2025-04-27 19:58:42', '2025-04-27 20:01:28');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_currency`
--

DROP TABLE IF EXISTS `_currency`;
CREATE TABLE IF NOT EXISTS `_currency` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `CurrencyCode` char(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci NOT NULL,
  `CurrencyName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci NOT NULL,
  `CountryName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `Symbol` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `_currency`
--

INSERT INTO `_currency` (`id`, `CurrencyCode`, `CurrencyName`, `CountryName`, `Symbol`, `created_at`, `updated_at`) VALUES
(1, 'USD', 'United States Dollar', 'United States', '$', '2025-04-24 21:58:58', '2025-04-24 22:00:19'),
(2, 'EUR', 'Euro', 'European Union', '€', '2025-04-24 21:58:58', '2025-04-24 22:00:19'),
(3, 'JPY', 'Japanese Yen', 'Japan', '¥', '2025-04-24 21:58:58', '2025-04-24 22:00:19'),
(4, 'GBP', 'British Pound', 'United Kingdom', '£', '2025-04-24 21:58:58', '2025-04-24 22:00:19'),
(5, 'TRY', 'Türk Lirası', 'Türkiye', '₺', '2025-04-24 21:58:58', '2025-04-24 22:00:19');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_customer`
--

DROP TABLE IF EXISTS `_customer`;
CREATE TABLE IF NOT EXISTS `_customer` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `address_id` bigint NOT NULL,
  `first_name` varchar(50) COLLATE utf8mb4_turkish_ci NOT NULL,
  `last_name` varchar(50) COLLATE utf8mb4_turkish_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `_customer`
--

INSERT INTO `_customer` (`id`, `address_id`, `first_name`, `last_name`, `created_at`, `updated_at`) VALUES
(1, 1, 'Okan', 'Kara', '2025-04-27 19:52:25', '2025-04-27 21:00:25'),
(2, 2, 'Müjdat', 'Güneş', '2025-04-27 19:52:25', '2025-04-27 21:00:34'),
(3, 5, 'Kaan', 'Demirci', '2025-04-27 21:14:11', '2025-04-27 21:14:58'),
(4, 6, 'Hakan', 'Şanlı', '2025-04-27 21:14:11', '2025-04-27 21:15:00');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_dispatch_item`
--

DROP TABLE IF EXISTS `_dispatch_item`;
CREATE TABLE IF NOT EXISTS `_dispatch_item` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `dispatch_id` bigint NOT NULL,
  `item_id` bigint NOT NULL,
  `quantity` int NOT NULL,
  `batch_number` varchar(50) COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `serial_numbers` text COLLATE utf8mb4_turkish_ci,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `dispatch_id` (`dispatch_id`),
  KEY `item_id` (`item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_dispatch_note`
--

DROP TABLE IF EXISTS `_dispatch_note`;
CREATE TABLE IF NOT EXISTS `_dispatch_note` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `dispatch_number` varchar(50) COLLATE utf8mb4_turkish_ci NOT NULL,
  `order_id` bigint NOT NULL,
  `shipping_id` bigint DEFAULT NULL,
  `issue_date` date NOT NULL,
  `status` enum('prepared','shipped','delivered') COLLATE utf8mb4_turkish_ci DEFAULT 'prepared',
  `e_dispatch_reference` varchar(100) COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `notes` text COLLATE utf8mb4_turkish_ci,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dispatch_number` (`dispatch_number`),
  KEY `shipping_id` (`shipping_id`),
  KEY `idx_dispatch_order` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_franchise`
--

DROP TABLE IF EXISTS `_franchise`;
CREATE TABLE IF NOT EXISTS `_franchise` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `customer_id` bigint NOT NULL,
  `application_date` date NOT NULL,
  `approval_date` date DEFAULT NULL,
  `status` enum('pending','approved','rejected','suspended') COLLATE utf8mb4_turkish_ci DEFAULT 'pending',
  `contract_start_date` date DEFAULT NULL,
  `contract_end_date` date DEFAULT NULL,
  `monthly_target` decimal(15,2) DEFAULT NULL,
  `notes` text COLLATE utf8mb4_turkish_ci,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_franchise_customer` (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_franchise_discount`
--

DROP TABLE IF EXISTS `_franchise_discount`;
CREATE TABLE IF NOT EXISTS `_franchise_discount` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `franchise_id` bigint NOT NULL,
  `customer_id` bigint NOT NULL,
  `product_category_id` bigint DEFAULT NULL,
  `discount_rate` decimal(5,2) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `franchise_id` (`franchise_id`),
  KEY `customer_id` (`customer_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_franchise_document`
--

DROP TABLE IF EXISTS `_franchise_document`;
CREATE TABLE IF NOT EXISTS `_franchise_document` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `franchise_id` bigint NOT NULL,
  `document_type` varchar(50) COLLATE utf8mb4_turkish_ci NOT NULL,
  `file_path` varchar(255) COLLATE utf8mb4_turkish_ci NOT NULL,
  `uploaded_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `verified` tinyint(1) DEFAULT '0',
  `notes` text COLLATE utf8mb4_turkish_ci,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `franchise_id` (`franchise_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_incoterm`
--

DROP TABLE IF EXISTS `_incoterm`;
CREATE TABLE IF NOT EXISTS `_incoterm` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `code` varchar(3) COLLATE utf8mb4_turkish_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_turkish_ci NOT NULL,
  `description` text COLLATE utf8mb4_turkish_ci,
  `category` enum('all_transport','sea_transport') COLLATE utf8mb4_turkish_ci NOT NULL,
  `risk_transfer_point` varchar(100) COLLATE utf8mb4_turkish_ci NOT NULL,
  `cost_responsibility` text COLLATE utf8mb4_turkish_ci NOT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `_incoterm`
--

INSERT INTO `_incoterm` (`id`, `code`, `name`, `description`, `category`, `risk_transfer_point`, `cost_responsibility`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'EXW', 'Ex Works', 'Seller makes goods available at their premises', 'all_transport', 'Seller\'s premises', 'Buyer bears all costs and risks', 1, '2025-04-20 11:48:50', '2025-04-27 18:09:42'),
(2, 'FCA', 'Free Carrier', 'Seller delivers goods to carrier at named place', 'all_transport', 'Carrier\'s premises', 'Seller delivers to carrier, buyer bears onward costs', 1, '2025-04-20 11:48:50', '2025-04-27 18:09:42'),
(3, 'CPT', 'Carriage Paid To', 'Seller pays freight to named destination', 'all_transport', 'First carrier', 'Seller pays freight, risk transfers to buyer during transport', 1, '2025-04-20 11:48:50', '2025-04-27 18:09:42'),
(4, 'CIP', 'Carriage and Insurance Paid', 'Seller pays freight and insurance to named destination', 'all_transport', 'First carrier', 'Seller pays freight and insurance', 1, '2025-04-20 11:48:50', '2025-04-27 18:09:42'),
(5, 'DAT', 'Delivered At Terminal', 'Seller delivers at terminal at named port/place', 'all_transport', 'Terminal', 'Seller bears all risks and costs until terminal', 1, '2025-04-20 11:48:50', '2025-04-27 18:09:42'),
(6, 'DAP', 'Delivered At Place', 'Seller delivers at named place ready for unloading', 'all_transport', 'Named place', 'Seller bears all risks and costs until named place', 1, '2025-04-20 11:48:50', '2025-04-27 18:09:42'),
(7, 'DDP', 'Delivered Duty Paid', 'Seller delivers to named place with all costs paid', 'all_transport', 'Named place', 'Seller bears all risks and costs including duties', 1, '2025-04-20 11:48:50', '2025-04-27 18:09:42'),
(8, 'FAS', 'Free Alongside Ship', 'Seller delivers alongside ship at named port', 'sea_transport', 'Alongside ship', 'Seller delivers alongside ship, buyer loads and bears onward costs', 1, '2025-04-20 11:48:50', '2025-04-27 18:09:42'),
(9, 'FOB', 'Free On Board', 'Seller delivers on board ship at named port', 'sea_transport', 'On board ship', 'Seller delivers on board, buyer bears onward costs', 1, '2025-04-20 11:48:50', '2025-04-27 18:09:42'),
(10, 'CFR', 'Cost and Freight', 'Seller pays freight to named port', 'sea_transport', 'On board ship', 'Seller pays freight, risk transfers when on board', 1, '2025-04-20 11:48:50', '2025-04-27 18:09:42'),
(11, 'CIF', 'Cost, Insurance and Freight', 'Seller pays freight and insurance to named port', 'sea_transport', 'On board ship', 'Seller pays freight and insurance', 1, '2025-04-20 11:48:50', '2025-04-27 18:09:42');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_invoice`
--

DROP TABLE IF EXISTS `_invoice`;
CREATE TABLE IF NOT EXISTS `_invoice` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `invoice_number` varchar(50) COLLATE utf8mb4_turkish_ci NOT NULL,
  `order_id` bigint NOT NULL,
  `customer_id` bigint NOT NULL,
  `issue_date` date NOT NULL,
  `due_date` date NOT NULL,
  `status` enum('draft','issued','paid','cancelled','overdue') COLLATE utf8mb4_turkish_ci DEFAULT 'draft',
  `subtotal` decimal(15,2) NOT NULL,
  `tax_amount` decimal(15,2) NOT NULL,
  `discount_amount` decimal(15,2) DEFAULT '0.00',
  `total_amount` decimal(15,2) NOT NULL,
  `currency` varchar(3) COLLATE utf8mb4_turkish_ci DEFAULT 'TRY',
  `payment_terms` varchar(100) COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `notes` text COLLATE utf8mb4_turkish_ci,
  `e_invoice_reference` varchar(100) COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `e_invoice_status` enum('not_sent','sent','delivered','rejected') COLLATE utf8mb4_turkish_ci DEFAULT 'not_sent',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `invoice_number` (`invoice_number`),
  KEY `idx_invoice_order` (`order_id`),
  KEY `idx_invoice_customer` (`customer_id`),
  KEY `idx_invoice_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_invoice_item`
--

DROP TABLE IF EXISTS `_invoice_item`;
CREATE TABLE IF NOT EXISTS `_invoice_item` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `invoice_id` bigint NOT NULL,
  `item_id` bigint NOT NULL,
  `quantity` int NOT NULL,
  `unit_price` decimal(15,2) NOT NULL,
  `tax_rate` decimal(5,2) NOT NULL,
  `discount_rate` decimal(5,2) DEFAULT '0.00',
  `line_total` decimal(15,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `invoice_id` (`invoice_id`),
  KEY `item_id` (`item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_item`
--

DROP TABLE IF EXISTS `_item`;
CREATE TABLE IF NOT EXISTS `_item` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `product_id` bigint NOT NULL,
  `serial_number` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `sku` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci NOT NULL,
  `barcode` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci NOT NULL,
  `expiration_date` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `barcode` (`barcode`),
  UNIQUE KEY `serial_number` (`serial_number`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `_item`
--

INSERT INTO `_item` (`id`, `product_id`, `serial_number`, `sku`, `barcode`, `expiration_date`, `created_at`, `updated_at`) VALUES
(1, 1, '948465', '456876', 'A-0010-Z', '2027-09-26', '2025-04-27 19:16:16', '2025-04-27 21:01:32'),
(2, 2, '785756', '456876', 'A-0120-Z', '2026-06-10', '2025-04-27 19:16:16', '2025-04-27 21:01:21');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_market`
--

DROP TABLE IF EXISTS `_market`;
CREATE TABLE IF NOT EXISTS `_market` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `company_id` bigint DEFAULT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci NOT NULL,
  `description` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `_market`
--

INSERT INTO `_market` (`id`, `company_id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 1, 'MYSIS TGA Market', '', '2025-04-27 19:14:21', '2025-04-27 21:10:17');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_market_item`
--

DROP TABLE IF EXISTS `_market_item`;
CREATE TABLE IF NOT EXISTS `_market_item` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `market_id` bigint NOT NULL,
  `item_id` bigint NOT NULL,
  `price` float NOT NULL DEFAULT '0',
  `quantity` smallint NOT NULL DEFAULT '0',
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_order_item_item` (`item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `_market_item`
--

INSERT INTO `_market_item` (`id`, `market_id`, `item_id`, `price`, `quantity`, `content`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 100, 30, 'Tamamen çalışma için üretilmiş eşsiz makine', '2025-04-27 19:22:13', '2025-04-27 19:22:13'),
(2, 1, 2, 900, 300, 'Kokusu 1 gün boyunca kalan uzun ömürlü parfürm', '2025-04-27 19:22:13', '2025-04-27 19:22:13');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_notification`
--

DROP TABLE IF EXISTS `_notification`;
CREATE TABLE IF NOT EXISTS `_notification` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `title` varchar(100) COLLATE utf8mb4_turkish_ci NOT NULL,
  `message` text COLLATE utf8mb4_turkish_ci NOT NULL,
  `notification_type` varchar(50) COLLATE utf8mb4_turkish_ci NOT NULL,
  `related_entity_type` varchar(50) COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `related_entity_id` bigint DEFAULT NULL,
  `is_read` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_notification_user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_offer`
--

DROP TABLE IF EXISTS `_offer`;
CREATE TABLE IF NOT EXISTS `_offer` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `offerer_id` bigint NOT NULL,
  `offerer_type` enum('supplier_company','demander_customer') COLLATE utf8mb4_turkish_ci NOT NULL,
  `status` enum('draft','sent','accepted','rejected','expired') COLLATE utf8mb4_turkish_ci DEFAULT 'draft',
  `valid_until` date DEFAULT NULL,
  `discount_amount` decimal(15,2) DEFAULT '0.00',
  `tax_amount` decimal(15,2) DEFAULT '0.00',
  `notes` text COLLATE utf8mb4_turkish_ci,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_offer_customer` (`offerer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_offer_document`
--

DROP TABLE IF EXISTS `_offer_document`;
CREATE TABLE IF NOT EXISTS `_offer_document` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `offer_id` bigint NOT NULL,
  `document_type` varchar(50) COLLATE utf8mb4_turkish_ci NOT NULL,
  `file_path` varchar(255) COLLATE utf8mb4_turkish_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `offer_id` (`offer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_offer_item`
--

DROP TABLE IF EXISTS `_offer_item`;
CREATE TABLE IF NOT EXISTS `_offer_item` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `offer_id` bigint NOT NULL,
  `market_item_id` bigint NOT NULL,
  `quantity` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `offer_id` (`offer_id`),
  KEY `idx_offer_item` (`market_item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_order`
--

DROP TABLE IF EXISTS `_order`;
CREATE TABLE IF NOT EXISTS `_order` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `customer_id` bigint NOT NULL,
  `product_id` bigint NOT NULL,
  `quantity` int DEFAULT '1',
  `status` enum('pending','shipped','completed','cancelled') CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `customer_id` (`customer_id`) USING BTREE,
  KEY `product_id` (`product_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `_order`
--

INSERT INTO `_order` (`id`, `customer_id`, `product_id`, `quantity`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, '', '2025-04-27 21:20:22', '2025-04-27 21:20:22'),
(2, 2, 2, 2, '', '2025-04-27 21:20:22', '2025-04-27 21:20:22');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_payment`
--

DROP TABLE IF EXISTS `_payment`;
CREATE TABLE IF NOT EXISTS `_payment` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `customer_id` bigint NOT NULL,
  `invoice_id` bigint DEFAULT NULL,
  `order_id` bigint DEFAULT NULL,
  `payment_number` varchar(50) COLLATE utf8mb4_turkish_ci NOT NULL,
  `amount` decimal(15,2) NOT NULL,
  `payment_date` date NOT NULL,
  `payment_method` enum('cash','credit_card','bank_transfer','check','other') COLLATE utf8mb4_turkish_ci NOT NULL,
  `currency` varchar(3) COLLATE utf8mb4_turkish_ci DEFAULT 'TRY',
  `status` enum('pending','completed','failed','refunded') COLLATE utf8mb4_turkish_ci DEFAULT 'pending',
  `transaction_reference` varchar(100) COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `notes` text COLLATE utf8mb4_turkish_ci,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `payment_number` (`payment_number`),
  KEY `customer_id` (`customer_id`),
  KEY `idx_payment_invoice` (`invoice_id`),
  KEY `idx_payment_order` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_payment_installment`
--

DROP TABLE IF EXISTS `_payment_installment`;
CREATE TABLE IF NOT EXISTS `_payment_installment` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `payment_id` bigint NOT NULL,
  `installment_number` int NOT NULL,
  `due_date` date NOT NULL,
  `amount` decimal(15,2) NOT NULL,
  `status` enum('pending','paid','overdue') COLLATE utf8mb4_turkish_ci DEFAULT 'pending',
  `paid_date` date DEFAULT NULL,
  `notes` text COLLATE utf8mb4_turkish_ci,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `payment_id` (`payment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_product`
--

DROP TABLE IF EXISTS `_product`;
CREATE TABLE IF NOT EXISTS `_product` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `category_id` bigint DEFAULT NULL,
  `brand_id` bigint DEFAULT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `_product`
--

INSERT INTO `_product` (`id`, `category_id`, `brand_id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'İş Bilgisayarı', NULL, '2025-04-27 19:12:24', '2025-04-27 20:42:07'),
(2, 2, 2, 'Hoş Kokulu Parfürm', NULL, '2025-04-27 19:12:24', '2025-04-27 20:42:09');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_report`
--

DROP TABLE IF EXISTS `_report`;
CREATE TABLE IF NOT EXISTS `_report` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_turkish_ci NOT NULL,
  `description` text COLLATE utf8mb4_turkish_ci,
  `report_type` enum('sales','inventory','payment','customer','supplier') COLLATE utf8mb4_turkish_ci NOT NULL,
  `parameters` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_role`
--

DROP TABLE IF EXISTS `_role`;
CREATE TABLE IF NOT EXISTS `_role` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_turkish_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `_role`
--

INSERT INTO `_role` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'super_admin', '2025-04-21 17:14:52', '2025-04-21 17:15:03'),
(2, 'admin', '2025-04-27 14:20:04', '2025-04-27 14:20:04'),
(3, 'customer', '2025-04-27 14:20:18', '2025-04-27 14:20:18');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_shipping`
--

DROP TABLE IF EXISTS `_shipping`;
CREATE TABLE IF NOT EXISTS `_shipping` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `order_id` bigint NOT NULL,
  `shipping_method` enum('road','air','sea') COLLATE utf8mb4_turkish_ci NOT NULL,
  `tracking_number` varchar(100) COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `carrier` varchar(100) COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `estimated_delivery` date DEFAULT NULL,
  `actual_delivery` date DEFAULT NULL,
  `status` enum('preparing','shipped','in_transit','delivered','returned') COLLATE utf8mb4_turkish_ci DEFAULT 'preparing',
  `shipping_cost` decimal(15,2) DEFAULT NULL,
  `customs_cost` decimal(15,2) DEFAULT NULL,
  `insurance_cost` decimal(15,2) DEFAULT NULL,
  `total_cost` decimal(15,2) DEFAULT NULL,
  `notes` text COLLATE utf8mb4_turkish_ci,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_shipping_order` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_stock`
--

DROP TABLE IF EXISTS `_stock`;
CREATE TABLE IF NOT EXISTS `_stock` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `item_id` bigint DEFAULT NULL,
  `warehouse_id` bigint DEFAULT NULL,
  `quantity` bigint NOT NULL DEFAULT '0',
  `reserved_quantity` bigint NOT NULL DEFAULT '0',
  `is_unlimited_quantity` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `warehouse_id` (`warehouse_id`),
  KEY `item_id` (`item_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `_stock`
--

INSERT INTO `_stock` (`id`, `item_id`, `warehouse_id`, `quantity`, `reserved_quantity`, `is_unlimited_quantity`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 50, 0, 0, '2025-04-27 21:24:06', '2025-04-27 21:24:06'),
(2, 2, 1, 1000, 0, 0, '2025-04-27 21:24:06', '2025-04-27 21:24:06');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_stock_transaction`
--

DROP TABLE IF EXISTS `_stock_transaction`;
CREATE TABLE IF NOT EXISTS `_stock_transaction` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `stock_id` bigint DEFAULT NULL,
  `transaction_type` enum('inbound','outbound') CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci NOT NULL,
  `quantity` int NOT NULL,
  `transaction_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `stock_id` (`stock_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_supplier`
--

DROP TABLE IF EXISTS `_supplier`;
CREATE TABLE IF NOT EXISTS `_supplier` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `company_id` bigint NOT NULL COMMENT 'supplier',
  `product_id` bigint NOT NULL COMMENT 'supplying product',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_user`
--

DROP TABLE IF EXISTS `_user`;
CREATE TABLE IF NOT EXISTS `_user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `role_id` bigint NOT NULL DEFAULT '3',
  `username` varchar(50) COLLATE utf8mb4_turkish_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_turkish_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci NOT NULL,
  `phone_number` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `status` enum('not_verified','verified','banned') COLLATE utf8mb4_turkish_ci DEFAULT 'not_verified',
  `last_login` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `_user`
--

INSERT INTO `_user` (`id`, `role_id`, `username`, `email`, `password`, `phone_number`, `status`, `last_login`, `created_at`, `updated_at`) VALUES
(1, 1, 'snrc', 'webkule.studios@gmail.com', '123456', '5347100469', 'verified', NULL, '2025-04-21 15:22:42', '2025-04-27 21:24:58'),
(2, 3, 'ttss', 'testmusteri@mail.com', '123456', '5424056547', 'verified', NULL, '2025-04-23 16:38:46', '2025-04-27 21:25:01');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `_warehouse`
--

DROP TABLE IF EXISTS `_warehouse`;
CREATE TABLE IF NOT EXISTS `_warehouse` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `address_id` bigint DEFAULT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci NOT NULL,
  `capacity` bigint DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `_warehouse`
--

INSERT INTO `_warehouse` (`id`, `address_id`, `name`, `capacity`, `created_at`, `updated_at`) VALUES
(1, 4, 'TGA Tuzla Depo 1', 5000, '2025-04-27 20:52:23', '2025-04-27 20:52:23');

--
-- Dökümü yapılmış tablolar için kısıtlamalar
--

--
-- Tablo kısıtlamaları `_cart`
--
ALTER TABLE `_cart`
  ADD CONSTRAINT `_cart_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `_customer` (`id`) ON DELETE CASCADE;

--
-- Tablo kısıtlamaları `_cart_market_item`
--
ALTER TABLE `_cart_market_item`
  ADD CONSTRAINT `_cart_market_item_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `_cart` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `_cart_market_item_ibfk_2` FOREIGN KEY (`market_item_id`) REFERENCES `_market_item` (`id`) ON DELETE CASCADE;

--
-- Tablo kısıtlamaları `_dispatch_item`
--
ALTER TABLE `_dispatch_item`
  ADD CONSTRAINT `_dispatch_item_ibfk_1` FOREIGN KEY (`dispatch_id`) REFERENCES `_dispatch_note` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `_dispatch_item_ibfk_2` FOREIGN KEY (`item_id`) REFERENCES `_item` (`id`);

--
-- Tablo kısıtlamaları `_dispatch_note`
--
ALTER TABLE `_dispatch_note`
  ADD CONSTRAINT `_dispatch_note_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `_order` (`id`),
  ADD CONSTRAINT `_dispatch_note_ibfk_2` FOREIGN KEY (`shipping_id`) REFERENCES `_shipping` (`id`);

--
-- Tablo kısıtlamaları `_franchise`
--
ALTER TABLE `_franchise`
  ADD CONSTRAINT `_franchise_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `_customer` (`id`);

--
-- Tablo kısıtlamaları `_franchise_discount`
--
ALTER TABLE `_franchise_discount`
  ADD CONSTRAINT `_franchise_discount_ibfk_1` FOREIGN KEY (`franchise_id`) REFERENCES `_franchise` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `_franchise_discount_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `_user` (`id`);

--
-- Tablo kısıtlamaları `_franchise_document`
--
ALTER TABLE `_franchise_document`
  ADD CONSTRAINT `_franchise_document_ibfk_1` FOREIGN KEY (`franchise_id`) REFERENCES `_franchise` (`id`) ON DELETE CASCADE;

--
-- Tablo kısıtlamaları `_invoice`
--
ALTER TABLE `_invoice`
  ADD CONSTRAINT `_invoice_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `_order` (`id`),
  ADD CONSTRAINT `_invoice_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `_customer` (`id`);

--
-- Tablo kısıtlamaları `_invoice_item`
--
ALTER TABLE `_invoice_item`
  ADD CONSTRAINT `_invoice_item_ibfk_1` FOREIGN KEY (`invoice_id`) REFERENCES `_invoice` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `_invoice_item_ibfk_2` FOREIGN KEY (`item_id`) REFERENCES `_item` (`id`);

--
-- Tablo kısıtlamaları `_notification`
--
ALTER TABLE `_notification`
  ADD CONSTRAINT `_notification_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `_user` (`id`) ON DELETE CASCADE;

--
-- Tablo kısıtlamaları `_offer`
--
ALTER TABLE `_offer`
  ADD CONSTRAINT `_offer_ibfk_1` FOREIGN KEY (`offerer_id`) REFERENCES `_customer` (`id`) ON DELETE CASCADE;

--
-- Tablo kısıtlamaları `_offer_document`
--
ALTER TABLE `_offer_document`
  ADD CONSTRAINT `_offer_document_ibfk_1` FOREIGN KEY (`offer_id`) REFERENCES `_offer` (`id`) ON DELETE CASCADE;

--
-- Tablo kısıtlamaları `_offer_item`
--
ALTER TABLE `_offer_item`
  ADD CONSTRAINT `_offer_item_ibfk_1` FOREIGN KEY (`offer_id`) REFERENCES `_offer` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `_offer_item_ibfk_2` FOREIGN KEY (`market_item_id`) REFERENCES `_market_item` (`id`);

--
-- Tablo kısıtlamaları `_payment`
--
ALTER TABLE `_payment`
  ADD CONSTRAINT `_payment_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `_customer` (`id`),
  ADD CONSTRAINT `_payment_ibfk_2` FOREIGN KEY (`invoice_id`) REFERENCES `_invoice` (`id`),
  ADD CONSTRAINT `_payment_ibfk_3` FOREIGN KEY (`order_id`) REFERENCES `_order` (`id`);

--
-- Tablo kısıtlamaları `_payment_installment`
--
ALTER TABLE `_payment_installment`
  ADD CONSTRAINT `_payment_installment_ibfk_1` FOREIGN KEY (`payment_id`) REFERENCES `_payment` (`id`) ON DELETE CASCADE;

--
-- Tablo kısıtlamaları `_report`
--
ALTER TABLE `_report`
  ADD CONSTRAINT `_report_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `_user` (`id`);

--
-- Tablo kısıtlamaları `_shipping`
--
ALTER TABLE `_shipping`
  ADD CONSTRAINT `_shipping_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `_order` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
