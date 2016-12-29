import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Event } from '../../services/app.class';


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
