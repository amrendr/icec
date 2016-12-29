import { Component, OnInit } from '@angular/core';
import { AppService, Announcement } from '../../services/app.service';

@Component({
  selector: 'app-announcement-bar',
  templateUrl: './announcement-bar.component.html',
  styleUrls: ['./announcement-bar.component.css']
})
export class AnnouncementBarComponent implements OnInit {

  constructor(
    private annoucementService: AppService
  ) { }

  ngOnInit() {
    this.annoucementService.getAnnouncement().then(
      (x) => {
        this.annoucements = x.annoucements;

        if (!isNaN(x.interval))
          this.changeAnnouncementInterval = x.interval * 1000;

        this.interval = setInterval(() => { this.changeAnnouncement(); }, this.changeAnnouncementInterval);

        if (x.annoucements.length > 0) {
          this.selectedAnnoucement = x.annoucements[0];
          this.showAnnouncement = false;
        }
        else {
          this.showAnnouncement = true;
        }
      });
  }

  annoucements: Announcement[];
  showAnnouncement: boolean = false;

  interval: any;
  selectedAnnoucement: Announcement;
  currentAnnoucemntIndex: number = 0;
  changeAnnouncementInterval: number = 5000;

  changeAnnouncement(): void {
    if (this.currentAnnoucemntIndex == this.annoucements.length)
      this.currentAnnoucemntIndex = 0;

    this.selectedAnnoucement = this.annoucements[this.currentAnnoucemntIndex++];

  }

  changeSlide(): void {
    clearInterval(this.interval);
    this.changeAnnouncement();
    this.interval = setInterval(() => { this.changeAnnouncement(); }, this.changeAnnouncementInterval);
  }

}


