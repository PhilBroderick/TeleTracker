import { AuthService } from './../../core/services/auth.service';
import { ShowService } from './../../core/services/show.service';
import { PopularShow } from './../../core/models/popularshow.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  @Input() show: PopularShow;
  @Input() isSubscribed: boolean;
  constructor(
    public showService: ShowService,
    public authService: AuthService
  ) {}

  ngOnInit() {}

  subscribeToShow = (id: string) =>
    this.showService.subscribeToShow(id).subscribe(data => {
      if (data.entityID !== null) {
        this.isSubscribed = true;
      }
    });
}
