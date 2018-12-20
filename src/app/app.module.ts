import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IcecMaterialModule } from './icec-material.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AnnouncementBarComponent } from './shared/announcement-bar/announcement-bar.component';
import { ContentComponent } from './shared/content/content.component';
import { GalleryCardComponent } from './shared/gallery-card/gallery-card.component';

import { AppDimensionService } from './services/app.dimension.service';
import { AppNavigationService } from './services/app.navigation.service';
import { AppFilterListPipe } from './services/app.pipe';
import { AppService } from './services/app.service';
import { Api } from './services/app.service.api';

import { TrapFocusDirective } from './app.trap-focus.directive';
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
import { NavigationComponent } from './shared/navigation/navigation.component';
import { SponsorListComponent } from './shared/sponsor-list/sponsor-list.component';

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
    TrapFocusDirective,
    SponsorListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    IcecMaterialModule,
    AppRoutingModule
  ],
  providers: [AppService, AppFilterListPipe, AppDimensionService, AppNavigationService, Api],
  bootstrap: [AppComponent]
})
export class AppModule { }
