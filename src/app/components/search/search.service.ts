import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchUrl = environment.baseApiUrl + 'search/';

  constructor(private http: HttpClient) {}

  search = (
    searchTerm: string,
    searchEntities: string[]
  ): Observable<string[]> => {
    return this.http.get<string[]>(`${this.searchUrl}${searchTerm}`);
  };
}
