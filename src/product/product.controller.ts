import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body} from '@nestjs/common';
import { CreateproductDTO } from './dto/product.dto';
import { ProductService } from './product.service'
@Controller('product')


export class ProductController {

    constructor(private productService: ProductService) {}

    @Post('/create') 
    async createPost(@Res() res, @Body() createProductDTO){

        const product = await this.productService.createProduct(createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Product Sucessfully Crated',
            product
        });
    }

    @Get('/')
    async getProduct(@Res() res) {
        const products = await this.productService.getProduct("productId");
        return res.status(HttpStatus.OK).json({
            products
        })
    }
}
