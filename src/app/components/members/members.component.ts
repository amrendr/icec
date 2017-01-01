import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { AppService } from '../../services/app.service';
import { Members, Member, Args } from '../../services/app.class';
import { AppFilterListPipe } from '../../services/app.pipe';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private route: Router,
    private memberService: AppService,
    private filterPipe: AppFilterListPipe
  ) { }

  ngOnInit() {
    this.loading = true;
    this.activeRoute.params
      .map((params: Params) => this.formatInput(params))
      .switchMap((input: Args) => this.memberService.getMembers(input))
      .subscribe(
      (members) => { this.members = members; this.loading = false; },
      (err) => { this.loading = false; });

  }

  formatInput(params: Params): Args {
    // console.warn(params['year'], params['type']);
    let input: Args = { year: null, type: null };
    switch (params['year']) {
      case 'current':
        break;
      default:
        input.year = +params['year'];
        break;
    }

    switch (params['type']) {
      case 'executives':
        input.type = 'EM';
        break;
      case 'board':
        input.type = 'BM';
        break;
      case 'regular':
        input.type = 'RM';
        break;
      case 'overall':
        input.type = 'OM';
        break;
      default:
        input.type = 'EM';
        break;
    }
    this.currentType = input.type;
    return input;
  }

  members: Members = { year: null, title: null, memberList: [] };

  currentType: string;
  filterTxt: string;
  loading: boolean;

  memberTypes = [
    { value: 'EM', viewValue: 'Executives', url: 'executives' },
    { value: 'BM', viewValue: 'Board Members', url: 'board' },
    { value: 'RM', viewValue: 'Regular Members', url: 'regular' },
    { value: 'OM', viewValue: 'All Members Till Date', url: 'overall' },
  ];

  onSelect(url: string): void {
    this.loading = true;
    this.filterTxt = "";
    this.route.navigate(['/members', 'current', url]);
  }

  filteredMembers(): Member[] {
    //filter over all of the property of Member object.
    return this.filterPipe.transform(
      this.members.memberList,
      this.filterTxt,
      ["membershipType", "membershipTerm", "fullname", "lastname", "email", "contact", "title"]
    );
  }
}

