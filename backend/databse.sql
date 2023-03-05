CREATE DATABASE D_THINK_TANK

CREATE TABLE USERS(
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(25),
    user_email VARCHAR(25),
    user_password VARCHAR(25),
)

CREATE TABLE quiz(
    quiz_id SERIAL PRIMARY KEY,
    quiz_name VARCHAR(20)

)
CREATE TABLE question(
    question_id SERIAL PRIMARY KEY,
    question VARCHAR(225),
    answers VARCHAR [],
    quiz_id SERIAL,
    correctAnswer VARCHAR(225),
    FOREIGN KEY (quiz_id) REFERENCES quiz(quiz_id)
)

CREATE TABLE game(
    game_id uuid PRIMARY KEY,
    pin INT,
    quiz_id SERIAL,
    FOREIGN KEY (quiz_id) REFERENCES quiz(quiz_id)
)

CREATE TABLE players(
    player_id SERIAL PRIMARY KEY,
    nickname VARCHAR(10) UNIQUE,
    points INT ,
    game_id uuid,
    FOREIGN KEY (game_id) REFERENCES game(game_id);
 );
 