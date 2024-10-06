import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';


// 데코레이터 AppModule은 비어있는 class인데, 데코레이터에 정의된 내용을 가지고 있음.
@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
