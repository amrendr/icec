import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Member, Args } from '../../services/app.class';

@Component({
  selector: 'app-youth-group',
  templateUrl: './youth-group.component.html',
  styleUrls: ['./youth-group.component.css']
})

export class YouthGroupComponent implements OnInit {

  loading: boolean = true;
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
    let input: Args = { type: 'YG', year: null };
    this.memberService.getMembers(input).subscribe(
      (x) => { this.contacts = x.memberList; this.loading1 = false; },
      (err) => { this.loading1 = false; });
  }
}
