import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  name: { type: String, required: true }, //aca van los datos del objeto name, author, etc
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;