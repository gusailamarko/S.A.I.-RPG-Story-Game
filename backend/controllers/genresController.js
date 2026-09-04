import CustomError from '../errors/custom_error.js';
import { getAllGenres } from '../db/queries/genre_queries.js';

export const fetchAllGenres = async (req, res, next) => {
    try {
        const genres = await getAllGenres();

        if(!genres) {
            throw new CustomError('No genres found!', 404);
        }

        res.status(200).json(genres);
    }
    catch(e) {
        next(e);
    }
};