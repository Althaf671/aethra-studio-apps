import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Read .env file

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.options(/.*/, cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }));
app.use(express.json());

// Routes
import router from "./routes/auth.js";
app.use('/api/auth', router)

app.get("/", (req, res) => {
    res.send("Backend is working!");
    });
    
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));