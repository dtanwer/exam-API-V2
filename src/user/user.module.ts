import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User, UserSchema } from 'src/Models/User';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';

@Module({
  imports:[MongooseModule.forFeature([{name:User.name,schema:UserSchema}])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
