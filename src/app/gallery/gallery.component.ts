import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AppService, Gallery, Args } from '../app.service';
import { AppDimensionService } from '../app.dimension.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  col$: Observable<number>;
  gallery$: Observable<Gallery[]>;
  gallery: Gallery[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private galleryService: AppService,
    private windowsize: AppDimensionService

  ) { }

  ngOnInit() {
    this.gallery$ = this.activeRoute.params
      .map((params: Params) => this.formatInput(params))
      .switchMap((input: Args) => this.galleryService.getGallery(input));

    this.gallery$.subscribe(gallery => this.gallery = gallery);
    this.col$ = this.gallery$
      .switchMap((gallery: Gallery[]) => this.windowsize.getGalleryColumns(gallery[0].max_image_width))
      .startWith(4)
      .publishReplay(1)
      .refCount();

  }

  formatInput(params: Params): Args {
    let input: Args = { year: null, type: null };
    switch (params['year']) {
      case 'current':
      case null:
      case undefined:
        break;
      default:
        if (isNaN(params['year']))
          input.year = -1;
        else
          input.year = +params['year'];
        break;
    }
    input.type = params['section']
    return input;
  }

  getSubtitle(): string {
    let subtitle: string = '';
    if (this.gallery.length == 1) {
      subtitle = this.gallery[0].title || this.gallery[0].subtitle;
      if (this.gallery[0].year)
        subtitle += ' (' + this.gallery[0].year + ')';
    } else if (this.gallery.length > 1) {
      subtitle = this.gallery[0].section;
      subtitle = subtitle.charAt(0).toUpperCase() + subtitle.slice(1);
    }
    return subtitle;
  }
}
