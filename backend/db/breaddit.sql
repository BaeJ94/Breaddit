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

INSERT INTO posts (score, subId, title, text, pic)
  VALUES (1, 1, 'Lets get this shmoney', '', 'https://i.redd.it/c3shybzbw0m11.jpg'),
  (5, 1, 'Mayweather Tops the Forbes List for Highest Paid Athletes', 'Floyd Mayweather earned $285 Million in 2018. More than double the next athlete.', 'https://akns-images.eonline.com/eol_images/Entire_Site/2014826/rs_600x600-140926093254-600.Ffloyd-Mayweather-In-Bed-With-Money.jl.092614.jpg?fit=inside|900:auto&output-quality=90' ),
  (10, 1, 'Money Money Money...Money!', '', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyavfbDUCFTCEIj5zGUjXK6r_ETBe9t5wgm4cHxv9CAqlx9j6b'),
  (23, 1, 'Wanna Make A Lot of Money? Become A Programmer. Want To Make Someone Else A Lot Of Money?', 'Dont Encrypt Your Data.', ''),
  (150, 1, 'PUT THE MONEY, IN THE BAG!!!', '', 'https://static.fjcdn.com/pictures/Spongebob+the+thief_416380_5257140.png'),
  (12, 2, 'Have yall ever noticed that a roll looks like a shield and a hero looks like a sword?', 'Sword > Shield. Lets discuss.', ''),
  (22, 2, 'This is a sub roll. It it formed when a mommy roll and a daddy hero love each other very much.', '', 'http://www.cardinalbakery.com/product_images/heroclub_lg.jpg'),
  (79, 2, 'A Hero can fit more food inside of it, therefore this subbreaddit shouldnt even exist. Hero good. Roll bad.', '', ''),
  (33, 2, 'I know Im in the minority here, but I really think rolls are better. They may be smaller, but they are more portable and they have earned my respect.', '', ''),
  (-5, 2, 'Why does this subbreaddit exist? Wonder bread is superior to all.', '', ''),
  (100, 3, 'Here is the bread my husband and I handed out at our wedding', '', 'https://cdn.evermine.com/weddingblog/wp-content/uploads/2015/08/Zucchini-Mini-Loaf-Favors_0005.jpg'),
  (94, 4, 'What is your favorite type of bread and why?', '', ''),
  (188, 5, 'This is me whenever I cook', '', 'https://img1.ak.crunchyroll.com/i/spire3/f007ddff24ff2769f568c63608e43d081537474499_full.jpg');