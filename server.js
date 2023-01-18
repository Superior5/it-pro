import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import connect from "./db/db.js";
import userRouter from "./routers/userRouters.js";
import newsRouter from "./routers/newsRouters.js";
import endTimeRouter from "./routers/endTimeRouters.js";
import Admin from "./models/adminModel.js";
import { md5 } from "./handler/hashing.js";

connect();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.json());
app.use(cors());
app.use('/uploads/images', express.static(path.join(__dirname, 'uploads/images')));

app.use('/api', userRouter);
app.use('/api', newsRouter);
app.use('/api', endTimeRouter);
app.post('/api/auth', async (req, res) => {

    let { login, password } = req.body;

    password = md5(password);


    let result = await Admin.find();

    if (result[0]) {
        let str = new Date().getTime().toString();

        const hash = md5(str);
        res.json({ hash });
    }
    else {
        res.json({ msg: "Отказ в доступе" });
    }
})




app.listen(process.env.PORT || 5100, () => {
    console.log('server work');
});
