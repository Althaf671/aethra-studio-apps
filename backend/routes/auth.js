// This is routes/auth.js

import express from "express";
import { register, login, forgotPassword, resetPassword, googleAuth  } from "../controllers/authController.js";

const router = express.Router();

// @route   POST /api/auth/register
router.post('/register', register);

// @route   POST /api/auth/login
router.post('/login', login);

// @route   POST /api/auth/forgot-password
router.post('/forgot-password', forgotPassword);

// @route   POST /api/auth/reset-password/:token
router.post('/reset-password/:token', resetPassword);

// @route   POST /api/auth/google
router.post('/google', googleAuth);

export default router;