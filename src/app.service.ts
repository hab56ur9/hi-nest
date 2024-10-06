import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nest!!';
  }
  //이전 commit에서 nestjs의 convention을 따르도록 service에 로직 이동
  getHi():string{
    return "Hi Nest";
  }
  getHi2():string{
    return "Hi Nest2"
  }
}
