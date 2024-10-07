import { Injectable } from '@nestjs/common';
import { Movie } from './entites/movie.entity';

// services 는 DB를 다룬다.
@Injectable()
export class MoviesService {
    private movies:Movie[] = [];

    getAll():Movie[] {
        return this.movies;
    }

    getOne(id:string):Movie{
        return this.movies.find(movie=>movie.id === parseInt(id)/* +id <== 사용해도 자동으로 Parse됨*/);
    }
    deleteOne(id:string):boolean{
        this.movies.filter(movie=>movie.id !== +id);
        return true;
    }
    create(movieData){
        this.movies.push({
            id:this.movies.length+1,
            ...movieData,
        })
    }
}
