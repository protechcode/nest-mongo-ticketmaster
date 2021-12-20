import { Model } from 'mongoose';
import { Product } from './intefaces/product.inteface';
import { CreateproductDTO } from './dto/product.dto';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    postProduct(): Promise<Product[]>;
    getProduct(productID: string): Promise<Product>;
    createProduct(createProductDTO: any): Promise<Product>;
    deleteProduct(productID: string): Promise<Product>;
    uptdateProduct(productID: string, createProductDTO: CreateproductDTO): Promise<Product>;
}
