import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
// Mongoose
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from './schemas/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'User', schema: UsersSchema}])],
  providers: [UserService],
  controllers: [UserController],
  exports:[UserService]
})
export class UserModule {}
