import fs from 'fs';
import CustomError from "../errors/custom_error.js";
import { getAllStoriesBasicInfo, createNewStory } from "../db/queries/story_queries.js";

export async function fetchAllStories(req, res, next) {
    try {
        const stories = await getAllStoriesBasicInfo();
        
        if(!stories) {
            throw new CustomError('No stories found!', 404);
        }

        res.status(200).json(stories);
    }
    catch(e) {
        next(e);
    }
};

export async function createStory(req, res, next) {
    try
    {
        const {storyName, genre, storyDesc, storyIntro, storyGoal} = req.body;
        const imageName = req.file ? req.file.filename : null;
        if(!imageName) {
            throw new CustomError("No image found!", 400);
        }

        const newStory = await createNewStory(genre, storyName, imageName, storyDesc, storyIntro, storyGoal);

        res.status(201).json(newStory);
    }
    catch(e) {
        if (req.file) {
            fs.unlink(req.file.path, () => {});
        }
        next(e);
    }
};