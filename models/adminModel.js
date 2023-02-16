import { Schema } from "mongoose";
import mongoose from "mongoose";

const adminSchema = Schema({
   login: String,
   password: String,
});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;