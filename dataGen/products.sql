DROP DATABASE IF EXISTS

CREATE DATABASE postgres;

\c postgres;

DROP TABLE IF EXISTS sdcproducts;

CREATE TABLE sdcproducts (
  product_id SERIAL PRIMARY KEY,
  name VARCHAR(60) NOT NULL,
  image_url varchar(250) NOT NULL,
  price integer NOT NULL,
  description varchar(250) NOT NULL,
  category_id integer NOT NULL
  );
