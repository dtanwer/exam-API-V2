import { Module } from '@nestjs/common';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { Question, QuestionSchema } from 'src/Models/Question';

@Module({
  imports:[MongooseModule.forFeature([{name:Question.name,schema:QuestionSchema}])],
  controllers: [QuestionController],
  providers: [QuestionService]
})
export class QuestionModule {}
