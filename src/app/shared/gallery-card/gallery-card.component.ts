import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Gallery, Args } from '../../services/app.class';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-gallery-card',
  templateUrl: './gallery-card.component.html',
  styleUrls: ['./gallery-card.component.css']
})

export class GalleryCardComponent implements OnInit {
  @Input() item: Gallery;
  @Input() input: Args;
  @Input() title: string;
  @Input() titleWithYear: boolean;
  @Input() portrait: boolean;
  @Input() largeImg: boolean;
  @Input() loading: boolean;
  @Input() showCount: boolean;
  @Input() pageUrl: string;
  @Output() loadingChange = new EventEmitter<boolean>(true);
  showCardLoading: boolean;

  constructor(
    private router: Router,
    private galleryService: AppService
  ) { }

  ngOnInit() {

    if (this.item === undefined) {
      if (this.input) {
        if (this.loading === undefined) {
          this.showCardLoading = true;
        }
        this.getGalleryInfo();
      } else {
        console.warn('Gallery Card, Input is not available.');
        this.loadingCompleted();
      }
    }
  }

  private loadingCompleted(): void {
    this.loading = false;
    this.showCardLoading = false;
    this.loadingChange.emit(this.loading);
  }

  getGalleryInfo(): void {
    this.loading = true;
    this.galleryService.getGallery(this.input).subscribe(
      (x) => {
        this.item = ((x && x.length > 0) ? x[0] : null);
        this.loadingCompleted();
      },
      (err) => {
        this.loadingCompleted();
      }
    );
  }

  navigateTo(item: Gallery): void {
    if (this.pageUrl) {
      this.router.navigate([this.pageUrl]);
    } else {
      if (item.year && !item.hasMultiple) {
        this.router.navigate(['/gallery', item.section, item.year]);
      } else {
        this.router.navigate(['/gallery', item.section]);
      }
    }
  }

  getTitle(): string {
    let title = this.item.title;
    if (this.item.year && this.titleWithYear) {
      title = title + ' (' + this.item.year + ')';
    }
    return title;
  }
}
