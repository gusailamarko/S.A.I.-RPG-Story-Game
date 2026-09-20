import express from 'express';
import { fetchAllGenres } from '../controllers/genresController.js';
import { isLoggedIn } from '../middleware/auth_middleware.js';

const router = express.Router();

router.get('/all', isLoggedIn, fetchAllGenres);

export default router;