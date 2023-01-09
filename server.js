import express from "express";
import cors from "cors";
import connect from "./db/db.js";
import userRouter from "./routers/userRouters.js";

connect();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', userRouter);




app.listen(5000, ()=> {
    console.log('server work');
});