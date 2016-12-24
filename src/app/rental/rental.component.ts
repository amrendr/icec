import { Component, OnInit } from '@angular/core';
import { AppDimensionService } from '../app.dimension.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  constructor(
    private windowsize: AppDimensionService
  ) { }

  ngOnInit() {
    this.col$ = this.windowsize.getGalleryColumns(this.img_maxwidth);
  }

  img_maxwidth: number = 448;
  col$: Observable<number>;

  building = [
    { rows: 1, name: "Auditorium Stage", image: "stage.jpg" },
    { rows: 1, name: "Main Hall & Upstairs Rooms", image: "main_hall.jpg" },
    { rows: 1, name: "Food-warming & Storage Area", image: "food_warming_area.jpg" },
    { rows: 1, name: "TV Room", image: "tv_room.jpg" },
    { rows: 1, name: "Library Room", image: "library.jpg" },
    { rows: 1, name: "Prayer Room", image: "prayer_room.jpg" },
  ];

}
