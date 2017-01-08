import { Component, OnInit } from '@angular/core';
import { Args } from '../../services/app.class';


@Component({
  selector: 'app-cme',
  templateUrl: './cme.component.html',
  styleUrls: ['./cme.component.css']
})
export class CmeComponent implements OnInit {

  loading: boolean = true;
  input: Args = { type: 'cme', year: null };

  constructor() { }

  ngOnInit() { }

}
