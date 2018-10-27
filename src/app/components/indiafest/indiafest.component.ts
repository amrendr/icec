import { Component, OnInit } from '@angular/core';
import { Args, CommunityEvent, Flyer, Form, Member } from '../../services/app.class';
import { AppService } from '../../services/app.service';


@Component({
  selector: 'app-indiafest',
  templateUrl: './indiafest.component.html',
  styleUrls: ['./indiafest.component.css']
})
export class IndiafestComponent implements OnInit {

  contacts: Member[];
  flyers: Flyer[];
  forms: Form[];
  event: CommunityEvent;
  input: Args = { type: 'indiafest', year: null };
  loading1 = true;
  loading2: boolean;
  loading3: boolean;
  title: string;
  subtitle: string;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.getIndiafestOrganizer();
    this.getEventInfo('IFHF');
  }

  getIndiafestOrganizer(): void {
    const input: Args = { type: 'IF', year: null };

    this.loading2 = true;
    this.appService.getMembers(input)
      .subscribe((x) => {
        this.contacts = x.memberList;
        this.flyers = x.flyers;
        this.forms = x.forms;
        this.loading2 = false;
      },
        (err) => { this.loading2 = false; }
      );
  }

  getEventInfo(key: string): void {
    this.loading3 = true;
    this.appService.getCommunityEvents(key).subscribe((x) => {
      this.event = ((x && x.length > 0) ? x[0] : null);
      if (this.event) {
        this.title = this.event.title;
        this.subtitle = this.event.time + ' at ' + this.event.venue;
      }
      this.loading3 = false;
    },
      (err) => { this.loading3 = false; });
  }
}
