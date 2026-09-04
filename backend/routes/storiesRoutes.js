import express from 'express';
import { fetchAllStories } from '../controllers/storyController.js';

const router = express.Router();

router.get('/all', fetchAllStories);

export default router;