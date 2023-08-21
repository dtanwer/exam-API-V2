import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './User';
import { Exam } from './Exam';
export type UserDocument=HydratedDocument<Result>
@Schema({timestamps:true})
export class Result {
  @Prop({ required: true })
  resultStatus: string;
  @Prop({ required: true})
  resultScore: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'exam',required:true})
  examId: Exam;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'user',required:true })
  userId: User;
}

export const ResultSchema=SchemaFactory.createForClass(Result)