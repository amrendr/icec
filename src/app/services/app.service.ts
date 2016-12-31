import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/rx';

import { Api } from './app.service.api';
import { Args, Members, MemberList, AnnouncementBar, Gallery, CommunityEvent } from './app.class';


@Injectable()
export class AppService {
    constructor(
        private http: Http,
        private api: Api
    ) { }


    private extractData(res: Response) {
        let body = res.text();
        //remove multileline comments
        body = body.replace(/\/\*[\s\S]*?\*\/.*?/g, "");
        //remove single line comments
        body = body.replace(/(\n|\r|\r\n)+?\s*?\/\/.*/g, "");
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
        let apiUrl: string;

        switch (input.type) {
            case 'OM':
                apiUrl = this.api.urls.allMemberDataApi;
                break;
            case 'IF':
                apiUrl = this.api.urls.indiafestOrganizerDataApi;
                break;
            case 'CU':
            case 'NA':
                apiUrl = this.api.urls.icecContactsDataApi;
                break;
            case 'EM':
            case 'BM':
            case 'RM':
            default:
                apiUrl = this.api.urls.membersDataApi;
                break;
        }

        return this.http.get(apiUrl)
            .map(this.extractData)
            .map(data => this.formatMembers(data, input))
            .catch(this.handleError);

    }

    private formatMembers(data: any, input: Args): Members {
        let members: Members = { year: input.year, title: '', memberList: [] };


        let item: MemberList;
        if (input.type == 'EM' || input.type == 'BM' || input.type == 'RM') {
            if (input.year)
                item = data.find(member => member.year === input.year);
            else
                item = data.sort((a, b) => { return b.year - a.year; })[0];
            if (!item)
                item = { year: null, boardMembers: [], executives: [], regularMembers: [] };
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
                members.memberList = data.filter(x => x.membershipType.toLowerCase() === 'contacts');
                break;
            case 'NA':
                members.title = 'Newcomers Assistance';
                members.memberList = data.filter(x => x.membershipType.toLowerCase() === 'assistance');
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
        return this.http.get(this.api.urls.announcementsDataApi)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getCommunityEvents(key: string): Observable<CommunityEvent[]> {

        return this.http.get(this.api.urls.communityEventsDataApi)
            .map(this.extractData)
            .map(data => this.filterCommunityEvent(data, key))
            .catch(this.handleError);
    }

    private filterCommunityEvent(data: any, key: string): CommunityEvent[] {
        let returnItems: CommunityEvent[];

        if (!key)
            returnItems = data;
        else
            returnItems = data.filter(x => x.key.toUpperCase() === key.toUpperCase());

        return returnItems;
    }

    getGallery(input: Args): Observable<Gallery[]> {
        return this.http.get(this.api.urls.galleryListDataApi)
            .map(this.extractData)
            .map(data => this.filterGallery(data, input))
            .catch(this.handleError);
    }

    private filterGallery(data: any[], input: Args): Gallery[] {
        let items: Gallery[];

        if (input.type && input.year)
            items = this.getGalleryWithPhoto(data, input.type, input.year);
        else {
            items = this.getGalleryBySection(data, input.type);
            if (items.length == 1)
                items = this.getGalleryWithPhoto(data, items[0].section, items[0].year);
        }
        return items;
    }

    private getGalleryWithPhoto(data: any[], section: string, year: number): Gallery[] {
        return data.filter(x => x.year === year && x.section.toLowerCase() === section.toLowerCase()).slice(0, 1);
    }

    private getGalleryBySection(data: any[], section: string): Gallery[] {
        if (section)
            return data.filter(x => (x.section || "").toLowerCase() === section.toLowerCase())
                .map(x => {
                    let copy: Gallery = Object.assign({}, x);
                    copy.photos = [];
                    return copy;
                });
        else {

            let galleryItems: Gallery[] = data.sort((a, b) => { return b.year - a.year; });
            let gallerySections: Gallery[] = [];

            galleryItems.forEach(x => {
                let item: Gallery = gallerySections.find(y => y.section.toLowerCase() === x.section.toLowerCase());
                if (!item) {
                    let copy: Gallery = Object.assign({}, x);
                    copy.photos = [];
                    gallerySections.push(copy);
                }
                else {
                    item.hasMultiple = true;
                }
            });
            return gallerySections.sort((a, b) => { return a.section.toLowerCase().localeCompare(b.section.toLowerCase()); });
        }
    }
}
