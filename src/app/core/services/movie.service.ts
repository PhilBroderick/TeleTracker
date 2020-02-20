import { Movie } from './../models/movie.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieUrl = environment.baseApiUrl + 'movies';

  constructor(private httpClient: HttpClient) {}

  getMovies = (): Observable<Movie[]> =>
    this.httpClient.get<Movie[]>(this.movieUrl);

  getMovie = (id: string): Observable<Movie> =>
    this.httpClient.get<Movie>(`${this.movieUrl}/${id}`);
}
