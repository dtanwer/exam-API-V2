import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
export type UserDocument=HydratedDocument<Exam>
@Schema({timestamps:true})
export class Exam {
  @Prop({ required: true })
  examName: string;
  @Prop({ required: true })
  examDes: string;
  @Prop({ required: true })
  examMarks: string;
  @Prop({ required: true })
  examTotalQuestion: string;
  @Prop({ required: true })
  examPassingMarks: string;
  @Prop({ required: true })
  examLevel: string;
 
}

export const ExamSchema=SchemaFactory.createForClass(Exam)