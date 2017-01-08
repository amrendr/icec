import { Component, OnInit } from '@angular/core';
import { Args } from '../../services/app.class';


@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  loading: boolean = true;
  input: Args = { type: 'rental', year: null };

  constructor() { }

  ngOnInit() { }

}
