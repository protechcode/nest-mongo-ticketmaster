import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    createPost(res: any, createProductDTO: any): Promise<any>;
}
