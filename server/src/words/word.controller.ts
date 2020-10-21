import { Controller, Get, Param } from '@nestjs/common';
import { WordService } from './word.service';
import { Word } from './interfaces/word.interface';

@Controller('words')
export class WordController {
  constructor(private readonly wordService: WordService) {}

  @Get('/random/:amount')
  async random(@Param('amount') amount?: number): Promise<Word[]> {
    return this.wordService.getRandomWords(amount ? amount : 1);
  }

  @Get('/random/')
  async randomOne(): Promise<Word[]> {
    return this.wordService.getRandomWords(1);
  }
}
