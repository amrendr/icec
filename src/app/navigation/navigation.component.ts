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

  navitems: Navitem[] = [
    {title:'Home', url:'/home'},
    {title:'About', url:'/about'},
    {title:'Center Rental Information', url:'/rental'},
    {title:'Membership', url:'/membership'},
    {title:'Student Resources', url:'/home'},
    {title:'Community Events', url:'/events'},
    {title:'Continuing Medical Education (CME)', url:'/cme'},
    {title:'India Fest', url:'/home'},
    {title:'Photo Gallery', url:'/gallery'},
    {title:'Contact US', url:'/contact'}
  ]

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

export interface Navitem {
  title: string;
  url: string;
}
