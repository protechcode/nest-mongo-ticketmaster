import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module'
import { EventoModule } from './eventos/evento.module';


import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://cristian:1234@cluster0.a36mj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useNewUrlParser: true
    }),
    ProductModule,
    UserModule,
    AuthModule, 
    EventoModule
    
    
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
