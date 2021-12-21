import { Schema } from "mongoose";

export const EventosSchema = new Schema({
    name: String,
    description: String,
    imageURL: String,
    price: Number,
    location: String,
    quantity: Number,
    type: String,
    createdAt: { type: Date, default: Date.now }
});

