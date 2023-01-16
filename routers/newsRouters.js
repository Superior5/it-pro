import { Router } from "express";
import { addNews, deleteNews, getNews, updateNews, uploadImage } from "../controllers/newsController.js";
import fileMiddleware from '../middleware/file.js';

const router = Router();

router.get('/getNews', getNews);
router.post('/upload', fileMiddleware.single('img'), uploadImage);
router.post('/addNews', addNews);
router.post('/updateNews', fileMiddleware.single('img'), updateNews);
router.post('/deleteNews', deleteNews);


export default router;