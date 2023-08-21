import { Body,Controller,Post,Get,Put,Param} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDtos, SignUpDtos } from '../dtos/auth.dtos';
@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}

    @Post('/signup')
    async signup(@Body() body: SignUpDtos) {
      try {
        return await this.authService.signUp(body);
      } catch (error) {
        return error;
      }
    }
    @Post('/signin')
    async login(@Body() body: LoginDtos) {
      try {
          return await this.authService.login(body)    
      } catch (error) {
          return error;
      }
    }
}
