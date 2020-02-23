import { ShowService } from './../../core/services/show.service';
import { PopularShow } from './../../core/models/popularshow.model';
import { Component, OnInit, Input } from '@angular/core';
import { groupBy } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  shows: Observable<PopularShow[]>;
  constructor(private showService: ShowService) {}

  ngOnInit() {
    this.shows = this.showService.getPopularShows();
  }
}
