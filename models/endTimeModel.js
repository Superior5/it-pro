import { Schema } from "mongoose";
import mongoose from "mongoose";


const endTimeSchema = Schema({
    endDate: String,
}, { timestamps: true });

const EndTime = mongoose.model('EndTime', endTimeSchema);

export default EndTime;



