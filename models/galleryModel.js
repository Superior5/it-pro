import { Schema } from "mongoose";
import mongoose from "mongoose";

const gallerySchema  = Schema({
    year: String,
    imgs: String,
});

const Gallery = mongoose.model('Gallery', gallerySchema);

export default Gallery;




