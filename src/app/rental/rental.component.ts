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
    { rows: 1, caption: "Auditorium Stage", image: "stage.jpg" },
    { rows: 1, caption: "Main Hall & Upstairs Rooms", image: "main_hall.jpg" },
    { rows: 1, caption: "Food-warming & Storage Area", image: "food_warming_area.jpg" },
    { rows: 1, caption: "TV Room", image: "tv_room.jpg" },
    { rows: 1, caption: "Library Room", image: "library.jpg" },
    { rows: 1, caption: "Prayer Room", image: "prayer_room.jpg" },
  ];

}
