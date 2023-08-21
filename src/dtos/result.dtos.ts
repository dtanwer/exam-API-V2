import {IsString,IsNotEmpty,IsMongoId} from 'class-validator'

export class ResultPost{
  @IsString() @IsNotEmpty()
  resultStatus: string;
  @IsString() @IsNotEmpty()
  resultScore: string;
  @IsMongoId() @IsNotEmpty()
  examId: string;
  @IsMongoId() @IsNotEmpty()
  userId: string;
}