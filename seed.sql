create database bamazon_db

USE bamazon_db;

CREATE table products (
	item_id int not null auto_increment,
    product_name varchar(255) null,
    department_name varchar(255) null,
    price decimal (10, 2) null,
    stock_quantity int null,
    primary key (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("white envelopes", "office", 19.99, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ecosmart Lightbulbs", "home", 10.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Collectors Book of Dols", "Books", 10.00, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("walkie-talkie", "toys", 20.00, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Markal ball paint marker", "art supplies", 5.00, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Garbage Pail kids VHS", "video", 200.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bernina sewing machine", "sewing", 100.00, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Joker digital watch", "novelty", 10.00, 13);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Koh-i-noor pen cleaning kit", "art supplies", 15.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("glue gun", "art supplies", 5.00, 16);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("shake weight", "fitness", 19.99, 999);