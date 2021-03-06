import { Component, OnInit } from '@angular/core';
import { Args, Member } from '../../services/app.class';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  loading = true;
  input: Args = { type: 'rental', year: null };
  loading1: boolean;
  contacts: Member[];

  constructor(
    private memberService: AppService
  ) { }

  ngOnInit() {
    this.getIcecContacts();
  }

  getIcecContacts(): void {
    this.loading1 = true;
    const input: Args = { type: 'IR', year: null };
    this.memberService.getMembers(input).subscribe(
      (x) => { this.contacts = x.memberList; this.loading1 = false; },
      (err) => { this.loading1 = false; });
  }

}
