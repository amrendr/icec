import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { AnnouncementBarComponent } from './shared/announcement-bar/announcement-bar.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { GalleryCardComponent } from './shared/gallery-card/gallery-card.component';

import { AppService } from './services/app.service';
import { AppDimensionService } from './services/app.dimension.service';
import { AppFilterListPipe } from './services/app.pipe';

import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BylawsComponent } from './components/bylaws/bylaws.component';
import { MissionComponent } from './components/mission/mission.component';
import { MembersComponent } from './components/members/members.component';
import { RentalComponent } from './components/rental/rental.component';
import { MembershipComponent } from './components/membership/membership.component';
import { YouthGroupComponent } from './components/youth-group/youth-group.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    AnnouncementBarComponent,
    NavigationComponent,
    AboutComponent,
    BylawsComponent,
    MissionComponent,
    MembersComponent,
    AppFilterListPipe,
    RentalComponent,
    MembershipComponent,
    YouthGroupComponent,
    GalleryCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  providers: [AppService, AppFilterListPipe, AppDimensionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
