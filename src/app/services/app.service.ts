import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, publishReplay, refCount, tap } from 'rxjs/operators';

import { AnnouncementBar, Args, CommunityEvent, Gallery, Mail, Member, MemberList, Members } from './app.class';
import { Api } from './app.service.api';


@Injectable()
export class AppService {

  _membersObservable: Observable<any> = null;
  _allMembersObservable: Observable<any> = null;
  _indiafestOrganizerObservable: Observable<any> = null;
  _icecContactsObservable: Observable<any> = null;
  _announcementObservable: Observable<AnnouncementBar> = null;
  _galleryObservable: Observable<Gallery[]> = null;
  _communityEventObservable: Observable<CommunityEvent[]> = null;

  constructor(
    private http: HttpClient,
    private api: Api
  ) { }

  private getResponse(url: string) {
    return this.http.get(url, { responseType: 'text' })
      .pipe(
        tap(
          data => data,
          error => this.logError(error)
        ),
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  private extractData(res: string) {
    let body = res;
    // remove multileline comments
    body = body.replace(/\/\*[\s\S]*?\*\/.*?/g, '');
    // remove single line comments
    body = body.replace(/(\n|\r|\r\n)+?\s*?\/\/.*/g, '');

    return JSON.parse(body) || undefined;
  }
  private logError(error: string) {
    // In a real world app, we might use a remote logging infrastructure
    console.error(error);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  getMembers(input: Args): Observable<Members> {
    let observable: Observable<any>;

    switch (input.type) {
      case 'OM':
        if (!this._allMembersObservable) {
          this._allMembersObservable = this.getResponse(this.api.urls.allMemberDataApi)
            .pipe(
              publishReplay(1),
              refCount()
            );
        }

        observable = this._allMembersObservable;
        break;
      case 'IF':
        if (!this._indiafestOrganizerObservable) {
          this._indiafestOrganizerObservable = this.getResponse(this.api.urls.indiafestOrganizerDataApi)
            .pipe(
              publishReplay(1),
              refCount()
            );
        }

        observable = this._indiafestOrganizerObservable;
        break;
      case 'CU':
      case 'NA':
      case 'IR':
      case 'YG':
      case 'EF':
      case 'CME':
      case 'MB':
        if (!this._icecContactsObservable) {
          this._icecContactsObservable = this.getResponse(this.api.urls.icecContactsDataApi)
            .pipe(
              publishReplay(1),
              refCount()
            );
        }

        observable = this._icecContactsObservable;
        break;
      case 'EM':
      case 'BM':
      case 'RM':
        observable = this.getMembersObservable();
        break;
      default:
        observable = this.getMembersObservable();
        break;
    }

    return observable
      .pipe(
        map(data => this.formatMembers(data, input))
      );

  }

  private getMembersObservable(): Observable<any> {
    if (!this._membersObservable) {
      this._membersObservable = this.getResponse(this.api.urls.membersDataApi)
        .pipe(
          publishReplay(1),
          refCount()
        );
    }
    return this._membersObservable;
  }

  private formatMembers(data: any, input: Args): Members {
    const members: Members = { year: input.year, title: '', memberList: [] };
    let item: MemberList;

    if (input.type === 'EM' || input.type === 'BM' || input.type === 'RM') {
      if (input.year) {
        item = data.find((member: Members) => member.year === input.year);
      } else {
        item = data.sort((a: Members, b: Members) => b.year - a.year)[0];
      }
      if (!item) {
        item = { year: null, boardMembers: [], executives: [], regularMembers: [] };
      }
    }

    switch (input.type) {
      case 'EM':
        members.title = 'Executive Members';
        members.year = item.year;
        members.memberList = item.executives;
        break;
      case 'BM':
        members.title = 'Board Members';
        members.year = item.year;
        members.memberList = item.boardMembers;
        break;
      case 'RM':
        members.title = 'Regular Members';
        members.year = item.year;
        members.memberList = item.regularMembers;
        break;
      case 'OM':
        members.title = 'Donor/Founding Members';
        members.memberList = data;
        break;
      case 'IF':
        members.title = 'India Fest Organizer';
        members.memberList = data[0];
        members.flyers = data[1];
        members.forms = data[2];
        break;
      case 'CU':
        members.title = 'Contact Us';
        members.memberList = data.filter((x: Member) => x.membershipType.toLowerCase() === 'contacts');
        break;
      case 'NA':
        members.title = 'Newcomers Assistance';
        members.memberList = data.filter((x: Member) => x.membershipType.toLowerCase() === 'assistance');
        break;
      case 'IR':
        members.title = 'ICEC Rental Information';
        members.memberList = data.filter((x: Member) => x.membershipType.toLowerCase() === 'rental');
        break;
      case 'YG':
        members.title = 'Youth Group Coordinator';
        members.memberList = data.filter((x: Member) => x.membershipType.toLowerCase() === 'youth');
        break;
      case 'EF':
        members.title = 'Educational Financial Assistance Program';
        members.memberList = data.filter((x: Member) => x.membershipType.toLowerCase() === 'edufinance');
        break;
      case 'CME':
        members.title = 'Continuing Medical Education';
        members.memberList = data.filter((x: Member) => x.membershipType.toLowerCase() === 'cme');
        break;
      case 'MB':
        members.title = 'Membership Benefits';
        members.memberList = data.filter((x: Member) => x.membershipType.toLowerCase() === 'benefit');
        break;
      default:
        members.title = 'Executive Members';
        members.year = item.year;
        members.memberList = item.executives;
        break;
    }
    return members;
  }

  getAnnouncement(): Observable<AnnouncementBar> {

    if (!this._announcementObservable) {
      this._announcementObservable = this.getResponse(this.api.urls.announcementsDataApi)
        .pipe(
          publishReplay(1),
          refCount()
        );
    }
    return this._announcementObservable;
  }

  sendMessage(data: Mail): Observable<boolean> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(this.api.urls.sendMessageApi, this.formatMessage(data), httpOptions)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  private formatMessage(mail: Mail): Mail {
    mail.message =
      `
From:  ` + mail.name + `
Email: ` + mail.from + `

       ` + mail.message + `

PS: This message is generated from ICEC Contact page.

`;
    return mail;
  }

  getCommunityEvents(key: string): Observable<CommunityEvent[]> {

    if (!this._communityEventObservable) {
      this._communityEventObservable = this.getResponse(this.api.urls.communityEventsDataApi)
        .pipe(
          publishReplay(1),
          refCount()
        );
    }
    return this._communityEventObservable
      .pipe(
        map(data => this.filterCommunityEvent(data, key))
      );
  }

  private filterCommunityEvent(data: any, key: string): CommunityEvent[] {
    let returnItems: CommunityEvent[];

    if (!key) {
      returnItems = data;
    } else {
      returnItems = data.filter((x: CommunityEvent) => x.key.toUpperCase() === key.toUpperCase());
    }

    return returnItems;
  }

  getGallery(input: Args): Observable<Gallery[]> {

    if (!this._galleryObservable) {
      this._galleryObservable = this.getResponse(this.api.urls.galleryListDataApi)
        .pipe(
          publishReplay(1),
          refCount()
        );
    }

    return this._galleryObservable
      .pipe(
        map(data => this.filterGallery(data, input))
      );
  }

  private filterGallery(data: any[], input: Args): Gallery[] {
    let items: Gallery[];

    if (input.type && input.year) {
      items = this.getGalleryWithPhoto(data, input.type, input.year);
    } else {
      items = this.getGalleryBySection(data, input.type);
      if (items.length === 1) {
        items = this.getGalleryWithPhoto(data, items[0].section, items[0].year);
      }
    }
    return items;
  }

  private getGalleryWithPhoto(data: any[], section: string, year: number): Gallery[] {
    return data.filter(x => x.year === year && x.section.toLowerCase() === section.toLowerCase()).slice(0, 1);
  }

  private getGalleryBySection(data: any[], section: string): Gallery[] {
    if (section) {
      return data.filter(x => (x.section || '').toLowerCase() === section.toLowerCase())
        .map(x => {
          const copy: Gallery = Object.assign({}, x);
          copy.photosCount = (copy.photos ? copy.photos.length : 0);
          copy.photos = [];
          return copy;
        })
        .sort((a, b) => b.year - a.year);
    } else {

      const galleryItems: Gallery[] = data.sort((a, b) => b.year - a.year);
      const gallerySections: Gallery[] = [];

      galleryItems.forEach(x => {
        // Check if we have already stored in our gallerySection, else continue
        const item: Gallery = gallerySections.find(y => y.section.toLowerCase() === x.section.toLowerCase());
        if (!item) {
          const copy: Gallery = Object.assign({}, x);
          copy.photosCount = (copy.photos ? copy.photos.length : 0);
          copy.photos = [];
          gallerySections.push(copy);
        } else {
          if (!item.hasMultiple) {
            item.photosCount = 1;
          }
          item.photosCount++;
          item.hasMultiple = true;
        }
      });
      return gallerySections.sort((a, b) => a.section.toLowerCase().localeCompare(b.section.toLowerCase()));
    }
  }
}
