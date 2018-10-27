import { Component, OnInit } from '@angular/core';
import { Args, Member } from '../../services/app.class';
import { AppService } from '../../services/app.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  loading: boolean;
  contacts: Member[];
  constructor(
    private memberService: AppService
  ) { }

  ngOnInit() {
    this.getIcecFacilityAssistance();
  }

  getIcecFacilityAssistance(): void {
    this.loading = true;
    const input: Args = { type: 'IR', year: null };
    this.memberService.getMembers(input).subscribe(
      (x) => {
        this.contacts = x.memberList;
        this.loading = false;
      },
      (err) => {
        this.loading = false;
      }
    );
  }

}
