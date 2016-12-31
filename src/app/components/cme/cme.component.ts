import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Gallery, Args } from '../../services/app.class';


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

    this.galleryService.getGallery(input).subscribe(
      x => this.gallery = ((x && x.length > 0) ? x[0] : null)
    );
  }
}
