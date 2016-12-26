import { Component, OnInit } from '@angular/core';
import { AppService, Gallery, Args } from '../../services/app.service';

@Component({
  selector: 'app-cme',
  templateUrl: './cme.component.html',
  styleUrls: ['./cme.component.css']
})
export class CmeComponent implements OnInit {

  constructor(
    private galleryService: AppService
  ) { }

  ngOnInit() {
    this.getCmeGallery();
  }

  gallery: Gallery;

  getCmeGallery(): void {
    let input: Args = { type: 'cme', year: null };

    this.galleryService.getGallery(input).then(
      x => this.gallery = ((x && x.length > 0) ? x[0] : null)
    );
  }
}
