import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement-bar',
  templateUrl: './announcement-bar.component.html',
  styleUrls: ['./announcement-bar.component.css']
})
export class AnnouncementBarComponent implements OnInit {

  constructor() {
    this.interval = setInterval(() => { this.changeAnnouncement(); }, 5000);
  }

  ngOnInit() {
  }

  annoucement: AnnouncementBar[] = [
    { title: 'India Fest 2017', desc:'April 8 from 9 AM - 6 PM (Santa Fe College Gym) April 8 from 9 AM - 6 PM (Santa Fe College Gym)', url: '/gallery' },
    { title: 'Health Fair 2017', desc:'April 8 from 9 AM - 6 PM (Santa Fe College Gym)', url: '/gallery' }
  ];

  interval: any;
  selectedAnnoucement: AnnouncementBar = this.annoucement[0];
  currentAnnoucemntIndex: number = 0;

  changeAnnouncement(): void {
    if (this.currentAnnoucemntIndex == this.annoucement.length)
      this.currentAnnoucemntIndex = 0;

    this.selectedAnnoucement = this.annoucement[this.currentAnnoucemntIndex++];

  }

  changeSlide(): void {
    clearInterval(this.interval);
    this.changeAnnouncement();
    this.interval = setInterval(() => { this.changeAnnouncement(); }, 5000);
  }

}

export interface AnnouncementBar {
  title: string;
  desc: string;
  url: string;
}
