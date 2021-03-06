import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs';
import { map, publishReplay, refCount, startWith, switchMap } from 'rxjs/operators';

import { Args, Gallery, Photo } from '../../services/app.class';
import { AppDimensionService } from '../../services/app.dimension.service';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy {

  col: number | {};
  gallery$: Observable<Gallery[]>;
  gallery: Gallery[] = [];
  params: Args;
  selectedPhotoIndex: number;
  hasNextPhoto = false;
  hasPrevPhoto = false;
  isSlideShowActive = false;
  selectedPhoto: Photo;
  loading: boolean;
  imgLoaded = false;
  hasMultipleSection: boolean;
  gallerySubscription: any;
  aspectRatio = 1;

  constructor(
    private activeRoute: ActivatedRoute,
    private galleryService: AppService,
    private appRuler: AppDimensionService
  ) { }

  ngOnInit() {
    this.gallery$ = this.activeRoute.params.pipe(
      map((params: Params) => this.formatInput(params)),
      switchMap((input: Args) => this.galleryService.getGallery(input)));

    this.loading = true;
    this.gallery$.subscribe(
      (gallery) => { this.gallery = gallery; this.loading = false; },
      (err) => { this.loading = false; });

    this.gallerySubscription = this.gallery$.pipe(
      switchMap((gallery: Gallery[]) => this.appRuler.getGalleryColumns(gallery[0].max_image_width)),
      startWith(4),
      publishReplay(1),
      refCount())
      .subscribe((x) => {
        this.col = x;
        if (x <= 2) {
          this.aspectRatio = 0.75;
        } else if (x > 2) {
          this.aspectRatio = 1;
        }
      });
  }

  ngOnDestroy() {
    if (this.gallerySubscription) {
      this.gallerySubscription.unsubscribe();
    }
  }

  formatInput(params: Params): Args {
    const input: Args = { year: null, type: null };
    switch (params['year']) {
      case 'current':
      case null:
      case undefined:
        break;
      default:
        if (isNaN(params['year'])) {
          input.year = -1;
        } else {
          input.year = +params['year'];
        }
        break;
    }
    input.type = params['section'];
    this.params = input;

    if (!input.type) {
      // section input is not provided, top level gallery navigation
      this.hasMultipleSection = false;
    } else if (!input.year) {
      // Navigating to a particular section but year input is not provided
      // Multiple section can be available for different year, include year in the title
      this.hasMultipleSection = true;
    } else {
      this.hasMultipleSection = false;
    }

    return input;
  }

  getSubtitle(): string {
    let subtitle = '';
    if (this.params.type) {
      if (this.gallery.length === 1) {
        subtitle = this.gallery[0].subtitle;
      } else if (this.gallery.length > 1) {
        subtitle = this.gallery[0].title;
      }
    } else {
      subtitle = 'Various Items';
    }
    return this.galleryItems(subtitle);
  }

  private galleryItems(str: string): string {
    let items = ' item';
    if (this.gallery.length === 1) {
      items = this.gallery[0].photos.length + items;
      if (this.gallery[0].photos.length > 1) {
        items = items + 's';
      }
    } else {
      items = this.gallery.length + items + 's';
    }
    return str + ' - ' + items;
  }

  getTitle(): string {
    let title = 'Gallery';
    if (this.gallery.length === 1) {
      title = this.gallery[0].title;
      if (this.gallery[0].year) {
        title += ' (' + this.gallery[0].year + ')';
      }
    }
    return title;
  }

  closeSlideShow(): void {
    this.isSlideShowActive = false;
  }

  showPhoto(index: number): void {
    this.isSlideShowActive = true;
    this.selectedPhotoIndex = index;
    if (this.gallery[0].photos.length - 1 > this.selectedPhotoIndex) {
      this.hasNextPhoto = true;
    }
    if (this.selectedPhotoIndex > 0) {
      this.hasPrevPhoto = true;
    }
    this.setSelectedPhoto();
  }

  showNextPhoto(): void {
    if (!this.hasNextPhoto) {
      return;
    }

    this.selectedPhotoIndex = this.selectedPhotoIndex + 1;
    this.hasPrevPhoto = true;

    if (this.gallery[0].photos.length - 1 > this.selectedPhotoIndex) {
      this.hasNextPhoto = true;
    } else {
      this.hasNextPhoto = false;
    }

    this.setSelectedPhoto();
  }

  showPrevPhoto(): void {
    if (!this.hasPrevPhoto) {
      return;
    }

    this.selectedPhotoIndex = this.selectedPhotoIndex - 1;
    this.hasNextPhoto = true;

    if (this.selectedPhotoIndex > 0) {
      this.hasPrevPhoto = true;
    } else {
      this.hasPrevPhoto = false;
    }

    this.setSelectedPhoto();
  }

  setSelectedPhoto(): void {
    this.imgLoaded = false;
    setTimeout(() => {
      this.imgLoaded = true;
      this.selectedPhoto = this.gallery[0].photos[this.selectedPhotoIndex];
    }, 100);

  }

  onKey(event: any): void {
    if (event.keyCode === 27) {
      this.closeSlideShow();
    } else if (event.keyCode === 39 && this.hasNextPhoto) {
      this.showNextPhoto();
    } else if (event.keyCode === 37 && this.hasPrevPhoto) {
      this.showPrevPhoto();
    }
  }
}
