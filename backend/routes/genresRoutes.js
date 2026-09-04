import express from 'express';
import { fetchAllGenres } from '../controllers/genresController.js';

const router = express.Router();

router.get('/all', fetchAllGenres);

export default router;