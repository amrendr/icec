import { Component, OnInit } from '@angular/core';
import { Args } from '../../services/app.class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  indiafest: Args = { type: 'indiafest', year: null };
  youth: Args = { type: 'youth', year: null };
  resources: Args = { type: 'resources', year: null };

  constructor() { }

  ngOnInit() {
  }

}
