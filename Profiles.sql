CREATE TABLE Profiles (
    ID SERIAL PRIMARY KEY
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NULL,
    year INTEGER NULL,
    password_hash VARCHAR (100) NOT NULL
);