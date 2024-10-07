import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entites/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';

//controller의 entry point, 이 controller의 url들은 /controller 하위에 정의된다.
@Controller('movies')
export class MoviesController {
    // "/movies"
    constructor(readonly moviesService: MoviesService){}

    @Get()
    getAll():Movie[]{
        return this.moviesService.getAll();
    }
    // search같은 하위 주소를 직접 지정하는 요청이 /:id
    @Get("search")
    search(@Query("year") searchingYear:string){
        return `We are searching for a movie made after ${searchingYear}`;
    }
    // "/movies/1"
    // get의 id와 param의 id는 같아야하지만 이걸 저장할 이름은 달라도된다
    @Get("/:id")
    getOne(@Param("id") movieId:Number ){
        console.log(typeof movieId);
        return this.moviesService.getOne(movieId);
    }

    // HTTP 요청 body data를 @Body로 가져올 수 있음.
    @Post()
    create(@Body() movieData:CreateMovieDto){
        return this.moviesService.create(movieData);
    }
    @Delete("/:id")
    remove(@Param("id") movieId:Number){
        return this.moviesService.deleteOne(movieId);
    }
    // @Put vs @Patch 
    // @Put 모든 리소스를 업데이트함 
    // @Patch 리소스의 일부부만 업데이트해줌
    @Patch("/:id")
    patchMovie(@Param('id') movieId:Number, @Body() updateData){
        return this.moviesService.update(movieId,updateData);
    }

}
