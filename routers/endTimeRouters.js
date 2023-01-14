import { Router } from "express";
import { getTime, chooseTime } from "../controllers/endTImeController.js";
import EndTime from "../models/endTimeModel.js";

const router = Router();

router.get('/getTime', getTime)
router.post('/chooseTime', chooseTime)

export default router;