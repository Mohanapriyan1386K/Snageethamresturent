import multer from "multer";

// Use memory storage — Vercel's filesystem is read-only, so we cannot write
// to disk. Files are stored as a Buffer in req.file.buffer and streamed
// directly to Cloudinary from RAM.
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb(new Error("Only images are allowed"), false);
    }
};

export const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB max
});