import { ShowService } from './../../core/services/show.service';
import { PopularShow } from './../../core/models/popularshow.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  loaded = false;
  constructor(
    private showService: ShowService,
    private route: ActivatedRoute
  ) {}
  shows = this.showService.getPopularShows();
  ngOnInit() {}
}
