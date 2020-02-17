import { environment } from "./../../../environments/environment";
import { Show } from "../models/show.model";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PopularShow } from "../models/popularshow.model";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class ShowService {
  showUrl = environment.baseApiUrl + "shows";

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
}
