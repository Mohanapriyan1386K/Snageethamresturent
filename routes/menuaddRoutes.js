import express from "express";
import {
  createMenu,
  getMenus,
  getMenuById,
  updateMenu,
  deleteMenu,
} from "../controllers/menuController.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

router.post("/", upload.single("image"),createMenu);

router.get("/", getMenus);

router.get("/:id", getMenuById);

router.put("/:id", updateMenu);

router.delete("/:id", deleteMenu);

export default router;