import { Document } from "mongoose";

export interface Eventos extends Document {
    readonly name: string;
    readonly description: string;
    readonly imageURL: string;
    readonly price: number;
    readonly location: string;
    readonly createdAt: Date;
}