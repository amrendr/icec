import { Component, OnInit } from '@angular/core';
import { AppService, Event } from '../../services/app.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[];

  constructor(
    private eventService: AppService
  ) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.eventService.getEvents(null).then(x => this.events = x);
  }
}
