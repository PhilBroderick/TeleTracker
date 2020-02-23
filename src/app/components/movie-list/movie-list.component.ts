import { MovieService } from './../../core/services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  constructor(private movieService: MovieService) {}
  movies = this.movieService.getPopularMovies();
  ngOnInit() {}
}
