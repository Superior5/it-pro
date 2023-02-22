import { Router } from "express";
import fileMiddleware from '../middleware/file.js';
import { addGallery, getGalleries, deleteImage, deleteGallery } from "../controllers/galleryController.js";

const router = Router();

router.post('/addGallery', fileMiddleware.any(), addGallery);
router.get('/getGalleries', getGalleries);
router.post('/deleteImage', deleteImage);
router.post('/deleteGallery', deleteGallery);


export default router;