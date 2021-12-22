import { Controller, Post, Res, HttpStatus, Body, Get, Param, NotFoundException, Delete, Query, Put } from '@nestjs/common';
import { UserService } from "./user.service";
import * as bcrypt from 'bcrypt'
import { CreateUserDTO } from "./dto/user.dto";

@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

    //Get route by email
    //GET single user: /user/email
    @Get('/user/:email')
    async findOne(@Res() res, @Param('email') email){
        const user = await this.userService.findOne(email);
        if(!user){
            throw new NotFoundException('user does not exist!');
        }
        return res.status(HttpStatus.OK).json(user);
    }

    ///End of new changes 

    // Add user: /user/create
    @Post('/create')
    async createUser(@Res() res, @Body() body/* , createUserDTO: CreateUserDTO */) {
        const user = body;
        const name = user.name;
        const surname = user.surname;
        const phone = user.phone;
        const email = user.email;
        const password = user.password;
        const date = user.createdAt;
        const admin = user.isAdmin 

        const saltOrRounds = 10;
        const hash = await bcrypt.hash(password, saltOrRounds);
        let userToSave = {'name':name, 'surname':surname, 'phone':phone, 'email':email, 'password':hash, 'createdAt':date, 'isAdmin': admin } ;
        await this.userService.createUser(userToSave);
       
        return res.status(HttpStatus.OK).json({
            message: 'user Successfully Created',
            /* userToSave, */
            user
        });
    }
    //////////////////////////////////////////////77
    /////7777//Changes to createUser()/
    // SNIPS: // await this.userService.createUser(createUserDTO); 
        /* res.status(HttpStatus.OK).json({     message: 'user Successfully Created',      user }); */ 
        /* , createUserDTO: CreateUserDTO */
                            //ENd of snips;
        
       
   

    /* async createUsr(@Res() res, @Body() bod, ) {
        const user = bod;
        const name = user.name;
        const surname = user.surname;
        const phone = user.phone;
        const email = user.email;
        const password = user.password;
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(password, saltOrRounds);
        const userConHash = {'name':name, 'surname':surname, 'phone':phone, 'email':email, 'password':hash}

        return res.json({
            message: 'test',
            user,
            password,
            hash,
            userConHash
        });
    } */

    //////////////7EndEEEEEEEEEEEEE/////////////

    // Get users /user
    // @Get('/list')
    @Get('/')
    async getUsers(@Res() res) {
        const users = await this.userService.getUsers();
        return res.status(HttpStatus.OK).json(users);
    }

    // GET single user: /user/5c9d46100e2e5c44c444b2d1
    @Get('/:userID')
    async getUser(@Res() res, @Param('userID') userID) {
        const user = await this.userService.getUser(userID);
        if (!user) throw new NotFoundException('user does not exist!');
        return res.status(HttpStatus.OK).json(user);
    }

    // Delete User: user/delete?UserID=5c9d45e705ea4843c8d0e8f7
    @Delete('/delete')
    async deleteUser(@Res() res, @Query('userID') userID) {
        const userDeleted = await this.userService.deleteUser(userID);
        if (!userDeleted) throw new NotFoundException('user does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'user Deleted Successfully',
            userDeleted
        });
    }

    // Update user: user/update?userID=5c9d45e705ea4843c8d0e8f7
    @Put('/update')
    async updateUser(@Res() res, @Body() createUserDTO: CreateUserDTO, @Query('userID') userID) {
        const updatedUser = await this.userService.updateUser(userID, createUserDTO);
        if (!updatedUser) throw new NotFoundException('User does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'User Updated Successfully',
            updatedUser
        });
    }

}
