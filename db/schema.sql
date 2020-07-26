drop database if exists burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers 
(
    id INT auto_increment NOT NULL,
    burger_name VARCHAR(255) NOT NULL, 
    devoured BOOLEAN NOT NULL,
    date TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);