import mongoose from "mongoose";

const FarmerSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    password: { type: String },
    address: { type: String },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'products'}]
});

export default mongoose.model("farmers", FarmerSchema);
