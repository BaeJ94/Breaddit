DROP DATABASE IF EXISTS breaddit;
CREATE DATABASE breaddit;

\c breaddit;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR UNIQUE,
  email VARCHAR UNIQUE,
  password VARCHAR
);


INSERT INTO users (name)
  VALUES ('Bread'),
  ('Fed'),
  ('Ted'),
  ('Spread'),
  ('Med'),
  ('Bed'),
  ('Dead'),
  ('Lead'),
  ('Red');