// server/src/routes/auth.ts
import express from 'express';
import { signup } from '../controllers/authController';

const router = express.Router();

// POST /api/signup
router.post('/signup', signup);

export default router;
