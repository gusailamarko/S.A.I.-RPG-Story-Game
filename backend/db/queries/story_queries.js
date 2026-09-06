import {pool} from '../pool.js';

export async function getAllStoriesBasicInfo() {
    const result = await pool.query(
        `SELECT s.storyID, s.genreID, s.authorID, s.storyName, s.titleImg, u.displayName AS author
        FROM stories s
        JOIN users u ON s.authorID = u.userID`
    );

    return result.rows;
};

export async function createNewStory(genre, storyName, imageName, storyDesc, storyIntro, storyGoal) {
    const result = await pool.query(
        `INSERT INTO stories (genreID, authorID, storyName, titleImg, storyDesc, intro, storyObj)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *`,
        [genre, 1, storyName, imageName, storyDesc, storyIntro, storyGoal]
    );

    return result.rows[0];
};