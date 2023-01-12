import { Schema } from "mongoose";
import mongoose from "mongoose";


const newsSchema  = Schema({
    title: String,
    content: String,
    img: String, 
}, { timestamps: true });

const News = mongoose.model('News', newsSchema);

export default News;





