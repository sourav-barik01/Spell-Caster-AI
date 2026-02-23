import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    return res.status(200).json({ message: "Server Started Successfully" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});