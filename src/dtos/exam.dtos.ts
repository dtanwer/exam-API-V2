import { PartialType } from '@nestjs/swagger';
import {IsString,IsNotEmpty} from 'class-validator'

export class ExamPost{
    @IsString() @IsNotEmpty()
    examName: string;
    @IsString() @IsNotEmpty()
    examDes: string;
    @IsString() @IsNotEmpty()
    examMarks: string;
    @IsString() @IsNotEmpty()
    examTotalQuestion: string;
    @IsString() @IsNotEmpty()
    examPassingMarks: string;
    @IsString() @IsNotEmpty()
    examLevel: string;
   

}
export class UpdateExam extends PartialType(ExamPost) {}