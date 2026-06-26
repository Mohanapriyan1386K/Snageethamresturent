import Product from "../schema/Product.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs";






export const getProduct = async (req, res) => {
    try {
        const data = await Product.find()
        return res.status(200).json({
            message: "sucess",
            data: data,
        })
    }
    catch (err) {
        return res.status(500).json({
            message: "fail",
            data: err
        })
    }
}

export const createProduct = async (req, res) => {
    try {
        const { name, quantity } = req.body;

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Image is required",
            });
        }

        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "products",
        });

        // Delete local file
        fs.unlinkSync(req.file.path);

        const product = await Product.create({
            name,
            quantity,
            image: result.secure_url,
        });

        res.status(201).json({
            success: true,
            message: "Product added successfully",
            data: product,
        });
    } catch (err) {
        console.error(err);

        // Delete local file if upload failed
        if (req.file) {
            fs.unlink(req.file.path, () => { });
        }

        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};