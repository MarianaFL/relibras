import { Injectable, HttpService } from '@nestjs/common';
import { Word } from './interfaces/word.interface';
import { WordProviderCDN } from './word.provider.cdn';

const jsonPath = './allwords_data.json';
const jsonUrl = 'https://static.heitor.dev/relibras/allwords_data.json';

@Injectable()
export class WordService {
  allWords: Word[];

  constructor(private readonly wordProviderCDN: WordProviderCDN) { }

  async getRandomWords(n: number): Promise<Word[]> {
    return this.wordProviderCDN.getAllWords().then(
      (data) => {
        return data.sort(() => 0.5 - Math.random()).slice(0, n)
      })

  }
}
