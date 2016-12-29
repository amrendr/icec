import { Component, OnInit } from '@angular/core';
import { AppService} from '../../services/app.service';
import { Member, Args, Gallery, Event } from '../../services/app.class';


@Component({
  selector: 'app-indiafest',
  templateUrl: './indiafest.component.html',
  styleUrls: ['./indiafest.component.css']
})
export class IndiafestComponent implements OnInit {

  gallery: Gallery;
  contacts: Member[];
  event: Event;

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

    this.appService.getGallery(input).then(
      x => this.gallery = ((x && x.length > 0) ? x[0] : null)
    );
  }

  getIndiafestOrganizer(): void {
    let input: Args = { type: 'IF', year: null };
    this.appService.getMembers(input).then(x => this.contacts = x.memberList);
  }

  getEventInfo(key: string): void {
    this.appService.getEvents(key).then(x => this.event = ((x && x.length > 0) ? x[0] : null));
  }
}
