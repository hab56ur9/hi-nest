import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // server entry point
  constructor(private readonly appService: AppService) {}

  // express의 router 설정을 해줄 필요가 없게됨
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // 이 요청은 성공함
  @Get("/hello")
  sayHello(): string {
    return "Hello everyone";
  }
  //이 요청은 실패해야함 
  @Post("/hello2")
  sayHello2(): string {
    return "Hello everyone";
  }
}
