import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, Resolve } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';
import { Movie } from 'src/app/core/models/movie.model';

@Injectable()
export class MovieDetailResolver implements Resolve<Movie> {
  constructor(private movieService: MovieService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Movie> {
    return this.movieService.getMovie(route.paramMap.get('id')).pipe(
      catchError(error => {
        this.router.navigate(['/']);
        return of(null);
      })
    );
  }
}
