import { Injectable, HttpService, Inject } from '@nestjs/common';
import { Word } from './interfaces/word.interface';
import { map } from 'rxjs/operators';
import { promises as fsPromises } from 'fs';
import { Logger } from '@nestjs/common';

const jsonPath = './allwords_data.json';
const jsonUrl = 'https://static.heitor.dev/relibras/allwords_data.json';

@Injectable()
export class WordService {
  allWords: Word[];
  private readonly logger = new Logger(WordService.name);

  @Inject()
  private readonly httpService: HttpService;

  private getJsonFromCDN() {
    this.httpService
      .get(jsonUrl)
      .pipe(map(response => response.data))
      .subscribe(data => {
        this.allWords = data;
        fsPromises
          .writeFile(jsonPath, JSON.stringify(data))
          .then(() => this.logger.log('Words JSON downloaded and saved.'))
          .catch(reason => this.logger.error(reason));
      });
  }

  constructor() {
    fsPromises
      .readFile(jsonPath)
      .then(fileBuffer => (this.allWords = JSON.parse(fileBuffer.toString())))
      .catch(_ => {
        this.getJsonFromCDN();
      });
  }

  getRandomWords(n: number): Word[] {
    return this.allWords.sort(() => 0.5 - Math.random()).slice(0, n);
  }
}
