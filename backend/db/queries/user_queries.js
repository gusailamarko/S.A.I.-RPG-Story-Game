import { pool } from "../pool.js";

export async function getUserByUsername(username) {
    const result = await pool.query(
        `SELECT userID, username, role
        FROM users
        WHERE username = $1`,
        [username]
    );

    return result.rows[0];
};

export async function getUserByEmail(email) {
    const result = await pool.query(
        `SELECT userID, email, password
        FROM users
        WHERE email = $1`,
        [email]
    );

    return result.rows[0];
};

export async function registerNewUser(username, email, password) {
    const result = await pool.query(
        `INSERT INTO users (username, displayname, email, password)
        VALUES ($1, $2, $3, $4)
        RETURNING userID, username, displayname`,
        [username, username, email, password]
    );

    return result.rows[0];
};

export async function getLoggedInUserData(userid) {
    const result = await pool.query(
        `SELECT userID, username, displayname, role, pfp, credits
        FROM users
        WHERE userID = $1`,
        [userid]
    );

    return result.rows[0];
};

export async function getProfileData(userid) {
    const result = await pool.query (
        `SELECT u.userid, u.username, u.displayname, u.banner, u.pfp, (SELECT COUNT(*) FROM follows WHERE followerID = u.userid) AS followingCount, (SELECT COUNT(*) FROM follows WHERE followingID = u.userid) AS followerCount
        FROM users u
        WHERE u.userid = $1`,
        [userid]
    );

    return result.rows[0];
};

export async function getOwnStories(userid) {
    const result = await pool.query(
        `SELECT storyID, storyName, titleImg
        FROM stories
        WHERE authorID = $1`,
        [userid]
    );

    return result.rows;
};