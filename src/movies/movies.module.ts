import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({ // 일단 여기서 Service를 import해주고 있긴한데..
    controllers:[MoviesController],
    providers:[MoviesService]
})
export class MoviesModule {}
