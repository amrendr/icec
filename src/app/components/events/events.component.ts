import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { CommunityEvent } from '../../services/app.class';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: CommunityEvent[];

  constructor(
    private eventService: AppService
  ) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.eventService.getCommunityEvents(null).subscribe(x => this.events = x);
  }
}
