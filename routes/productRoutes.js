import express from "express";
import { upload } from "../middleware/upload.js";
import { createProduct, getProduct } from "../controllers/productController.js";

const router = express.Router();

router.post("/products", upload.single("image"), createProduct);
router.get("/products", getProduct)

export default router;