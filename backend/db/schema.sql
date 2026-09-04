-- Role as a PostgreSQL native enum type:
CREATE TYPE user_role AS ENUM ('user', 'admin');

-- Users table:
CREATE TABLE users (
    userID SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    displayname VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role user_role NOT NULL DEFAULT 'user',
    pfp TEXT DEFAULT 'defaultFallbacks/defaultProfilePfp.webp',
    banner TEXT DEFAULT 'defaultFallbacks/defaultProfileBg.webp',
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Genres table:
CREATE TABLE genres (
    genreID SERIAL PRIMARY KEY,
    genreName VARCHAR(50) UNIQUE NOT NULL
);

-- Stories table:
CREATE TABLE stories (
    storyID SERIAL PRIMARY KEY,
    genreID INT NOT NULL REFERENCES genres(genreID),
    authorID INT NOT NULL REFERENCES users(userID),
    storyName VARCHAR(100) NOT NULL,
    titleImg TEXT NOT NULL,
    storyDesc TEXT NOT NULL,
    intro TEXT NOT NULL,
    storyObj TEXT NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Playthroughs table:

-- Story messages table: