use biblioteca_musical;

create table `users` (
	`id` int(5) unsigned not null auto_increment,
    `nombre` varchar(50) not null,
    `edad` int(3) not null,
    `email` varchar(100) not null,
    `contrasena` varchar(255) not null,
    `role` enum('user','admin') not null,
    `createdAt` DATETIME NULL,
	`updatedAt` DATETIME NULL,
    primary key (`id`),
    unique (`email`)
) ENGINE=INNODB;

create table `tracks` (
	`id` int(5) unsigned not null auto_increment,
    `nombre` varchar(50) not null,
    `album` varchar(50) not null,
    `caratula` varchar(50) not null, #cover
    `artista_nombre` varchar(50) not null,
    `artista_nickname` varchar(50) not null,
    `artista_nacionalidad` varchar(50) not null,
    `duracion_start` time not null,
    `duracion_end` time not null,
    `mediaId` varchar(50) not null, #no se que va a ser
    `createdAt` DATETIME NULL,
	`updatedAt` DATETIME NULL,
    primary key (`id`)
) ENGINE=INNODB;

create table `storage` (
	`id` int(5) unsigned not null auto_increment,
    `url` varchar(200) not null,
    `filename` varchar(50) not null,
    `createdAt` DATETIME NULL,
	`updatedAt` DATETIME NULL,
    primary key (`id`)
) ENGINE=INNODB;

