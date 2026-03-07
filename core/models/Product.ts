import mongoose, { Schema, models } from "mongoose";

const ProductSchema = new Schema(
  {
    title: String,
    price: Number,
    description: String,
    image: String,
  },
  { timestamps: true }
);

export const Product =
  models.Product || mongoose.model("Product", ProductSchema);
