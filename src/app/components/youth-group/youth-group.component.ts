import { Component, OnInit } from '@angular/core';
import { Args } from '../../services/app.class';

@Component({
  selector: 'app-youth-group',
  templateUrl: './youth-group.component.html',
  styleUrls: ['./youth-group.component.css']
})

export class YouthGroupComponent implements OnInit {

  loading: boolean = true;
  input: Args = { type: 'youth', year: null };

  constructor() { }

  ngOnInit() { }

}
