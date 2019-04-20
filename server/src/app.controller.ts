import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/memory')
  memoryUsage(): any {
    const used = process.memoryUsage();
    for (const key in used) {
      if (used.hasOwnProperty(key)) {
        used[key] = Math.round((used[key] / 1024 / 1024) * 100) / 100;
      }
    }
    return used;
  }
}
