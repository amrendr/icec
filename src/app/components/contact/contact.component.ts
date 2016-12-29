import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Member, Args } from '../../services/app.class';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: Member[];
  assistants: Member[];

  constructor(
    private memberService: AppService
  ) { }

  ngOnInit() {
    this.getIcecContacts();
    this.getIcecAssistance();
  }

  getIcecContacts(): void {
    let input: Args = { type: 'CU', year: null };
    this.memberService.getMembers(input).then(x => this.contacts = x.memberList);
  }

  getIcecAssistance(): void {
    let input: Args = { type: 'NA', year: null };
    this.memberService.getMembers(input).then(x => this.assistants = x.memberList);
  }
}
