DROP DATABASE IF EXISTS Template;

CREATE DATABASE Template;

USE Template;

CREATE TABLE projs
(
  id int NOT NULL
  AUTO_INCREMENT,
  name varchar
  (50) NOT NULL,
  is_favorite boolean NOT NULL default 0,
  PRIMARY KEY
  (id)
);

  CREATE TABLE status_fill
  (
    id int NOT NULL
    AUTO_INCREMENT,
  projs_id int NOT NULL,
  is_complete boolean NOT NULL default 0,
  PRIMARY KEY
    (id)
);




    /*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql
 *  
 *    
 *  and then you'll have to enter the password, 
 *  On your personal computer, if you haven't set up
 *  a password, it'll be 
 *    mysql -u root < schema.sql
 *
 *  
 *  
*/


    -- projs
    INSERT into projs
      (name)
    VALUES
      ("proj-1");

    -- status_fill
    INSERT into status_fill
      (id, projs_id)
    VALUES
      ("456456", "e11a57");


   