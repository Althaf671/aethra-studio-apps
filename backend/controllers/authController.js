// register,login, forgot password, reset password logic
// hash password (bcrypt), generate JWT token, send email

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import crypto from "crypto";
import { sendResetEmail } from "../utils/sendEmails.js";
import { OAuth2Client } from "google-auth-library";
import dotenv from "dotenv";   

dotenv.config();
const prisma = new PrismaClient();

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    });
};

// REGISTER
export const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) return res.status(400).json({ message: "This email is already in use" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({ 
            data: { name, email, password: hashedPassword },
        });

        const token = generateToken(user.id);
        res.status(201).json({ token, user: { id: user.id, name: user.name, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: 'Registration failed', error: error.message });
    };
}

// LOGIN
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return res.status(400).json({ message: "Invalid email or password" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

        const token = generateToken(user.id);
        res.status(201).json({ token, user: { id: user.id, name: user.name, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: 'Login failed', error: error.message });
    }
};

// FORGET PASSWORD
export const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return res.status(404).json({ message: "Email not found" });

        const resetToken = crypto.randomBytes(32).toString('hex');
        const expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

        await prisma.user.update({
            where: { email },
            data: { resetToken, resetTokenExpiry: expiry },
        });

        const resetLink = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
        await sendResetEmail(email, resetLink);

        res.status(200).json({ message: "Password reset link sent to your email" });
    } catch (error) {
        res.status(500).json({ message: 'Error sending reset email', error: error.message });
    }
};

// RESET PASSWORD
export const resetPassword = async (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;
    try {
        const user = await prisma.user.findFirst({
            where: { 
                resetToken: token, 
                resetTokenExpiry: { gte: new Date() },
            }
        });

        if (!user) return res.status(400).json({ message: "Invalid or expired token" });
        
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await prisma.user.update({
            where: { id: user.id },
            data: { 
                password: hashedPassword, 
                resetToken: null, 
                resetTokenExpiry: null,
            }
        });

        res.status(200).json({ message: "Password reset successful" });
    } catch (error) {
        res.status(500).json({ message: 'Password reset failed', error: error.message });
    }
};

// GOOGLE AUTH LOGIN AND REGISTER
export const googleAuth = async (req, res) => {
    const { credential } = req.body; // Frontend must've send credential from Google
    try { 
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        const ticket = await client.verifyIdToken({ 
            idToken: credential,
            audience: process.env.GOOGLE_CLIENT_ID,
            });
        
        const payload = ticket.getPayload();
        const { email, name, picture } = payload;

        let user = await prisma.user.findFirst({ where: { email } });

        // If user haven't registered yet, create a new user
        if (!user) {
            user = await prisma.user.create({
                data: {
                    email,
                    name,
                    password: "", // The Google user has no password
                    isGoogle: true, // To create a column at schema
                }
            });
        }

        const token = generateToken(user.id);
        res.status(200).json({ 
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        console.error("Google login error:", error);
        res.status(500).json({ message: 'Google Auth failed', error: error.message });
    }
};