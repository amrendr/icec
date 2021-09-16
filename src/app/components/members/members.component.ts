import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { map, switchMap } from 'rxjs/operators';

import { Args, Member, Members } from '../../services/app.class';
import { AppFilterListPipe } from '../../services/app.pipe';
import { AppService } from '../../services/app.service';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  currentType = 'EM';
  currentUrl = 'executives';
  currentYear = 'current';
  private previousYear = 'current';
  filterTxt: string;
  loading: boolean;

  members: Members = { year: null, title: null, memberList: [] };
  memberTypes = [
    { value: 'EM', viewValue: 'Executives', url: 'executives' },
    { value: 'BM', viewValue: 'Board Members', url: 'board' },
    { value: 'RM', viewValue: 'Regular Members', url: 'regular' },
    { value: 'OM', viewValue: 'All Members Till Date', url: 'overall' },
  ];

  memberYears = [
    { value: 'current', viewValue: 'current' },
    { value: '2017', viewValue: '2017' },
    { value: '2015', viewValue: '2015' }
  ];

  constructor(
    private activeRoute: ActivatedRoute,
    private route: Router,
    private memberService: AppService,
    private filterPipe: AppFilterListPipe
  ) { }

  ngOnInit() {
    this.loading = true;
    this.activeRoute.params
      .pipe(map((params: Params) => this.formatInput(params)),
        switchMap((input: Args) => this.memberService.getMembers(input)))
      .subscribe(
        (members) => { this.members = members; this.loading = false; },
        (err) => { this.loading = false; });

  }

  formatInput(params: Params): Args {
    // console.warn(params['year'], params['type']);
    const input: Args = { year: null, type: null };
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

  onSelect(url: string): void {
    if (this.currentUrl === url) {
      return;
    }
    this.loading = true;
    this.currentUrl = url;
    this.filterTxt = '';
    this.route.navigate(['/members', this.currentYear, this.currentUrl]);
  }

  onYearSelect(year: string): void {
    if (this.previousYear === year) {
      return;
    }
    this.loading = true;
    this.previousYear = year;
    this.filterTxt = '';
    this.route.navigate(['/members', this.currentYear, this.currentUrl]);
  }

  filteredMembers(): Member[] {
    // filter over all of the property of Member object.
    return this.filterPipe.transform(
      this.members.memberList,
      this.filterTxt,
      ['membershipType', 'membershipTerm', 'fullname', 'lastname', 'email', 'contact', 'title']
    );
  }
}

