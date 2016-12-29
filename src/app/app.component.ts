import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
// import { NavigationComponent } from './shared/navigation/navigation.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  // @ViewChild('navigation') navigation: NavigationComponent;

  toggleSidenav(){
    // this.navigation.toggleSidenav();
  }
}
