import { pool } from "../pool.js";

export async function getUserByUsername(username) {
    const result = await pool.query(
        `SELECT userID, username
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