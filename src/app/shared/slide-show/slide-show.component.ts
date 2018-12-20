import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Slide } from '../../services/app.class';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit, OnDestroy {

  private _slides: Slide[] = [
    {
      title: 'Community of Indian Heritage',
      desc: 'We Help and Grow Together',
      img: 'assets/logo.png'
    }
    ,
    {
      title: 'Clear Sound Audiology',
      desc: 'Sponsor - India Fest 2019',
      img: 'https://www.clearsoundaudiology.com/app/themes/Clear_Sound_Ideology_Theme/dist//images/Clear-Sound-Audiology-Logo-Footer.png'
    },
    {
      title: 'Community of Indian Heritage',
      desc: 'We Help and Grow Together',
      img: 'assets/logo.png'
    },
    {
      title: 'UF International Center',
      desc: 'Sponsor - India Fest 2019',
      img: 'https://internationalcenter.ufl.edu/sites/all/themes/ufic/images/logo1.png'
    }

  ];

  @Input()
  set slides(data: Slide[]) {
    if (data && data.length > 0) {
      this._slides = data;
    }
  }
  get slides() {
    return this._slides;
  }

  @Input() duration: number;

  interval: any;
  onStageSlideIndex = 0;
  offStageSlideIndex = -1;
  changeSlideInterval = 5000;

  constructor() { }

  ngOnInit() {

    if (!isNaN(this.duration)) {
      this.changeSlideInterval = this.duration * 1000;
    }

    if (this.slides.length > 1) {
      this.interval = setInterval(() => { this.startShow(); }, 1000);
    }

  }

  ngOnDestroy() {
    this.clearLocalInterval();
  }

  private clearLocalInterval(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  startShow(): void {
    this.nextSlide();
    this.clearLocalInterval();
    this.interval = setInterval(() => { this.nextSlide(); }, this.changeSlideInterval);
  }

  nextSlide(): void {
    this.offStageSlideIndex = this.onStageSlideIndex;
    this.onStageSlideIndex = this.onStageSlideIndex + 1;
    if (this.onStageSlideIndex === this.slides.length) {
      this.onStageSlideIndex = 0;
    }
  }

  changeSlide(): void {
    if (this.slides.length > 1) {
      this.clearLocalInterval();
      this.nextSlide();
      this.interval = setInterval(() => { this.nextSlide(); }, this.changeSlideInterval);
    }
  }
}
