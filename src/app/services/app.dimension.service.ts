import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/rx';

@Injectable()
export class AppDimensionService {

  width$: Observable<number>;
  height$: Observable<number>;

  constructor() {
    const windowSize$ =
      Observable.fromEvent(window, 'resize')
        .map(this.getWindowSize)
        .startWith(this.getWindowSize())
        .publishReplay(1)
        .refCount();

    this.width$ = (windowSize$.pluck('width') as Observable<number>)
      .distinctUntilChanged();
    this.height$ = (windowSize$.pluck('height') as Observable<number>)
      .distinctUntilChanged();
  }

  getWindowSize(): any {
    return {
      height: window.innerHeight,
      width: window.innerWidth
    };
  }

  getGalleryColumns(img_maxwidth: number): Observable<number> {
    return this.width$
      .map(x => this.getColumns(x, img_maxwidth))
      .distinctUntilChanged();
  }

  private getColumns(current_width: number, img_maxwidth: number): number {
    let col: number = Math.ceil((current_width + 1) / (img_maxwidth + 1));
    // if img width is getting shorter than 80% of the original max width, Give them more room.
    if (current_width / col < img_maxwidth * 4 / 5) {
      col = col - 1;
    }
    if (col === 0) {
      col = 1;
    }
    return col;
  }
}

