import { Show } from "./../models/show.model";
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
  showUrl: string = "https://localhost:44396/api/shows";

  constructor(private http: HttpClient) {}

  getShows = (): Observable<Show[]> => {
    return this.http.get<Show[]>(this.showUrl);
  };

  //   getShows = (): Show[] => {
  //     let shows: Show[] = [
  //       { id: "1", title: "Show 1" },
  //       { id: "2", title: "Show 2" },
  //       { id: "3", title: "Show 3" }
  //     ];
  //     return shows;
  //   };
}
