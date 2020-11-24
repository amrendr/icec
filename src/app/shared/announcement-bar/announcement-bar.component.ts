import { Component, OnDestroy, OnInit } from '@angular/core';
import { Announcement } from '../../services/app.class';
import { AppService } from '../../services/app.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-announcement-bar',
  templateUrl: './announcement-bar.component.html',
  styleUrls: ['./announcement-bar.component.css']
})
export class AnnouncementBarComponent implements OnInit, OnDestroy {

  annoucements: Announcement[];
  showAnnouncement = false;
  loading: boolean;

  interval: any;
  selectedAnnoucement: Announcement;
  currentAnnoucemntIndex = 0;
  changeAnnouncementInterval = 5000;

  alertDurationInSeconds = 20;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  constructor(
    private annoucementService: AppService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.loading = true;
    this.annoucementService.getAnnouncement().subscribe(
      (x) => {
        this.annoucements = x.annoucements;

        if (!isNaN(x.interval)) {
          this.changeAnnouncementInterval = x.interval * 1000;
        }

        if (x.annoucements.length > 0) {
          this.selectedAnnoucement = x.annoucements[0];
          this.showAnnouncement = false;
        } else {
          this.showAnnouncement = true;
        }

        if (x.annoucements.length > 1) {
          this.interval = setInterval(() => { this.startAnnouncement(); }, 1000);
        }

        this.loading = false;
      },
      (err) => { this.loading = false; });
    // this.openSnackBar();
  }

  ngOnDestroy() {
    this.clearLocalInterval();
    // this.closeSnackBar();
  }

  private openSnackBar(): void {
    this.snackBar.openFromComponent(AlertComponent, {
      duration: this.alertDurationInSeconds * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }

  private closeSnackBar(): void {
    this.snackBar.dismiss();
  }

  private clearLocalInterval(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  startAnnouncement(): void {
    this.changeAnnouncement();
    this.clearLocalInterval();
    this.interval = setInterval(() => { this.changeAnnouncement(); }, this.changeAnnouncementInterval);
  }

  changeAnnouncement(): void {
    this.currentAnnoucemntIndex = this.currentAnnoucemntIndex + 1;
    if (this.currentAnnoucemntIndex === this.annoucements.length) {
      this.currentAnnoucemntIndex = 0;
    }

    this.selectedAnnoucement = this.annoucements[this.currentAnnoucemntIndex];
  }

  changeSlide(): void {
    if (this.annoucements.length > 1) {
      this.clearLocalInterval();
      this.changeAnnouncement();
      this.interval = setInterval(() => { this.changeAnnouncement(); }, this.changeAnnouncementInterval);
    }
  }

}


