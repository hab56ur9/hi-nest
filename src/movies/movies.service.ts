import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entites/movie.entity';

// services 는 DB를 다룬다.
@Injectable()
export class MoviesService {
    private movies:Movie[] = [];

    getAll():Movie[] {
        return this.movies;
    }

    getOne(id:string):Movie{
        const movie = this.movies.find(movie=>movie.id === parseInt(id)/* +id <== 사용해도 자동으로 Parse됨*/);
        if(!movie){
            throw new NotFoundException(`Movie with ID:${id} not found.`);
        }
        return movie
    }
    deleteOne(id:string){
        this.getOne(id);
        this.movies = this.movies.filter(movie=>movie.id !== +id);
    }
    create(movieData){
        this.movies.push({
            id:this.movies.length+1,
            ...movieData,
        })
    }
    update(id:string, updatedData){
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({...movie,...updatedData});
    }
}
