import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../../services/app.class';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input() contacts: Member[];
  @Input() header: string;
  @Input() card: string;
  @Input() loading: boolean;

  constructor(  ) { }

  ngOnInit() {  }
}
