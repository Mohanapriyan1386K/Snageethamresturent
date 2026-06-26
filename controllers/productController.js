import Product from "../schema/Product.js";
import cloudinary from "../config/cloudinary.js";






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

        // Upload image buffer directly to Cloudinary (no disk writes needed)
        const cloudinaryResult = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                { folder: "products" },
                (error, result) => {
                    if (error) return reject(error);
                    resolve(result);
                }
            );
            stream.end(req.file.buffer);
        });

        const product = await Product.create({
            name,
            quantity,
            image: cloudinaryResult.secure_url,
        });

        res.status(201).json({
            success: true,
            message: "Product added successfully",
            data: product,
        });
    } catch (err) {
        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};