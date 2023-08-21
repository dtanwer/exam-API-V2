import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Exam } from './Exam';
export type UserDocument=HydratedDocument<Question>
@Schema({timestamps:true})
export class Question {
  @Prop({ required: true })
  questionName: string;
  @Prop({ required: true})
  op1: string;
  @Prop({ required: true})
  op2: string;
  @Prop({ required: true})
  op3: string;
  @Prop({ required: true})
  op4: string;
  @Prop({ required: true})
  answer: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'exam',required:true})
  examId: Exam;
}

export const QuestionSchema=SchemaFactory.createForClass(Question)