import { Router } from "express";
import { addUser, getUser } from "../controllers/userController.js";

const router = Router();

router.get('/getUsers', getUser);
router.post('/addUser', addUser);


export default router;