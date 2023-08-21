import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common';
import { Model } from 'mongoose';
import { Result } from 'src/Models/Result';
import { ResultPost } from 'src/dtos/result.dtos';

@Injectable()
export class ResultService {
    constructor(
        @InjectModel(Result.name) private readonly resultModel: Model<Result>,
      ) {}

    async postResult(body:ResultPost):Promise<Result>{
        const newResult = await this.resultModel.create(body);
        return newResult;
    }
    // async updateResult(body:ResultUpdate,id:string):Promise<Result>{
    //     const updatedResult= await this.resultModel.findByIdAndUpdate(id,body,{new:true})
    //     return updatedResult;
    // }
    async getResults():Promise<Result[]>{
        const Results=await this.resultModel.find()
        return Results
    }
    async getResultsForStudent(id:string):Promise<Result[]>{
        const Results=await this.resultModel.find({userId:id})
        return Results
    }
   
}
