import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';


// 데코레이터 AppModule은 비어있는 class인데, 데코레이터에 정의된 내용을 가지고 있음.
@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
