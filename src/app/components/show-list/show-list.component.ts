import { ShowService } from "./../../core/services/show.service";
import { PopularShow } from "./../../core/models/popularshow.model";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-show-list",
  templateUrl: "./show-list.component.html",
  styleUrls: ["./show-list.component.css"]
})
export class ShowListComponent implements OnInit {
  shows: PopularShow[];
  loaded = false;
  constructor(private showService: ShowService) {}

  ngOnInit() {
    setTimeout(this.getShows, 0);
  }

  getShows = () => {
    this.showService.getPopularShows().subscribe(
      shows => {
        this.shows = shows.sort((a, b) =>
          a.popularity > b.popularity ? -1 : 1
        );
        this.loaded = true;
      },
      err => console.log(err)
    );
  };
}
