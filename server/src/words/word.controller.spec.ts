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

  describe('random', () => {
    it('should return the same words as the service', () => {
      const result = [{
        id: 271,
        palavra: "ALHO",
        acepcao: "Bulbo de uma hortaliça que possui vários dentes, muito usado como condimento.",
        exemplo: "Feijão com alho fica gostoso!",
        video: "alhoSm_Prog001.mp4",
        libras: "FEIJÃO COLOCAR ALHO GOSTOS@.",
        img: "alhoSm_Prog001.jpg",
        assunto: "15",
        assunto_title: "LEGUME/VERDURA",
        classe: "SUBSTANTIVO",
        url: "cg02.jpg",
        origem: "nacional",
        mao: "cg02.jpg"
      },
      {
        id: 293,
        palavra: "ALOJAMENTO",
        acepcao: "Local que pode acomodar ou abrigar diversas pessoas.",
        exemplo: "O alojamento do quartel é muito grande.",
        video: "alojamentoSm_Prog001.mp4",
        libras: "QUARTEL DORMIR^pessoa+ GRANDEmuit@.",
        img: "alojamentoSm_Prog001.jpg",
        assunto: "1",
        assunto_title: "NENHUM",
        classe: "SUBSTANTIVO",
        url: "cg02.jpg",
        origem: "nacional",
        mao: "cg02.jpg"
      }];
      jest.spyOn(service, 'getRandomWords').mockImplementation(() => result);

      controller.random(2).then(data => expect(data).toBe(result))
    })

    it('should return the same words as the service calling without parameters', () => {
      const result = [{
        id: 271,
        palavra: "ALHO",
        acepcao: "Bulbo de uma hortaliça que possui vários dentes, muito usado como condimento.",
        exemplo: "Feijão com alho fica gostoso!",
        video: "alhoSm_Prog001.mp4",
        libras: "FEIJÃO COLOCAR ALHO GOSTOS@.",
        img: "alhoSm_Prog001.jpg",
        assunto: "15",
        assunto_title: "LEGUME/VERDURA",
        classe: "SUBSTANTIVO",
        url: "cg02.jpg",
        origem: "nacional",
        mao: "cg02.jpg"
      }];
      jest.spyOn(service, 'getRandomWords').mockImplementation(() => result);

      controller.random().then(data => expect(data).toBe(result))
    })
  })

  describe('randomOne', () => {
    it('should return the same words as the service', () => {
      const result = [{
        id: 271,
        palavra: "ALHO",
        acepcao: "Bulbo de uma hortaliça que possui vários dentes, muito usado como condimento.",
        exemplo: "Feijão com alho fica gostoso!",
        video: "alhoSm_Prog001.mp4",
        libras: "FEIJÃO COLOCAR ALHO GOSTOS@.",
        img: "alhoSm_Prog001.jpg",
        assunto: "15",
        assunto_title: "LEGUME/VERDURA",
        classe: "SUBSTANTIVO",
        url: "cg02.jpg",
        origem: "nacional",
        mao: "cg02.jpg"
      }];
      jest.spyOn(service, 'getRandomWords').mockImplementation(() => result);

      controller.randomOne().then(data => expect(data).toBe(result))
    })
  })
});
