import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  @Input() title:string;
  isSidenavOpen: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  @ViewChild('sidenav') sidenav: MdSidenav;

  openSidenav() {
    this.isSidenavOpen = true;
    this.sidenav.open();
  }

  closeSidenav() {
    this.isSidenavOpen = false;
    this.sidenav.close();
  }

  toggleSidenav() {
    if(this.isSidenavOpen)
      this.closeSidenav()
    else
      this.openSidenav();
  }

}
