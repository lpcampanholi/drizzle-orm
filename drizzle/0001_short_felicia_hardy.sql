CREATE TABLE `posts` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`text` varchar(1000) NOT NULL,
	CONSTRAINT `posts_id` PRIMARY KEY(`id`)
);
