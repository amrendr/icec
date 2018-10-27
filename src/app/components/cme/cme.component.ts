import { Component, OnInit } from '@angular/core';
import { Args, Member } from '../../services/app.class';
import { AppService } from '../../services/app.service';


@Component({
  selector: 'app-cme',
  templateUrl: './cme.component.html',
  styleUrls: ['./cme.component.css']
})
export class CmeComponent implements OnInit {

  loading = true;
  input: Args = { type: 'cme', year: null };

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
    const input: Args = { type: 'CME', year: null };
    this.memberService.getMembers(input).subscribe(
      (x) => { this.contacts = x.memberList; this.loading1 = false; },
      (err) => { this.loading1 = false; });
  }

}
