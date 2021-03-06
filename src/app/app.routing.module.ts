import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BylawsComponent } from './components/bylaws/bylaws.component';
import { CmeComponent } from './components/cme/cme.component';
import { ContactComponent } from './components/contact/contact.component';
import { EventsComponent } from './components/events/events.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { IndiafestComponent } from './components/indiafest/indiafest.component';
import { MembersComponent } from './components/members/members.component';
import { MembershipComponent } from './components/membership/membership.component';
import { MissionComponent } from './components/mission/mission.component';
import { RentalComponent } from './components/rental/rental.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { YouthGroupComponent } from './components/youth-group/youth-group.component';



const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'bylaws', component: BylawsComponent },
    { path: 'mission', component: MissionComponent },
    { path: 'members', redirectTo: 'members/current/executives', pathMatch: 'full' },
    { path: 'members/:type', component: MembersComponent },
    { path: 'members/:year/:type', component: MembersComponent },
    { path: 'membership', component: MembershipComponent },
    // { path: 'rental', component: RentalComponent },
    { path: 'youth', component: YouthGroupComponent },
    { path: 'resources', component: ResourcesComponent },
    { path: 'resources/:section', component: ResourcesComponent },
    { path: 'events', component: EventsComponent },
    { path: 'cme', component: CmeComponent },
    { path: 'indiafest', component: IndiafestComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'gallery/:section', component: GalleryComponent },
    { path: 'gallery/:section/:year', component: GalleryComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})

export class AppRoutingModule { }
