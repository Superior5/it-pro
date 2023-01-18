import { Router } from "express";
import { addNews, deleteNews, getNews, updateNews, uploadImage } from "../controllers/newsController.js";
import { checkAccess } from "../middleware/access.js";
import fileMiddleware from '../middleware/file.js';


const router = Router();

router.get('/getNews', getNews);
router.post('/upload', checkAccess, fileMiddleware.any(), uploadImage);
router.post('/addNews', checkAccess, addNews);
router.post('/updateNews', checkAccess, updateNews);
router.post('/deleteNews', checkAccess, deleteNews);


export default router;