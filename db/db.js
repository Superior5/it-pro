import mongoose from "mongoose";
const mongoURL = "mongodb+srv://root:root@cluster0.gfr4hib.mongodb.net/?retryWrites=true&w=majority";


export default async function connect() {
    mongoose.connect(mongoURL).then(() => {
        console.log("database work");
    }).catch((err) => {
        console.log(err);
    });
};