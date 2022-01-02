
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService) { }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);

    const hash = await bcrypt.compare(password, user.password);




    if (hash == true) {

      return user;

    } else {
      const err = new Error();
      return err
    }
    /*---> ", pass: string"this is second parameter of function async validateUser(email: string, pass: string):
      const user = await this.usersService.findOne(email);
      if(user && user.password === pass) {
      const { password, ...result } = user;
      return result;
  }
  return null; 
  else if (!user) {
      const err = new Error();
      return err

    }
*/
  }
  async login(user: any) {
    const payload = user._doc;
    return {
      access_token: this.jwtService.sign(payload),
      payload: payload,

    };

  }
}
