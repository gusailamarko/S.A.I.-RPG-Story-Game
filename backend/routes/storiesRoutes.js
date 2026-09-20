import express from 'express';
import { fetchAllStories, createStory } from '../controllers/storyController.js';
import { upload } from '../middleware/file_upload.js';
import { isLoggedIn } from '../middleware/auth_middleware.js';

const router = express.Router();

router.get('/all', isLoggedIn, fetchAllStories);

router.post('/create', isLoggedIn, upload.single("titleImg"), createStory);

export default router;