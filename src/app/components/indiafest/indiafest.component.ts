import { Component, OnInit } from '@angular/core';
import { AppService, Member, Args, Gallery } from '../../services/app.service';

@Component({
  selector: 'app-indiafest',
  templateUrl: './indiafest.component.html',
  styleUrls: ['./indiafest.component.css']
})
export class IndiafestComponent implements OnInit {

  gallery: Gallery;
  contacts: Member[];

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.getIndiafestPhotos();
    this.getIndiafestOrganizer();
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
}
