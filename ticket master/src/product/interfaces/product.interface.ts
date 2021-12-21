import { Document } from "mongoose";

export interface Product extends Document {
    readonly name: string;
    readonly description: string;
    readonly imageURL: string;
    readonly price: number;
    readonly category: string;
    readonly quantity: number;
    readonly createdAt: Date;
}