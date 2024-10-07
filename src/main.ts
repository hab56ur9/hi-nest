import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true, // @ 데코레이터가 없는 filed는 유효성 검사자체도 하지않습니다. 의도하지 않은 코드를 읽지도 않겠다는 의미
    forbidNonWhitelisted:true, //whitelist에 없는 요소가 포함된 요청은 실행하지도않습니다.
    transform:true,
  }),);

  await app.listen(3000);
}
bootstrap();
