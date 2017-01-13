import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Member, Args } from '../../services/app.class';

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
    let input: Args = { type: 'YG', year: null };
    this.memberService.getMembers(input).subscribe(
      (x) => { this.contacts = x.memberList; this.loading1 = false; },
      (err) => { this.loading1 = false; });
  }
}
