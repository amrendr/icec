import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Gallery } from '../../services/app.class';

@Component({
  selector: 'app-gallery-card',
  templateUrl: './gallery-card.component.html',
  styleUrls: ['./gallery-card.component.css']
})
export class GalleryCardComponent implements OnInit {
  @Input() item: Gallery;
  @Input() title: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigateTo(item: Gallery): void {
    if (item.year && !item.hasMultiple) {
      this.router.navigate(['/gallery', item.section, item.year]);
    } else {
      this.router.navigate(['/gallery', item.section]);
    }
  }

}
