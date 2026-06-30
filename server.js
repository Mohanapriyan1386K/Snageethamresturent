import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js"
import menuRoutes from "./routes/menuaddRoutes.js"
import connectDB from "./config/db.js";
dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", productRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/menu",menuRoutes)

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server Started on port ${process.env.PORT || 5000}`);
});