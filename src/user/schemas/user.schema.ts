import { Schema } from "mongoose";

export const UsersSchema = new Schema({
    name: String,
    surname: String,
    phone: String, 
    email: String,
    password: String,
    isAdmin: Boolean,
    createdAt: { type: Date, default: Date.now }
});

