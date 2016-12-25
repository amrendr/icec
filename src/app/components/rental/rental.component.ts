import { Component, OnInit } from '@angular/core';
import { AppService, Gallery, Args } from '../app.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  gallery: Gallery;

  constructor(
    private galleryService: AppService
  ) { }

  ngOnInit() {
    this.getRentalPhotos();
  }

  getRentalPhotos(): void {
    let input: Args = { type: 'rental', year: null };
    let galleries: Gallery[];

    this.galleryService.getGallery(input).then(
      x => this.gallery = ((x && x.length > 0) ? x[0] : null)
    );
  }

}
