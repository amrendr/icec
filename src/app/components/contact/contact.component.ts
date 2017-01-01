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
  loading1: boolean;
  loading2: boolean;

  constructor(
    private memberService: AppService
  ) { }

  ngOnInit() {
    this.getIcecContacts();
    this.getIcecAssistance();
  }

  getIcecContacts(): void {
    this.loading1 = true;
    let input: Args = { type: 'CU', year: null };
    this.memberService.getMembers(input).subscribe(
      (x) => { this.contacts = x.memberList; this.loading1 = false; },
      (err) => { this.loading1 = false; });
  }

  getIcecAssistance(): void {
    this.loading2 = true;
    let input: Args = { type: 'NA', year: null };
    this.memberService.getMembers(input).subscribe(
      (x) => { this.assistants = x.memberList; this.loading2 = false; },
      (err) => { this.loading2 = false; });
  }
}
