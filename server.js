import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import connectDB from "./config/db.js";
dotenv.config();
connectDB();

const app = express();

const corsOptions = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json());

app.use("/api", productRoutes);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server Started on port ${process.env.PORT || 5000}`);
});