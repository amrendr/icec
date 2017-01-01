
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
    thumbnail?: string;
    imageUrl: string;
}

export class Gallery {
    year: number;
    section: string;
    title: string;
    subtitle: string;
    row_height: number;
    max_image_width: number;
    poster: string;
    photos: Photo[];
    hasMultiple?: boolean;
}

export class CommunityEvent {
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

export class AnnouncementBar {
    interval: number;
    annoucements: Announcement[];
}

export class Announcement {
    title: string;
    desc: string;
    url: string;
}