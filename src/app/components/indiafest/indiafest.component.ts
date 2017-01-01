import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Member, Args, Gallery, CommunityEvent } from '../../services/app.class';


@Component({
  selector: 'app-indiafest',
  templateUrl: './indiafest.component.html',
  styleUrls: ['./indiafest.component.css']
})
export class IndiafestComponent implements OnInit {

  gallery: Gallery;
  contacts: Member[];
  event: CommunityEvent;
  loading1: boolean;
  loading2: boolean;
  loading3: boolean;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.getIndiafestPhotos();
    this.getIndiafestOrganizer();
    this.getEventInfo('IFHF');
  }

  getIndiafestPhotos(): void {
    let input: Args = { type: 'indiafest', year: null };

    this.loading1 = true;
    this.appService.getGallery(input).subscribe(
      (x) => { this.gallery = ((x && x.length > 0) ? x[0] : null); this.loading1 = false; },
      (err) => { this.loading1 = false; }
    );
  }

  getIndiafestOrganizer(): void {
    let input: Args = { type: 'IF', year: null };

    this.loading2 = true;
    this.appService.getMembers(input).subscribe((x) => { this.contacts = x.memberList; this.loading2 = false; },
      (err) => { this.loading2 = false; }
    );
  }

  getEventInfo(key: string): void {
    this.loading3 = true;
    this.appService.getCommunityEvents(key).subscribe((x) => { this.event = ((x && x.length > 0) ? x[0] : null); this.loading3 = false; },
      (err) => { this.loading3 = false; });
  }
}
