import { ShowService } from "../../core/services/show.service";
import { Show } from "../../core/models/show.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shows",
  templateUrl: "./shows.component.html",
  styleUrls: ["./shows.component.css"]
})
export class ShowsComponent implements OnInit {
  shows: Show[];
  loaded: boolean = false;

  constructor(private showService: ShowService) {}

  ngOnInit() {
    setTimeout(this.getShows, 3000);
  }

  getShows = () => {
    this.showService.getShows().subscribe(shows => {
      this.shows = shows;
      this.loaded = true;
    });
  };
}
