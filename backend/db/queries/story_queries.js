import {pool} from '../pool.js';

export async function getAllStoriesBasicInfo() {
    const result = await pool.query(
        `SELECT s.storyID, s.genreID, s.authorID, s.storyName, s.titleImg, u.displayName AS author
        FROM stories s
        JOIN users u ON s.authorID = u.userID`
    );

    return result.rows;
}