// utils/sendEmails.js

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export const sendResetEmail = async (email, link) => {
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Reset your password',
        html: `<p>Click <a href="${link}">here</a> to reset your password. This link will expire in 10 minutes.</p>`,
    };

    await transporter.sendMail(mailOptions);
};