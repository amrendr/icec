import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Gallery, Args } from '../../services/app.class';



@Component({
  selector: 'app-youth-group',
  templateUrl: './youth-group.component.html',
  styleUrls: ['./youth-group.component.css']
})
export class YouthGroupComponent implements OnInit {

  gallery: Gallery;
  loading: boolean;

  constructor(
    private galleryService: AppService
  ) { }

  ngOnInit() {
    this.getYouthPhotos();
  }

  getYouthPhotos(): void {
    let input: Args = { type: 'youth', year: null };

    this.loading = true;
    this.galleryService.getGallery(input).subscribe(
      (x) => { this.gallery = ((x && x.length > 0) ? x[0] : null); this.loading = false; },
      (err) => { this.loading = false; }
    );
  }

}
