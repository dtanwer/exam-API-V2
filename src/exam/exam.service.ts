import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common';
import { Model } from 'mongoose';
import { Exam } from 'src/Models/Exam';
import { ExamPost, UpdateExam } from 'src/dtos/exam.dtos';

@Injectable()
export class ExamService {
    constructor(
        @InjectModel(Exam.name) private readonly examModel: Model<Exam>,
      ) {}

    async postExam(body:ExamPost):Promise<Exam>{
        const newExam = await this.examModel.create(body);
        return newExam;
    }
    async updateExam(body:UpdateExam,id:string):Promise<Exam>{
        const updatedExam= await this.examModel.findByIdAndUpdate(id,body,{new:true})
        return updatedExam;
    }
    async deleteExam(id:string):Promise<Exam>{
        const deleteExam= await this.examModel.findByIdAndDelete(id)
        return deleteExam;
    }
    async getExams():Promise<Exam[]>{
        const exams=await this.examModel.find()
        return exams
    }
    async getExam(id:string):Promise<Exam>{
        const exam=await this.examModel.findById(id)
        return exam
    }
}
