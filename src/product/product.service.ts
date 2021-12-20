import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Product } from './intefaces/product.inteface';
import { CreateproductDTO } from './dto/product.dto';

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

    async postProduct(): Promise<Product[]> {
        const products = await this.productModel.find();
        return products;
    }

    async getProduct(productID: string): Promise<Product> {
        const product = await this.productModel.findById(productID);
        return product;
    }

    async createProduct(createProductDTO): Promise<Product> {
        const product = new this.productModel(createProductDTO);
        return await product.save();
    }

    async deleteProduct(productID: string): Promise<Product> {
        const deleteProduct = await this.productModel.findByIdAndDelete(productID);
        return deleteProduct;
    }

    async uptdateProduct(productID: string, createProductDTO: CreateproductDTO): Promise<Product> {
        const uptdateProduct = await this.productModel.findById(productID, createProductDTO,{
            new: true });
        return uptdateProduct;
    }
}
