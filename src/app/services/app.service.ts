import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/rx';

import { Api } from './app.service.api';
import { Args, Member, Members, MemberList, AnnouncementBar, Gallery, CommunityEvent } from './app.class';


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
        private http: Http,
        private api: Api
    ) { }

    private extractData(res: Response) {
        let body = res.text();
        // remove multileline comments
        body = body.replace(/\/\*[\s\S]*?\*\/.*?/g, '');
        // remove single line comments
        body = body.replace(/(\n|\r|\r\n)+?\s*?\/\/.*/g, '');
        let json = JSON.parse(body);
        return json || undefined;
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    getMembers(input: Args): Observable<Members> {
        let observable: Observable<any>;

        switch (input.type) {
            case 'OM':
                if (!this._allMembersObservable) {
                    this._allMembersObservable = this.http.get(this.api.urls.allMemberDataApi)
                        .map(this.extractData)
                        .catch(this.handleError)
                        .publishReplay(1)
                        .refCount();
                }

                observable = this._allMembersObservable;
                break;
            case 'IF':
                if (!this._indiafestOrganizerObservable) {
                    this._indiafestOrganizerObservable = this.http.get(this.api.urls.indiafestOrganizerDataApi)
                        .map(this.extractData)
                        .catch(this.handleError)
                        .publishReplay(1)
                        .refCount();
                }

                observable = this._indiafestOrganizerObservable;
                break;
            case 'CU':
            case 'NA':
            case 'IR':
            case 'YG':
            case 'EF':
            case 'CME':
                if (!this._icecContactsObservable) {
                    this._icecContactsObservable = this.http.get(this.api.urls.icecContactsDataApi)
                        .map(this.extractData)
                        .catch(this.handleError)
                        .publishReplay(1)
                        .refCount();
                }

                observable = this._icecContactsObservable;
                break;
            case 'EM':
            case 'BM':
            case 'RM':
            default:
                if (!this._membersObservable) {
                    this._membersObservable = this.http.get(this.api.urls.membersDataApi)
                        .map(this.extractData)
                        .catch(this.handleError)
                        .publishReplay(1)
                        .refCount();
                }

                observable = this._membersObservable;
                break;
        }

        return observable
            .map(data => this.formatMembers(data, input));

    }

    private formatMembers(data: any, input: Args): Members {
        let members: Members = { year: input.year, title: '', memberList: [] };


        let item: MemberList;
        if (input.type === 'EM' || input.type === 'BM' || input.type === 'RM') {
            if (input.year) {
                item = data.find((member: Members) => member.year === input.year);
            } else {
                item = data.sort((a: Members, b: Members) => { return b.year - a.year; })[0];
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
                members.memberList = data;
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
            this._announcementObservable = this.http.get(this.api.urls.announcementsDataApi)
                .map(this.extractData)
                .catch(this.handleError)
                .publishReplay(1)
                .refCount();
        }
        return this._announcementObservable;
    }

    getCommunityEvents(key: string): Observable<CommunityEvent[]> {

        if (!this._communityEventObservable) {
            this._communityEventObservable = this.http.get(this.api.urls.communityEventsDataApi)
                .map(this.extractData)
                .catch(this.handleError)
                .publishReplay(1)
                .refCount();
        }
        return this._communityEventObservable
            .map(data => this.filterCommunityEvent(data, key));
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
            this._galleryObservable = this.http.get(this.api.urls.galleryListDataApi)
                .map(this.extractData)
                .catch(this.handleError)
                .publishReplay(1)
                .refCount();
        }

        return this._galleryObservable
            .map(data => this.filterGallery(data, input));
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
                    let copy: Gallery = Object.assign({}, x);
                    copy.photosCount = (copy.photos ? copy.photos.length : 0);
                    copy.photos = [];
                    return copy;
                })
                .sort((a, b) => { return b.year - a.year; });
        } else {

            let galleryItems: Gallery[] = data.sort((a, b) => { return b.year - a.year; });
            let gallerySections: Gallery[] = [];

            galleryItems.forEach(x => {
                // Check if we have already stored in our gallerySection, else continue
                let item: Gallery = gallerySections.find(y => y.section.toLowerCase() === x.section.toLowerCase());
                if (!item) {
                    let copy: Gallery = Object.assign({}, x);
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
            return gallerySections.sort((a, b) => { return a.section.toLowerCase().localeCompare(b.section.toLowerCase()); });
        }
    }
}
