import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Put, Query, Req, Res } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entites/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

//controller의 entry point, 이 controller의 url들은 /controller 하위에 정의된다.
@Controller('movies')
export class MoviesController {
    // "/movies"
    // type만 추가해도 DI가 작동하고있음.. 왜지?
    constructor(readonly moviesService: MoviesService){}

    // Request와 Response 객체에 직접접근, nest에서 express모듈에 접근한다는 의미임.
    // 하지만 이렇게 객체에 직접접근하는게 좋은 동작은 아님, 왜냐하면 nest는 express위에서 돌아갈 수도있고 fastify에서 돌아갈 수도 있기 때문.
    @Get()
    getAll(@Req() req, @Res() res):Movie[]{
        // 이러한 @Req를 사용한 request객체에 직접접근은 좋은 동작이 아님, fastify로 바꾸면 이게 고장남.
        // fastify가 express보다 두배정도 빠르므로 이것도 챌린지 요소로 고려할만함.
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
    patchMovie(@Param('id') movieId:Number, @Body() updateData:UpdateMovieDto){
        return this.moviesService.update(movieId,updateData);
    }

}
