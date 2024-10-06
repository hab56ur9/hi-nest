import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

//controller의 entry point, 이 controller의 url들은 /controller 하위에 정의된다.
@Controller('movies')
export class MoviesController {
    // "/movies"
    @Get()
    getAll(){
        return "This will return all movies";
    }
    // "/movies/1"
    // get의 id와 param의 id는 같아야하지만 이걸 저장할 이름은 달라도된다
    @Get("/:id")
    getOne(@Param("id") number:string ){
        return `This will return one movie with the id : ${number}`;
    }
    @Post("/:id")
    create(){
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
    patchMovie(@Param('id') movieId:string){
        return `This will patch a movie with the id : ${movieId}`;
    }
}
