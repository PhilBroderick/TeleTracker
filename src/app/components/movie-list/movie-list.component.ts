import { MovieService } from './../../core/services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  loaded = false;
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe(
      movies => {
        this.movies = movies;
        this.loaded = true;
      },
      err => console.log(err)
    );
  }
}
