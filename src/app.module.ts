import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';


@Module({
  imports: [
    ProductModule, 
    ProductModule, 
    MongooseModule.forRoot('mongodb://localhost/products-nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
