-- CREATE DATABASE volunteerhood;
USE volunteerhood;

-- CREATE TABLE skills(
--     name VARCHAR(50) NOT NULL PRIMARY KEY
-- );

-- CREATE TABLE user (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(50),
--     email VARCHAR(50)  NOT NULL UNIQUE,
--     password VARCHAR(20) NOT NULL,
--     phone INT NOT NULL,
--     radius FLOAT,
--     ranking FLOAT,
--     counter INT
-- );

-- CREATE TABLE help_requests (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     userReq INT NOT NULL,
--     userHelper INT,
--     status ENUM ('open', 'in process', 'completed'),
--     description VARCHAR(255) NOT NULL,
--     skill VARCHAR(50) NOT NULL,
--     date DATE,
--     name VARCHAR(50),
--     FOREIGN KEY (userReq) REFERENCES user(id),
--     FOREIGN KEY (userHelper) REFERENCES user(id),
--     FOREIGN KEY (skill) REFERENCES skills(name)
-- );

-- CREATE TABLE user_skills (
--     user INT NOT NULL,
--     skill VARCHAR(50) NOT NULL,
--     FOREIGN KEY (user) REFERENCES user(id),
--     FOREIGN KEY (skill) REFERENCES skills(name)
-- );

-- INSERT INTO skills VALUES('Math' );
-- INSERT INTO skills VALUES('Electricity' );
-- INSERT INTO skills VALUES('Design' );
-- INSERT INTO skills VALUES('Carpentry' );
-- INSERT INTO skills VALUES('Languages' );
-- INSERT INTO skills VALUES('Legal' );
-- INSERT INTO skills VALUES('Plumbing' );
-- INSERT INTO skills VALUES('Writing' );
-- INSERT INTO skills VALUES('Programming' );

-- DROP TABLE user;
-- DROP TABLE skills;
-- DROP TABLE help_requests;
-- DROP TABLE user_skills;
-- DROP TABLE help_requests_helpers;

-- CREATE TABLE help_requests_helpers(
--     help_request_id INT NOT NULL,
--     helper_id INT NOT NULL,
--     FOREIGN KEY (help_request_id) REFERENCES help_requests(id),
--     FOREIGN KEY (helper_id) REFERENCES user(id)
-- )

ALTER TABLE help_requests_helpers
ADD helperName VARCHAR(50)