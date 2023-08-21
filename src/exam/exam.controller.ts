import { Body,Controller,Post,Get,Put,Param,Delete} from '@nestjs/common';
import { ExamService } from './exam.service';
import { ExamPost, UpdateExam } from 'src/dtos/exam.dtos';

@Controller('exam')
export class ExamController {
    constructor(private readonly examService:ExamService){}
    @Post('/')
    async postExam(@Body() body: ExamPost) {
      try {
        return await this.examService.postExam(body);
      } catch (error) {
        return error;
      }
    }
    @Put('/:id')
    async updateExam(@Body() body: UpdateExam,@Param('id') id:string) {
      try {
        return await this.examService.updateExam(body,id);
      } catch (error) {
        return error;
      }
    }
    @Delete('/:id')
    async deleteExam(@Param('id') id:string) {
      try {
        return await this.examService.deleteExam(id);
      } catch (error) {
        return error;
      }
    }
    @Get('/all')
    async getExams() {
      try {
        return await this.examService.getExams();
      } catch (error) {
        return error;
      }
    }
    @Get('/:id')
    async getExam(@Param('id') id:string) {
      try {
        return await this.examService.getExam(id);
      } catch (error) {
        return error;
      }
    }
   
}
