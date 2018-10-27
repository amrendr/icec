import { OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

export class Api implements OnInit {
    public urls: any = {};

    constructor() {
        if (environment.production) {
            this.urls = {
                galleryListDataApi: './api/v1/gallery',
                membersDataApi: './api/v1/members',
                allMemberDataApi: './api/v1/allMembers',
                indiafestOrganizerDataApi: './api/v1/indiafest',
                icecContactsDataApi: './api/v1/contacts',
                communityEventsDataApi: './api/v1/events',
                announcementsDataApi: './api/v1/announcement',
                sendMessageApi: './api/v1/message'
            };
        } else {
            this.urls = {
                galleryListDataApi: '/data/galleryList.json',
                membersDataApi: '/data/membersData.json',
                allMemberDataApi: '/data/allMemberList.json',
                indiafestOrganizerDataApi: '/data/indiafest.json',
                icecContactsDataApi: '/data/icecContacts.json',
                communityEventsDataApi: '/data/communityEvents.json',
                announcementsDataApi: '/data/annoucements.json',
                sendMessageApi: '/data/message.json'
            };
        }
    }

    ngOnInit() { }

}
