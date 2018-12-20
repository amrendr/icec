import { Component, OnInit } from '@angular/core';
import { Slide } from '../../services/app.class';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-sponsor-slide-show',
  templateUrl: './sponsor-slide-show.component.html',
  styleUrls: ['./sponsor-slide-show.component.css']
})
export class SponsorSlideShowComponent implements OnInit {

  sponsors: Slide[];
  duration: number;
  loading: boolean;

  constructor(
    private annoucementService: AppService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.annoucementService.getAnnouncement().subscribe(
      (x) => {
        this.sponsors = x.sponsors as Slide[];
        this.duration = x.interval;
        this.loading = false;
      },
      (err) => { this.loading = false; });
  }
}
