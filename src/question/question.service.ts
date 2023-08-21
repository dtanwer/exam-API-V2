import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common';
import { Model } from 'mongoose';
import { Question } from 'src/Models/Question';
import { QuestionPost, QuestionUpdate } from 'src/dtos/question.dtos';

@Injectable()
export class QuestionService {
    constructor(
        @InjectModel(Question.name) private readonly questionModel: Model<Question>,
      ) {}

    async postQuestion(body:QuestionPost):Promise<Question>{
        const newQuestion = await this.questionModel.create(body);
        return newQuestion;
    }
    async updateQuestion(body:QuestionUpdate,id:string):Promise<Question>{
        const updatedQuestion= await this.questionModel.findByIdAndUpdate(id,body,{new:true})
        return updatedQuestion;
    }
    async deleteQuestion(id:string):Promise<Question>{
        const deleteQuestion= await this.questionModel.findByIdAndDelete(id)
        return deleteQuestion;
    }
    async getQuestions():Promise<Question[]>{
        const Questions=await this.questionModel.find()
        return Questions
    }
    async getQuestionsForExam(id:string):Promise<Question[]>{
        const Questions=await this.questionModel.find({examId:id})
        return Questions
    }
    async getQuestion(id:string):Promise<Question>{
        const Question=await this.questionModel.findById(id)
        return Question
    }
}
