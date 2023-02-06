import { Schema } from "mongoose";
import mongoose from "mongoose";

const tokenSchema  = Schema({
    token: String,
});

const Token = mongoose.model('Token', tokenSchema);

export default Token;
