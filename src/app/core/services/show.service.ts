import { SubscribeResponse } from './../models/subscribe-response.model';
import { environment } from './../../../environments/environment';
import { Show } from '../models/show.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PopularShow } from '../models/popularshow.model';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  showUrl = environment.baseApiUrl + 'shows';

  constructor(private http: HttpClient) {}

  getShows = (): Observable<Show[]> => {
    return this.http.get<Show[]>(this.showUrl);
  };

  getShow = (id: string): Observable<Show> => {
    return this.http.get<Show>(`${this.showUrl}/${id}`);
  };

  getPopularShows = (): Observable<PopularShow[]> => {
    return this.http.get<PopularShow[]>(`${this.showUrl}/popular`);
  };

  subscribeToShow = (id: string): Observable<SubscribeResponse> => {
    return this.http.post<SubscribeResponse>(
      `${this.showUrl}/${id}/subscribe`,
      null
    );
  };

  getSubscribedShows = (): Observable<string[]> => {
    return this.http.get<string[]>(`${this.showUrl}/subscribed`);
  };

  isSubscribedToShow = (id: string): Observable<boolean> => {
    return this.http.get<boolean>(`${this.showUrl}/${id}/issubscribed`);
  };
}
