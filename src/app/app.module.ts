import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { AnnouncementBarComponent } from './shared/announcement-bar/announcement-bar.component';
import { ContentComponent } from './shared/content/content.component';
import { GalleryCardComponent } from './shared/gallery-card/gallery-card.component';

import { AppService } from './services/app.service';
import { Api } from './services/app.service.api';
import { AppDimensionService } from './services/app.dimension.service';
import { AppNavigationService } from './services/app.navigation.service';
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
import { ResourcesComponent } from './components/resources/resources.component';
import { CmeComponent } from './components/cme/cme.component';
import { EventsComponent } from './components/events/events.component';
import { IndiafestComponent } from './components/indiafest/indiafest.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { TrapFocusDirective } from './app.trap-focus.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    AnnouncementBarComponent,
    ContentComponent,
    AboutComponent,
    BylawsComponent,
    MissionComponent,
    MembersComponent,
    AppFilterListPipe,
    RentalComponent,
    MembershipComponent,
    YouthGroupComponent,
    GalleryCardComponent,
    ResourcesComponent,
    CmeComponent,
    EventsComponent,
    IndiafestComponent,
    ContactComponent,
    NavigationComponent,
    TrapFocusDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [AppService, AppFilterListPipe, AppDimensionService, AppNavigationService, Api],
  bootstrap: [AppComponent]
})
export class AppModule { }
