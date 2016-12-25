import { Component, OnInit } from '@angular/core';
import { AppService, Gallery, Args } from '../app.service';


@Component({
  selector: 'app-youth-group',
  templateUrl: './youth-group.component.html',
  styleUrls: ['./youth-group.component.css']
})
export class YouthGroupComponent implements OnInit {

  gallery: Gallery;

  constructor(
    private galleryService: AppService
  ) { }

  ngOnInit() {
    this.getYouthPhotos();
  }

  getYouthPhotos(): void {
    let input: Args = { type: 'youth', year: null };
    let galleries: Gallery[];

    this.galleryService.getGallery(input).then(
      x => this.gallery = ((x && x.length > 0) ? x[0] : null)
    );
  }

}
