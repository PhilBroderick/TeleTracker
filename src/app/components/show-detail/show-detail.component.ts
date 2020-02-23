import { Show } from './../../core/models/show.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {
  show: Show;
  backgroundUrl = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.show = data['show'];
      this.backgroundUrl = this.show.posterPath;
    });
  }

  getUrl = () => `url('${this.backgroundUrl}')`;
}
