import { Component, OnDestroy, OnInit } from '@angular/core';
import { Sponsor } from '../../services/app.class';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-sponsor-list',
  templateUrl: './sponsor-list.component.html',
  styleUrls: ['./sponsor-list.component.css']
})
export class SponsorListComponent implements OnInit {

  sponsors: Sponsor[];
  loading: boolean;

  constructor(
    private annoucementService: AppService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.annoucementService.getAnnouncement().subscribe(
      (x) => {
        this.sponsors = x.sponsors;
        this.loading = false;
      },
      (err) => { this.loading = false; });
  }
}
