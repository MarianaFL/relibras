import { Test, TestingModule } from '@nestjs/testing';
import { HttpService } from '@nestjs/common';

import { WordController } from './word.controller';
import { WordService } from './word.service';

describe('Words Controller', () => {
  let controller: WordController;
  let service: WordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WordController],
      providers: [WordService],
    }).compile();

    controller = module.get<WordController>(WordController);
    service = module.get<WordService>(WordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(controller).toBeDefined();
  });
});
