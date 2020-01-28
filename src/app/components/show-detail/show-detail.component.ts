import { Show } from "./../../core/models/show.model";
import { ShowService } from "./../../core/services/show.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-show-detail",
  templateUrl: "./show-detail.component.html",
  styleUrls: ["./show-detail.component.css"]
})
export class ShowDetailComponent implements OnInit {
  show: Show;

  constructor(
    private route: ActivatedRoute,
    private showService: ShowService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.showService.getShow(id).subscribe(show => {
      this.show = show;
    });
  }
}
