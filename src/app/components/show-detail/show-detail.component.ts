import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-show-detail",
  templateUrl: "./show-detail.component.html",
  styleUrls: ["./show-detail.component.css"]
})
export class ShowDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
  }
}
