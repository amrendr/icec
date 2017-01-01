import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Gallery, Args } from '../../services/app.class';


@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  gallery: Gallery;
  loading: boolean;

  constructor(
    private galleryService: AppService
  ) { }

  ngOnInit() {
    this.getRentalPhotos();
  }

  getRentalPhotos(): void {
    let input: Args = { type: 'rental', year: null };

    this.loading = true;
    this.galleryService.getGallery(input).subscribe(
      (x) => { this.gallery = ((x && x.length > 0) ? x[0] : null); this.loading = false; },
      (err) => { this.loading = false; }
    );
  }

}
