import express from 'express';
import { fetchAllStories, createStory } from '../controllers/storyController.js';
import { upload } from '../middleware/file_upload.js';

const router = express.Router();

router.get('/all', fetchAllStories);

router.post('/create', upload.single("titleImg"), createStory);

export default router;