import { Injectable } from '@nestjs/common';

import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { User } from "./interfaces/user.interface";
import { CreateUserDTO } from "./dto/user.dto";
import { userInfo } from 'os';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly UserModel: Model<User>) {}


    // Get all Users
    async getUsers(): Promise<User[]> {
        const Users = await this.UserModel.find();
        return Users;
    }
    
    // Get a single User
    async getUser(UserID: string): Promise<User> {
        const User = await this.UserModel.findById(UserID); 
        return User;
    }

    // Post a single User
    async createUser(createUserDTO: CreateUserDTO): Promise<User> {
        const newUser = new this.UserModel(createUserDTO);
        return newUser.save();
    }

    // Delete User
    async deleteUser(userID: string): Promise<User> {
        const deletedUser = await this.UserModel.findOneAndDelete(userID);
        return deletedUser;
    }

    // Put a single User
    async updateUser(UserID: string, createUserDTO: CreateUserDTO): Promise<User> {
        const updatedUser = await this.UserModel
                            .findByIdAndUpdate(UserID, createUserDTO, {new: true});
        return updatedUser;
    }
  
    async findOne(email: string): Promise<User | undefined> {
        return this.UserModel.findOne({email : email});
       
    }
}
