import express from express;
const app = express();
app.get("/", (req, res) => {
    res.send("Backend is working!");
    });
app.listen(3000, () => console.log("server is running at port 3000"));