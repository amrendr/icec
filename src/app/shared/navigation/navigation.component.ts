import { Component, OnInit, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { AppNavigationService } from '../../services/app.navigation.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isSidenavOpen: boolean = false;
  navitems: Navitem[] = [
    { title: 'Home', url: '/home' },
    { title: 'About', url: '/about' },
    { title: 'Mission And Purpose', url: '/mission' },
    { title: 'Center Rental Information', url: '/rental' },
    { title: 'Membership', url: '/membership' },
    { title: 'Members', url: '/members' },
    { title: 'Youth Group', url: '/youth' },
    { title: 'Student Resources', url: '/resources/student' },
    { title: 'Community Events', url: '/events' },
    { title: 'Continuing Medical Education (CME)', url: '/cme' },
    { title: 'India Fest', url: '/indiafest' },
    { title: 'Photo Gallery', url: '/gallery' },
    { title: 'By Laws', url: '/bylaws' },
    { title: 'Contact US', url: '/contact' }
  ];

  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(
    private navService: AppNavigationService
  ) { }

  ngOnInit() {
    this.navService.navigationToggled$.subscribe(evt => { this.toggleSidenav(); });
  }

  onCloseStart(): void {
    this.navService.isSidenavOpen = false;
  }

  closeSidenav() {
    if (this.navService.isSidenavOpen) {
      this.navService.isSidenavOpen = !this.navService.isSidenavOpen;
      this.sidenav.close();
    }
  }

  toggleSidenav() {
    this.navService.isSidenavOpen = !this.navService.isSidenavOpen;
    this.sidenav.toggle();
  }
}

export interface Navitem {
  title: string;
  url: string;
}
