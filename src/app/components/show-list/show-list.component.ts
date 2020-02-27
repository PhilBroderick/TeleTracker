import { AuthService } from './../../core/services/auth.service';
import { UserService } from './../../core/services/user.service';
import { ShowService } from './../../core/services/show.service';
import { PopularShow } from './../../core/models/popularshow.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  shows: Observable<PopularShow[]>;
  subscribedListOfShows: Observable<string[]>;
  constructor(
    public showService: ShowService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.shows = this.showService.getPopularShows();
    if (this.authService.loggedIn()) {
      this.subscribedListOfShows = this.showService.getSubscribedShows();
    }
  }

  // isSubscribedToShow = (id: string) =>
  //   this.subscribedListOfShows.pipe(

  //   )
}
