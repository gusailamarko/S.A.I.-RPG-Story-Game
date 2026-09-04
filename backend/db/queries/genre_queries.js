import {pool} from '../pool.js';

export async function getAllGenres() {
    const result = await pool.query(
        `SELECT * FROM genres`
    );

    return result.rows;
}