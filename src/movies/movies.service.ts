import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entites/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';

// services 는 DB를 다룬다.
@Injectable()
export class MoviesService {
    private movies:Movie[] = [];

    getAll():Movie[] {
        return this.movies;
    }

    getOne(id:Number):Movie{
        const movie = this.movies.find(movie=>movie.id === id/* +id <== 사용해도 자동으로 Parse됨*/);
        if(!movie){
            throw new NotFoundException(`Movie with ID:${id} not found.`);
        }
        return movie
    }
    deleteOne(id:Number){
        this.getOne(id);
        this.movies = this.movies.filter(movie=>movie.id !== +id);
    }
    create(movieData:CreateMovieDto){
        this.movies.push({
            id:this.movies.length+1,
            ...movieData,
        })
    }
    update(id:Number, updatedData){
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({...movie,...updatedData});
    }
}
