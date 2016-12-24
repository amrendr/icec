import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { BylawsComponent } from './bylaws/bylaws.component';
import { MissionComponent } from './mission/mission.component';
import { MembersComponent } from './members/members.component';
import { RentalComponent } from './rental/rental.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'bylaws', component: BylawsComponent },
    { path: 'mission', component: MissionComponent },
    { path: 'members', redirectTo:'members/current/executives', pathMatch:'full' },
    { path: 'members/:type', component: MembersComponent },
    { path: 'members/:year/:type', component: MembersComponent },
    { path: 'rental', component: RentalComponent },
    { path: 'gallery', component: GalleryComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
