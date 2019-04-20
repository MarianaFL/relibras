import { Module, HttpModule } from '@nestjs/common';
import { WordController } from './word.controller';
import { WordService } from './word.service';

@Module({
  controllers: [WordController],
  providers: [WordService],
  imports: [HttpModule],
})
export class WordModule {}
