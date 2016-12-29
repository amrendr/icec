import { Component, OnInit, Input } from '@angular/core';
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

  constructor(
    private navService: AppNavigationService
  ) { }

  ngOnInit() {
  }

  toggleSidenav(): void {
    this.navService.isSidenavOpen = !this.navService.isSidenavOpen;
    this.navService.toggleSidenav();
  }
}