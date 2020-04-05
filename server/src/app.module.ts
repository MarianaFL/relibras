import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WordModule } from './words/word.module';

@Module({
  imports: [WordModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}