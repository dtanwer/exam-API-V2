import { Module } from '@nestjs/common';
import { ExamController } from './exam.controller';
import { ExamService } from './exam.service';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { Exam, ExamSchema } from 'src/Models/Exam';

@Module({
  imports:[MongooseModule.forFeature([{name:Exam.name,schema:ExamSchema}])],
  controllers: [ExamController],
  providers: [ExamService]
})
export class ExamModule {}
