import { Show } from "../models/show.model";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class ShowService {
  showUrl: string = "https://teletracker.azurewebsites.net/api/shows";

  constructor(private http: HttpClient) {}

  getShows = (): Observable<Show[]> => {
    return this.http.get<Show[]>(this.showUrl);
  };

  getShow = (id: string): Observable<Show> => {
    return this.http.get<Show>(`${this.showUrl}/${id}`);
  };
}
