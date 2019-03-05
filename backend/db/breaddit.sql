DROP DATABASE IF EXISTS breaddit;
CREATE DATABASE breaddit;
/*add timestamp to posts and comments*/

\c breaddit;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR UNIQUE NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  password VARCHAR NOT NULL
);

CREATE TABLE subs (
  id SERIAL PRIMARY KEY,
  name VARCHAR UNIQUE NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  score INT,
  userId INT REFERENCES users(id),
  subId INT REFERENCES subs(id),
  title VARCHAR NOT NULL,
  text TEXT,
  pic VARCHAR
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  score INT,
  user_id INT REFERENCES users(id),
  text TEXT
);

INSERT INTO users (name, email, password)
  VALUES ('AJ', 'ajnursemd@gmail.com', 'codenode');

INSERT INTO subs (name)
  VALUES ('bread'), 
  ('rollvshero'),
  ('breaddings'),
  ('AskBreaddit'),
  ('Breadime');