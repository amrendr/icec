import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Gallery, Args } from '../../services/app.class';


@Component({
  selector: 'app-cme',
  templateUrl: './cme.component.html',
  styleUrls: ['./cme.component.css']
})
export class CmeComponent implements OnInit {

  gallery: Gallery;
  loading: boolean;

  constructor(
    private galleryService: AppService
  ) { }

  ngOnInit() {
    this.getCmeGallery();
  }

  getCmeGallery(): void {
    let input: Args = { type: 'cme', year: null };
    this.loading = true;

    this.galleryService.getGallery(input).subscribe(
      (x) => { this.gallery = ((x && x.length > 0) ? x[0] : null); this.loading = false; },
      (err) => { this.loading = false; }
    );
  }
}
