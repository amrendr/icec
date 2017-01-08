import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { CommunityEvent, Args } from '../../services/app.class';


@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  event: CommunityEvent;
  loading: boolean;
  loading1: boolean = true;
  input: Args = { type: 'resources', year: null };

  constructor(
    private eventService: AppService
  ) { }

  ngOnInit() {
    this.getEventInfo('SAT');
  }

  getEventInfo(key: string): void {
    this.loading = true;
    this.eventService.getCommunityEvents(key).subscribe(
      (x) => { this.event = ((x && x.length > 0) ? x[0] : null); this.loading = false; },
      (err) => { this.loading = false; });
  }
}
