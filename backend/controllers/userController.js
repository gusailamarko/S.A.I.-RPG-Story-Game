import CustomError from '../errors/custom_error.js';
import { getProfileData, getOwnStories } from '../db/queries/user_queries.js';

export async function profileData(req, res, next) {
    try {
        const userData = await getProfileData(req.session.user.userid);
        if(!userData) throw new CustomError("User not found!", 404);

        res.status(200).json(userData);
    }
    catch (e) {
        next(e);
    }
};

export async function ownStories(req, res, next) {
    try {
        const userStories = await getOwnStories(req.session.user.userid);
        if(!userStories) throw new CustomError("This user hasn't created a story yet!", 404);

        res.status(200).json(userStories);
    }
    catch(e) {
        next(e);
    }
};