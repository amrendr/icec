import { Component, OnInit } from '@angular/core';
import { Args, Member } from '../../services/app.class';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  paymentType: string;
  contacts: Member[];
  loading1: boolean;

  constructor(
    private memberService: AppService
  ) { }

  ngOnInit() {
    this.getIcecContacts();
  }

  getIcecContacts(): void {
    this.loading1 = true;
    const input: Args = { type: 'MB', year: null };
    this.memberService.getMembers(input).subscribe(
      (x) => { this.contacts = x.memberList; this.loading1 = false; },
      (err) => { this.loading1 = false; });
  }
}
