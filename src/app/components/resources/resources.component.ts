import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Event } from '../../services/app.class';


@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  event: Event;

  constructor(
    private eventService: AppService
  ) { }

  ngOnInit() {
    this.getEventInfo('SAT');
  }
  
  getEventInfo(key: string): void {
    this.eventService.getEvents(key).then(x => this.event = ((x && x.length > 0) ? x[0] : null));
  }
}
