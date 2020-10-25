import { Module, HttpModule } from '@nestjs/common';
import { WordController } from './word.controller';
import { WordService } from './word.service';
import { WordProviderCDN } from './word.provider.cdn';

@Module({
  controllers: [WordController],
  providers: [WordService, WordProviderCDN],
  imports: [HttpModule],
})
export class WordModule { }
