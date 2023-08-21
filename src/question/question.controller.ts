import { Body,Controller,Post,Get,Put,Param, Delete} from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionPost, QuestionUpdate } from 'src/dtos/question.dtos';

@Controller('question')
export class QuestionController {
    constructor(private readonly questionService:QuestionService){}
    @Post('/')
    async postQuestion(@Body() body: QuestionPost) {
      try {
        return await this.questionService.postQuestion(body);
      } catch (error) {
        return error;
      }
    }
    @Put('/:id')
    async updateQuestion(@Body() body: QuestionUpdate,@Param('id') id:string) {
      try {
        return await this.questionService.updateQuestion(body,id);
      } catch (error) {
        return error;
      }
    }
    @Delete('/:id')
    async deleteQuestion(@Param('id') id:string) {
      try {
        return await this.questionService.deleteQuestion(id);
      } catch (error) {
        return error;
      }
    }
    @Get('/all')
    async getQuestions() {
      try {
        return await this.questionService.getQuestions();
      } catch (error) {
        return error;
      }
    }
    @Get('/exam/:id')
    async getQuestionsForExam(@Param('id') id:string) {
      try {
        return await this.questionService.getQuestionsForExam(id);
      } catch (error) {
        return error;
      }
    }
    @Get('/:id')
    async getQuestion(@Param('id') id:string) {
      try {
        return await this.questionService.getQuestion(id);
      } catch (error) {
        return error;
      }
    }
    
   
}
