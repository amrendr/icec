import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppNavigationService {
    isSidenavOpen:boolean = false;
  // Observable string sources
  private navigationToggleSource = new Subject<string>();
  // Observable string streams
  navigationToggled$ = this.navigationToggleSource.asObservable();
  // Service message commands
  toggleSidenav() {
      this.isSidenavOpen = !this.isSidenavOpen;
    this.navigationToggleSource.next("toggle");
  }
}
