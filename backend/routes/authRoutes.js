import express from 'express'
import { login, register, getMe } from '../controllers/authController.js';
import { isLoggedIn } from '../middleware/auth_middleware.js';

const router = express.Router();

router.post('/login', login);

router.post('/register', register);

router.get('/getMe', isLoggedIn, getMe);

export default router;