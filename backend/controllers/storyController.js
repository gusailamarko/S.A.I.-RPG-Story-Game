import CustomError from "../errors/custom_error.js";
import { getAllStoriesBasicInfo } from "../db/queries/story_queries.js";

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
}