import { environment } from '../../environments/environment';
import { OnInit } from '@angular/core'

export class Api implements OnInit {
    public urls: any = {};

    constructor() {
        if (environment.production) {
            this.urls = {
                galleryListDataApi: '/api/v1/api.php?action=gallery',
                membersDataApi: '/api/v1/api.php?action=members',
                allMemberDataApi: '/api/v1/api.php?action=allMembers',
                indiafestOrganizerDataApi: '/api/v1/api.php?action=indiafest',
                icecContactsDataApi: '/api/v1/api.php?action=contacts',
                communityEventsDataApi: '/api/v1/api.php?action=events',
                announcementsDataApi: '/api/v1/api.php?action=announcement',
            };
        }
        else {
            this.urls = {
                galleryListDataApi: '/data/galleryList.json',
                membersDataApi: '/data/membersData.json',
                allMemberDataApi: '/data/allMemberList.json',
                indiafestOrganizerDataApi: '/data/indiafest.json',
                icecContactsDataApi: '/data/icecContacts.json',
                communityEventsDataApi: '/data/communityEvents.json',
                announcementsDataApi: '/data/annoucements.json'
            };
        }
    }

    ngOnInit() { }

}