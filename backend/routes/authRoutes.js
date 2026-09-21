import express from 'express'
import { login, register, getMe, logout } from '../controllers/authController.js';
import { isLoggedIn } from '../middleware/auth_middleware.js';

const router = express.Router();

router.post('/login', login);

router.post('/register', register);

router.post('/logout', logout);

router.get('/getMe', isLoggedIn, getMe);

export default router;