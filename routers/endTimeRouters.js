import { Router } from "express";
import { getTime, chooseTime } from "../controllers/endTImeController.js";
import { checkAccess } from "../middleware/access.js";
import EndTime from "../models/endTimeModel.js";

const router = Router();

router.get('/getTime', getTime)
router.post('/chooseTime', checkAccess, chooseTime)

export default router;