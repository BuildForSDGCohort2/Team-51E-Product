import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    type: { type: String },
    address: { type: String },
    date: { type: Date, default: Date.now() },
    about: { type: String },
    owner: { type: String },
    photo: { type: String }
});

export default mongoose.model("products", ProductSchema);
