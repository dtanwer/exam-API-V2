import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common';
import { Model } from 'mongoose';
import { User } from 'src/Models/User';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private readonly resultModel: Model<User>,
      ) {}

    async getUser(id:string):Promise<User>{
        const user = await this.resultModel.findById(id);
        return user;
    }
    async getUsers():Promise<User[]>{
        const newResult = await this.resultModel.find();
        return newResult;
    }
}
