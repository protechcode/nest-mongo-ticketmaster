import { Controller, Get, Request, Post, UseGuards, Render, Res} from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';


@Controller()
export class AppController {
  constructor(private authService: AuthService) { }

  @Get()
  @Render('index')
  root() {
    return {  };
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    const token = this.authService.login(req.user);
    const user = req.user;
    const arr = [user._doc]

   return token
  }
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    
   return req.user ;
    
  }


}

