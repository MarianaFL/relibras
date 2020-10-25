import { Test, TestingModule } from '@nestjs/testing';

import { WordService } from './word.service';
import { WordProviderCDN } from './word.provider.cdn';

describe('Words Service', () => {
    let service: WordService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [WordService, WordProviderCDN],
        }).compile();

        service = module.get<WordService>(WordService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('getRandomWord', () => {
        it('should return a word', async () => {
            const result = await service.getRandomWords(1);

            expect(result.length).toEqual(1);
            expect(result[0].palavra).toEqual(expect.anything());
        })
    })
});
