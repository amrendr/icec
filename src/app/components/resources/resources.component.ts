import { Component, OnInit } from '@angular/core';
import { Args, CommunityEvent, Member } from '../../services/app.class';
import { AppService } from '../../services/app.service';


@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  loading: boolean;
  event: CommunityEvent;

  loading1 = true;
  input: Args = { type: 'resources', year: null };

  loading2: boolean;
  contacts: Member[];

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.getEventInfo('SAT');
    this.getIcecContacts();
  }

  getEventInfo(key: string): void {
    this.loading = true;
    this.appService.getCommunityEvents(key).subscribe(
      (x) => { this.event = ((x && x.length > 0) ? x[0] : null); this.loading = false; },
      (err) => { this.loading = false; });
  }

  getIcecContacts(): void {
    this.loading2 = true;
    const input: Args = { type: 'EF', year: null };
    this.appService.getMembers(input).subscribe(
      (x) => { this.contacts = x.memberList; this.loading2 = false; },
      (err) => { this.loading2 = false; });
  }

}
