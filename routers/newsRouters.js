import { Router } from "express";
import { addNews, deleteNews, getNews, updateNews } from "../controllers/newsController.js";
import fileMiddleware from '../middleware/file.js';

const router = Router();

router.get('/getNews', getNews);
router.post('/addNews', fileMiddleware.any(), fileMiddleware.single('img'), addNews);
router.post('/updateNews', fileMiddleware.any(), fileMiddleware.single('img'), updateNews);
router.post('/deleteNews', deleteNews);


export default router;