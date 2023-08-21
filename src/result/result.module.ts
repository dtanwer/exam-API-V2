import { Module } from '@nestjs/common';
import { ResultController } from './result.controller';
import { ResultService } from './result.service';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { Result, ResultSchema } from 'src/Models/Result';

@Module({
  imports:[MongooseModule.forFeature([{name:Result.name,schema:ResultSchema}])],
  controllers: [ResultController],
  providers: [ResultService]
})
export class ResultModule {}
