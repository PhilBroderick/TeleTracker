import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ShowService } from './../../core/services/show.service';
import { Injectable } from '@angular/core';
import { Show } from 'src/app/core/models/show.model';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class ShowDetailResolver implements Resolve<Show> {
  constructor(private showService: ShowService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Show> {
    return this.showService.getShow(route.paramMap.get('id')).pipe(
      catchError(error => {
        this.router.navigate(['/']);
        return of(null);
      })
    );
  }
}
