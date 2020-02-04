import { Season } from "./../../core/models/season.model";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-season",
  templateUrl: "./season.component.html",
  styleUrls: ["./season.component.css"]
})
export class SeasonComponent implements OnInit {
  @Input() season: Season;
  constructor() {}

  ngOnInit() {}
}
