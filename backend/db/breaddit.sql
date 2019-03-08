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

INSERT INTO subs (name)
  VALUES ('bread'), 
  ('rollvshero'),
  ('breaddings'),
  ('AskBreaddit'),
  ('Breadime');

INSERT INTO posts (score, userId, subId, title, text, pic)
  VALUES (1, 1, 1, 'Lets get this shmoney', '', 'https://i.redd.it/c3shybzbw0m11.jpg'),
  (5, 1, 1, 'Mayweather Tops the Forbes List for Highest Paid Athletes', 'Floyd Mayweather earned $285 Million in 2018. More than double the next athlete.', 'https://akns-images.eonline.com/eol_images/Entire_Site/2014826/rs_600x600-140926093254-600.Ffloyd-Mayweather-In-Bed-With-Money.jl.092614.jpg?fit=inside|900:auto&output-quality=90' ) 