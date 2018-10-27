import { Component, OnInit } from '@angular/core';
import { Args, Member } from '../../services/app.class';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-youth-group',
  templateUrl: './youth-group.component.html',
  styleUrls: ['./youth-group.component.css']
})

export class YouthGroupComponent implements OnInit {

  loading = true;
  input: Args = { type: 'youth', year: null };

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
    const input: Args = { type: 'YG', year: null };
    this.memberService.getMembers(input).subscribe(
      (x) => { this.contacts = x.memberList; this.loading1 = false; },
      (err) => { this.loading1 = false; });
  }
}
