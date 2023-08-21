import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Result } from './Result';
export type UserDocument=HydratedDocument<User>
@Schema({timestamps:true})
export class User {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop({default:'user'})
  type: string;
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'result' }])
  resultId: Result[];

}

export const UserSchema=SchemaFactory.createForClass(User)