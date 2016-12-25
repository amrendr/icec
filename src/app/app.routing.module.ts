import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';
import { BylawsComponent } from './components/bylaws/bylaws.component';
import { MissionComponent } from './components/mission/mission.component';
import { MembersComponent } from './components/members/members.component';
import { RentalComponent } from './components/rental/rental.component';
import { MembershipComponent } from './components/membership/membership.component';
import { YouthGroupComponent } from './components/youth-group/youth-group.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'bylaws', component: BylawsComponent },
    { path: 'mission', component: MissionComponent },
    { path: 'members', redirectTo:'members/current/executives', pathMatch:'full' },
    { path: 'members/:type', component: MembersComponent },
    { path: 'members/:year/:type', component: MembersComponent },
    { path: 'membership', component: MembershipComponent },
    { path: 'youth', component: YouthGroupComponent },
    { path: 'rental', component: RentalComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'gallery/:section', component: GalleryComponent },
    { path: 'gallery/:section/:year', component: GalleryComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
