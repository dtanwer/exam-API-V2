import {IsString,IsNotEmpty,IsMongoId} from 'class-validator'
import { PartialType } from '@nestjs/swagger';

export class QuestionPost{
    @IsString() @IsNotEmpty()
    questionName: string;
    @IsString() @IsNotEmpty()
    op1: string;
    @IsString() @IsNotEmpty()
    op2: string;
    @IsString() @IsNotEmpty()
    op3: string;
    @IsString() @IsNotEmpty()
    op4: string;
    @IsString() @IsNotEmpty()
    answer: string;
    @IsMongoId() @IsNotEmpty()
    examId: string;
}

export class QuestionUpdate extends PartialType(QuestionPost) {}