-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 25, 2022 at 05:09 AM
-- Server version: 10.3.35-MariaDB-log-cll-lve
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lamuzkxm_mernapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `comment_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `text` varchar(500) NOT NULL,
  `date_created` datetime DEFAULT NULL,
  `user_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`comment_id`, `post_id`, `text`, `date_created`, `user_name`) VALUES
(148, 69, 'Good article =)', '2022-07-24 23:04:04', 'Nick'),
(149, 70, 'Love it. ', '2022-07-24 23:10:30', 'Abel');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `text` varchar(4000) NOT NULL,
  `date_created` date DEFAULT NULL,
  `img_url` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`post_id`, `user_id`, `title`, `text`, `date_created`, `img_url`) VALUES
(69, 4, 'HTML  ', 'HTML is the language for describing the structure of Web pages. HTML gives authors the means to: Publish online documents with headings, text, tables, lists, photos, etc. Retrieve online information via hypertext links, at the click of a button.\n\nThe <!DOCTYPE html> declaration defines that this document is an HTML5 document\nThe <html> element is the root element of an HTML page\nThe <head> element contains meta information about the HTML page\nThe <title> element specifies a title for the HTML page (which is shown in the browser\'s title bar or in the page\'s tab)\nThe <body> element defines the document\'s body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.\nThe <h1> element defines a large heading\nThe <p> element defines a paragraph\n', '2022-07-24', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png'),
(70, 4, 'What is CSS   ', 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. CSS can be used for very basic document text styling — for example, for changing the colorand size of headings and links. It can be used to create a layout — for example, turning a single column of text into a layout with a main content area and a sidebar for related information. It can even be used for effects such as animation. Have a look at the links in this paragraph for specific examples.', '2022-07-24', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/640px-CSS3_logo_and_wordmark.svg.png'),
(71, 4, 'What is JavaScript  ', 'JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.\n\n\n', '2022-07-24', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'),
(72, 4, 'Front-end vs Back-end ', 'What is front end development?\nFront end developers build with the user in mind. Front end development is a style of computer programming that focuses on the coding and creation of elements and features of a website that will then be seen by the user. It’s about making sure the visual aspects of a website are functional. You can also think of front end as the “client side” of an application. So let’s say you’re a front end developer. This means your job is to code and bring to life the visual elements of a website. You’d be more focused on what the user sees when they visit a website or app. And, you’d want to make sure the site is easy to interact with while also running smoothly. \n\nThese developers take the visual designs from UX and UI designers and bring the website to life, making sure it functions well for the user. One of the many ways you could use front end skills is in creating a static website, which is a website with fixed content that’s delivered to a user’s browser exactly as it’s stored. You might run into a static website if you happen upon a simple landing page or a small business website that doesn’t allow users to perform any interactive tasks.\n\nFront end developers build elements like: \n\nButtons\nLayouts\nNavigation\nImages \nGraphics\nAnimations\nContent organization \nWhat is back end development?\nBack end development focuses on the side of the website users can’t see. It’s what makes a site interactive. You can also refer to the back end as the “server side” of a website. For instance, let’s say you’re running a social media website. You need an accessible place to store all of your users’ information. This storage center is called a database and a few widely used examples include Oracle, SQL Server, and MySQL. Databases are run from a server, which is essentially a remote computer. A back end developer will help manage this database, as well as the site contents stored on it. This ensures that front end elements on your social media website can continue to function properly as users browse uploaded content and other user profiles.  \n\nWhile users do not directly interact with the back end of a website, they’ll indirectly interact with elements these developers work on through a front-end application. Back end development deals with storing and arranging data while also ensuring the front end is functioning well. \n\nBack end web developers work on tasks like: \n\nBuilding code\nTroubleshooting and debugging web applications\nDatabase management \nFramework utilization \nFront end vs. back end: what’s the difference? \nStill thinking, “Front end vs. back end…what’s the difference?” Now that you’ve gotten an overview of both front and back end, let’s discuss their differences. There are 4 main distinctions that set front and back end development apart. \n\nFront and back end developers work on different sides of a website \n\nFront end development is programming which focuses on the visual elements of a website or app that a user will interact with (the client side). Meanwhile, back end development focuses on the side of a website users can’t see (the server side). They work together to create a dynamic website to allow users to make purchases, use contact forms, and any other interactive activities you might participate in while browsing a site. Some examples of dynamic websites are Netflix, PayPal, Facebook, and the Kenzie Academy site you’re currently on.\n\n', '2022-07-24', 'https://www.nemesis-studio.com/wp-content/uploads/2017/07/front-back-end.png?v=1637161606');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`) VALUES
(4, 'admin@email.com', '$2b$10$zkF5xYMr16OJPyOW52j5EO2VUT6AcQH65RN3/04SR3TK.pIcImpHi');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `comments_ibfk_1_idx` (`post_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=152;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
