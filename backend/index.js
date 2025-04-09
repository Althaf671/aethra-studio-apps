import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Read .env file

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is working!");
    });
    
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));