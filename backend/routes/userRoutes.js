import express from 'express'
import { profileData, ownStories } from '../controllers/userController.js';
import { isLoggedIn } from '../middleware/auth_middleware.js';

const router = express.Router();

router.get('/profileData', isLoggedIn, profileData);

router.get('/profileStories', isLoggedIn, ownStories);

export default router;