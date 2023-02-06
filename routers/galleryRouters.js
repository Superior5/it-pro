import { Router } from "express";
import fileMiddleware from '../middleware/file.js';
import { addGallery, getGalleries } from "../controllers/galleryController.js";

const router = Router();

router.post('/addGallery', fileMiddleware.any(), addGallery);
router.get('/getGalleries', getGalleries);


export default router;