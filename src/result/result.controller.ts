import { Body,Controller,Post,Get,Put,Param} from '@nestjs/common';
import { ResultService } from './result.service';
import { ResultPost } from 'src/dtos/result.dtos';

@Controller('result')
export class ResultController {
    constructor(private readonly resultService:ResultService){}
    @Post('/')
    async postResult(@Body() body: ResultPost) {
      try {
        return await this.resultService.postResult(body);
      } catch (error) {
        return error;
      }
    }
    // @Put('/:id')
    // async updateResult(@Body() body: ResultUpdate,@Param('id') id:string) {
    //   try {
    //     return await this.resultService.updateResult(body,id);
    //   } catch (error) {
    //     return error;
    //   }
    // }
    @Get('/all')
    async getResults() {
      try {
        return await this.resultService.getResults();
      } catch (error) {
        return error;
      }
    }
    @Get('/:id')
    async getResultsForStudent(@Param('id') id:string) {
      try {
        return await this.resultService.getResultsForStudent(id);
      } catch (error) {
        return error;
      }
    }
  
}
