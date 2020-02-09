import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationComponent } from './shared/navigation/navigation.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('navigation', { static: true }) navigation: NavigationComponent;

  toggleSidenav() {
    this.navigation.toggleSidenav();
  }

  closeSidenav() {
    this.navigation.closeSidenav();
  }
}
