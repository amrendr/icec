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

  constructor(
    private navService: AppNavigationService
  ) { }

  ngOnInit() {
    this.navService.navigationToggled$.subscribe(evt => { this.toggleSidenav(); });
  }

  @ViewChild('sidenav') sidenav: MdSidenav;


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

  navitems: Navitem[] = [
    { title: 'Home', url: '/home' },
    { title: 'About', url: '/about' },
    { title: 'Center Rental Information', url: '/rental' },
    { title: 'Membership', url: '/membership' },
    { title: 'Youth Group', url: '/youth' },
    { title: 'Student Resources', url: '/resources/student' },
    { title: 'Community Events', url: '/events' },
    { title: 'Continuing Medical Education (CME)', url: '/cme' },
    { title: 'India Fest', url: '/indiafest' },
    { title: 'Photo Gallery', url: '/gallery' },
    { title: 'Contact US', url: '/contact' }
  ]

}

export interface Navitem {
  title: string;
  url: string;
}