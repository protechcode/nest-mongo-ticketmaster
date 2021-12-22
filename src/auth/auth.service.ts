
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService, 
        private jwtService: JwtService){}

  async validateUser(email: string, pass: string): Promise < any > {
        const user = await this.usersService.findOne(email);
        if(user && user.password === pass) {
        const { password, ...result } = user;
        return result;
    }
    return null;
}
async login(user: any) {
    const payload = user._doc;
    return {
      access_token: this.jwtService.sign(payload),
      payload: payload,
      
    };
    
  }
}
