import multer from "multer";
import { Router } from "express";
import fotoController from "../controllers/FotoController";
import multerConfig from "../config/multer";

const upload = multer(multerConfig)

const router = new Router();

router.post('/', upload.single('image'), fotoController.store);

export default router;
