import { Schema } from "mongoose";
import mongoose from "mongoose";

const gallerySchema  = Schema({
    year: String,
    imgs: Array,
});

const Gallery = mongoose.model('Gallery', gallerySchema);

export default Gallery;




