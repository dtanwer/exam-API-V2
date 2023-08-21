import { Controller,Get,Param} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}

    @Get('/:id')
    async getUser(@Param('id') id:string) {
      try {
        return await this.userService.getUser(id);
      } catch (error) {
        return error;
      }
    }
    @Get()
    async getUsers() {
      try {
        return await this.userService.getUsers();
      } catch (error) {
        return error;
      }
    }

}
