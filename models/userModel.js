import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema  = Schema({
    name: String,
    lastName: String,
    email: String, 
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;





