import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

//controller의 entry point, 이 controller의 url들은 /controller 하위에 정의된다.
@Controller('movies')
export class MoviesController {
    // "/movies"
    @Get()
    getAll(){
        return "This will return all movies";
    }
    // search같은 하위 주소를 직접 지정하는 요청이 /:id
    @Get("search")
    search(@Query("year") searchingYear:string){
        return `We are searching for a movie made after ${searchingYear}`;
    }
    // "/movies/1"
    // get의 id와 param의 id는 같아야하지만 이걸 저장할 이름은 달라도된다
    @Get("/:id")
    getOne(@Param("id") number:string ){
        return `This will return one movie with the id : ${number}`;
    }

    // HTTP 요청 body data를 @Body로 가져올 수 있음.
    @Post("/:id")
    create(@Body() movieData){
        console.log(movieData);
        return "This will create a movie";
    }
    @Delete("/:id")
    remove(@Param("id") movieId:string){
        return `This will delete a movie whit the id ${movieId}`;
    }
    // @Put vs @Patch 
    // @Put 모든 리소스를 업데이트함 
    // @Patch 리소스의 일부부만 업데이트해줌
    @Patch("/:id")
    patchMovie(@Param('id') movieId:string, @Body() updateData){
        return { 
            updatedMovie: movieId,// 별도의 작업 없이 json으로 자동 파싱됨, 개꿀
            ...updateData, // ... 문법은 json 이어 붙이기 용도
        }
        return `This will patch a movie with the id : ${movieId}`;
    }

}
