import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AppNavigationService } from '../../services/app.navigation.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() nomargin: boolean;
  @Input() loading: boolean;

  constructor(
    private navService: AppNavigationService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  isSidenavOpen(): boolean {
    return this.navService.isSidenavOpen;
  }

  toggleSidenav(): void {
    this.navService.isSidenavOpen = !this.navService.isSidenavOpen;
    this.navService.toggleSidenav();
  }

  goBack(): void {
    this.location.back();
  }
}
