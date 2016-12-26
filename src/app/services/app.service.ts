import { Injectable } from '@angular/core';
import { MembersData, AllMemberList, GalleryList, IndiaFestOrganizer, IcecContacts, Events } from './app.service.data';


@Injectable()
export class AppService {
    constructor() { }

    getMembers(input: Args): Promise<Members> {
        let item: MemberList;
        if (input.year)
            item = MembersData.find(member => member.year === input.year);
        else
            item = MembersData.sort((a, b) => { return b.year - a.year; })[0];
        if (!item)
            item = { year: null, boardMembers: [], executives: [], regularMembers: [] };
        let members: Members = { year: item.year, title: '', memberList: [] };

        switch (input.type) {
            case 'EM':
                members.title = 'Executive Members';
                members.memberList = item.executives;
                break;
            case 'BM':
                members.title = 'Board Members';
                members.memberList = item.boardMembers;
                break;
            case 'RM':
                members.title = 'Regular Members';
                members.memberList = item.regularMembers;
                break;
            case 'OM':
                members.title = 'Donor/Founding Members';
                members.memberList = AllMemberList;
                break;
            case 'IF':
                members.title = 'India Fest Organizer';
                members.memberList = IndiaFestOrganizer;
                break;
            case 'CU':
                members.title = 'Contact Us';
                members.memberList = IcecContacts.filter(x => x.membershipType.toLowerCase() === 'contacts');
                break;
            case 'NA':
                members.title = 'Newcomers Assistance';
                members.memberList = IcecContacts.filter(x => x.membershipType.toLowerCase() === 'assistance');
                break;

            default:
                members.title = 'Executive Members';
                members.memberList = item.executives;
                break;
        }
        return Promise.resolve(members);
    }

    getEvents(key: string): Promise<Event[]> {
        let returnItems: Event[];

        if (!key)
            returnItems = Events;
        else
            returnItems = Events.filter(x => x.key.toUpperCase() === key.toUpperCase());

        return Promise.resolve(returnItems);
    }

    getGallery(input: Args): Promise<Gallery[]> {
        let items: Gallery[];

        if (input.type && input.year)
            items = this.getGalleryWithPhoto(input.type, input.year);
        else {
            items = this.getGalleryBySection(input.type);
            if (items.length == 1)
                items = this.getGalleryWithPhoto(items[0].section, items[0].year);
        }
        return Promise.resolve(items);
    }

    private getGalleryWithPhoto(section: string, year: number): Gallery[] {
        return GalleryList.filter(x => x.year === year && x.section.toLowerCase() === section.toLowerCase()).slice(0, 1);
    }

    private getGalleryBySection(section: string): Gallery[] {
        if (section)
            return GalleryList.filter(x => (x.section || "").toLowerCase() === section.toLowerCase())
                .map(x => {
                    let copy: Gallery = Object.assign({}, x);
                    copy.photos = [];
                    return copy;
                });
        else {

            let galleryItems: Gallery[] = GalleryList.sort((a, b) => { return b.year - a.year; });
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

export class Args {
    year: number;
    type: string;
}

export class Members {
    year: number;
    title: string;
    memberList: Member[];
}

export class Member {
    membershipType: string;
    membershipTerm?: string;
    fullname: string;
    lastname: string;
    email?: string;
    contact?: string;
    title?: string;
    subtitle?: string;
}

export class MemberList {
    year: number;
    executives: Member[];
    boardMembers: Member[];
    regularMembers: Member[];
}

export class Photo {
    rows: number;
    caption: string;
    imageUrl: string;
}

export class Gallery {
    year: number;
    section: string;
    title: string;
    subtitle: string;
    row_height: number;
    max_image_width: number;
    imageUrl: string;
    photos: Photo[];
    hasMultiple?: boolean;
}

export class Event {
    key: string;
    title: string;
    date: string;
    time: string;
    venue: string;
    address?: string;
    person?: string;
    contact?: string;
    email?: string;
    subject?: string;
    ps?: string;
    eventUrl?: string;
}